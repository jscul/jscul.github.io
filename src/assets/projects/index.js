import owlsightLogo from './owlsight/clientLogo.png';
import neaLogo from './eczemawise/appLogo.png';
import aspireLogo from './aspire/appLogo.png';
import bmsClientLogo from './bms/clientLogo.png';
import selfClientLogo from './portfolio/clientLogo.png';

export default {
  eczemawise: {
    title: `EczemaWise`,
    slogan: `Eczema Shared Decision Making`,
    github: null,
    live: {
      web: `https://www.eczemawise.org/`,
      android: `https://play.google.com/store/apps/details?id=com.eczemawiseapp&hl=en_US&gl=US`,
      ios: `https://apps.apple.com/us/app/id1522743215`,
    },
    client: {
      logo: neaLogo,
      name: `National Eczema Association`,
      url: 'https://nationaleczema.org/',
    },
    articles: [
      `https://nationaleczema.org/meet-eczemawise/`,
      `https://www.prnewswire.com/news-releases/first-of-its-kind-app-aims-to-help-those-with-eczema-better-manage-condition-301150769.html`,
      `https://practicaldermatology.com/news/nea-launches-free-app-to-help-those-with-eczema-better-manage-condition`,
      `http://www.elivingtoday.com/lifestyle/item/1186-make-managing-eczema-easier`,
    ],
  },
  owlsight: {
    title: `OwlSight (NDA)`,
    slogan: ``,
    github: null,
    live: {},
    client: {
      logo: owlsightLogo,
    },
    articles: [],
  },
  porfolio: {
    title: 'Portfolio Site',
    slogan: `You may think I can code, well you'd be right.`,
    github: 'https://github.com/jscul/portfolio',
    live: {},
    client: {logo: selfClientLogo},
    articles: [],
  },
  aspire: {
    title: `Aspire News App`,
    slogan: `Free App For Helping Prevent Domestic Violence`,
    github: null,
    live: {
      ios: `https://apps.apple.com/us/app/aspire-news-app/id1313564226`,
      android: `https://play.google.com/store/apps/details?id=com.aspireapp&hl=en_US&gl=US`,
    },
    client: {
      logo: aspireLogo,
      name: `When Georgia Smiled - The Robin McGraw and Dr. Phil Foundation`,
      url: 'https://www.whengeorgiasmiled.org/',
    },
    articles: [
      `https://www.whengeorgiasmiled.org/aspire-news-app/`,
      `https://www.snopes.com/news/2015/06/29/aspire-news-app/`,
      `https://techcrunch.com/2020/06/25/aspire-app-dr-phil/`,
      `https://www.drphil.com/show-pages/14016_aspirenewsapp/`,
      `https://www.techsafety.org/aspire`,
    ],
  },
  bms: {
    title: 'Bristol Myers Squibb - Parallax Site',
    slogan: `With every cell in their being, patients give their all. So do we.`,
    github: null,
    live: {web: 'https://witheverycell.com/'},
    client: {
      logo: bmsClientLogo,
      name: `Bristol Myers Squibb`,
      url: 'https://www.bms.com/',
    },
    articles: [],
  },
};
