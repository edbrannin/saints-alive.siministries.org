const packageJson = require('../../package.json');

module.exports = {
  pkv: packageJson.version || 'v1',
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Saints Alive',
  siteDescription:
    'Saints Alive and Sunday Reflections by Fr. Robert McNamara',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Fr. Robert McNamara', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  developer: 'Ed Brannin', // i.e. Lene Saile - author's name. Must be set.
  developerEmail: 'edbrannin@gmail.com', // i.e. hola@lenesaile.com - email of the author
  developerWebsite: 'https://edbrannin.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/social/facebook-link-share.png',
    opengraph_twitter: '/assets/images/social/facebook-link-share.png',
    opengraph_insta: '/assets/images/social/facebook-link-share.png',
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '', // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My great Web Development Blog',
    description:
      'Vignettes about 500+ Saints, and Sunday reflections for each Liturgical year',
  },
  pagination: {
    itemsPerPage: 20,
  },
  address: {
    // edit all presets or leave empty.
    // They are being used in the pages for privacy.md and imprint.md
    firma: '',
    street: '',
    city: 'Rochester',
    state: 'NY',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'edbrannin@gmail.com',
    cif: '',
  },
  menu: {
    closedText: 'Menu',
  },
};
