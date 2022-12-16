/* eslint-disable camelcase */
import { isSunday, nextSunday, previousSunday } from 'date-fns';

// ------------------- cards redundant click, accessible whole card clickable solution by Heydon Pickering

const cards = [...document.querySelectorAll('.card')];
cards.forEach(card => {
  card.style.cursor = 'pointer';
  let down,
    up,
    link = card.querySelector('a');
  card.onmousedown = () => (down = +new Date());
  card.onmouseup = () => {
    up = +new Date();
    if (up - down < 200) {
      link.click();
    }
  };
});

// ------------------- responsive accessible nav

const nav = document.querySelector('nav');
const list = nav.querySelector('ul');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const svg = nav.querySelector('svg');

const button = burgerClone.querySelector('button');
button.addEventListener('click', e => {
  const isOpen = button.getAttribute('aria-expanded') === 'false';
  button.setAttribute('aria-expanded', isOpen);
});

// avoid DRY: disabling menu
const disableMenu = () => {
  button.setAttribute('aria-expanded', false);
  button.focus();
};

//  close on escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener('click', e => {
  const isClickInsideElement = nav.contains(e.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

nav.insertBefore(burgerClone, list);

const setupSundayReflections = async () => {
  const cal = {} // TODO
  window.cal = cal;
  console.log('Calendar:', cal);

  const today = new Date();
  const lastSundayDate = previousSunday(today);
  const nextSundayDate = nextSunday(today);

  /**
   * 
   * @param {Date} date
   * @returns 
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
document.setupSundayReflections = setupSundayReflections;
window.Romcal = Romcal;
