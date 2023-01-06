/* eslint-disable camelcase */
import { isSunday, nextSunday, previousSunday, isToday, isTomorrow, parseISO, isSameDay } from 'date-fns';
import romcal from 'romcal';

const getEventsForYear = (year) => romcal.calendarFor({
  year,
  country: 'unitedStates',
  locale: 'en',
  ascensionOnSunday: false,
}).map((entry) => ({ date: parseISO(entry.moment), ...entry }));

// eslint-disable-next-line import/prefer-default-export
export const setupSundayReflections = async () => {
  const today = new Date();
  const lastSundayDate = previousSunday(today);
  const nextSundayDate = nextSunday(today);

  const thisYear = today.getFullYear();

  const cal = [
    ...getEventsForYear(thisYear - 1),
    ...getEventsForYear(thisYear),
    ...getEventsForYear(thisYear + 1),
  ].filter(({ date }) => isSameDay(lastSundayDate, date)
    || isSameDay(nextSundayDate, date)
    || isToday(date)
    || isTomorrow(date));

  window.cal = cal;
  console.log('Calendar:', cal);

  /**
   * 
   * @param {Date} date
   * @return
   */
  const getDay = (date) => {
    // TODO handle year boundaries
    const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const result = cal[date];
    console.log(`Getting entries for ${key}:`, result);
    if (result) {
      return result[0];
    }
    return null;
  };

  const result = {
    lastSundayDetails: getDay(lastSundayDate),
    nextSundayDetails: getDay(nextSundayDate),
  };

  if (isSunday(today)) {
    result.todayDetails = getDay(today);
  }

  window.result = result;

  return result;
};

window.setupSundayReflections = setupSundayReflections;
window.romcal = romcal;
