import Logo from '../../assets/header/Portal_Logo.svg';
import LogoSmall from '../../assets/header/Portal_Logo_Small.svg';
import searchbarIcon from '../../assets/header/Search_Icon.svg';
import usaFlagSmall from '../../assets/header/us_flag_small.svg';

// globalHeaderLogo image 468x100
// globalHeaderImage: image 2200x100
export const headerData = {
  globalHeaderLogo: Logo,
  globalHeaderLogoSmall: LogoSmall,
  globalHeaderLogoLink: '/',
  globalHeaderLogoAltText: 'Portal Logo',
  globalHeaderSearchIcon: searchbarIcon,
  globalHeaderSearchIconAltText: 'search Icon',
  usaFlagSmall,
  usaFlagSmallAltText: 'usaFlagSmall',
};

export const navMobileList = [
  {
    name: 'Back to CCDI Hub',
    link: 'https://ccdi.cancer.gov/home',
    external: true,
    id: 'navbar-link-back-to-ccdi-hub',
    className: 'navMobileItem',
  },
  // {
  //   name: 'Home',
  //   link: '',
  //   id: 'navbar-link-home',
  //   className: 'navMobileItem',
  // },
  {
    name: 'Data Sets',
    link: '/datasets',
    id: 'navbar-link-datasets',
    className: 'navMobileItem',
  },
  // {
  //   name: 'Web API',
  //   link: 'https://docs.cbioportal.org/web-api-and-clients/',
  //   external: true,
  //   id: 'navbar-link-web-api',
  //   className: 'navMobileItem',
  // },
  {
    name: 'cBio Documents',
    link: '',
    id: 'navbar-dropdown-cbio-documents',
    className: 'navMobileItem clickable',
  },
  // {
  //   name: 'About',
  //   link: '/about',
  //   id: 'navbar-link-about',
  //   className: 'navMobileItem',
  // },
  // {
  //   name: 'Login',
  //   link: '/login',
  //   id: 'navbar-link-login',
  //   className: 'navMobileItem',
  //   notExistInNav: true,
  // },
];

export const navbarSublists = {
  // Example of how to do a navMobileSubTitle and subtext
  // Home: [
  //   {
  //     name: 'Explore ##',
  //     link: '',
  //     text: 'testText',
  //     className: 'navMobileSubTitle',
  //   },
  // ],
  'cBio Documents': [
    {
      name: 'Tutorials/Webinars',
      link: 'https://docs.cbioportal.org/user-guide/overview/',
      external: true,
      // text: 'testText for subitem #1',
      text: '',
      id: 'navbar-dropdown-item-navbar-subitem-1',
      className: 'navMobileSubItem',
    },
    {
      name: 'FAQ',
      link: 'https://docs.cbioportal.org/user-guide/faq/',
      external: true,
      text: '',
      // text: 'testText for subitem #2',
      id: 'navbar-dropdown-item-navbar-subitem-2',
      className: 'navMobileSubItem',
    },
    {
      name: 'News',
      link: 'https://docs.cbioportal.org/news/',
      external: true,
      text: '',
      // text: 'testText for subitem #3',
      id: 'navbar-dropdown-item-navbar-subitem-3',
      className: 'navMobileSubItem',
    },
    {
      name: 'Visualize Your Data',
      link: '/visualize',
      text: '',
      // text: 'testText for subitem #4',
      id: 'navbar-dropdown-item-navbar-subitem-4',
      className: 'navMobileSubItem',
    },
  ],
  // About: [
  //   {
  //     name: 'Other Resources',
  //     link: '/or',
  //     id: 'navbar-dropdown-item-other-resources',
  //     className: 'navMobileSubTitle',
  //   },
  //   {
  //     name: 'Cancer Genomics Cloud',
  //     link: '/cgc',
  //     id: 'navbar-dropdown-item-cancer-genomics-cloud',
  //     className: 'navMobileSubItem',
  //   },
  //   {
  //     name: 'Database of Genotypes and Phenotypes',
  //     link: '/dbgap',
  //     id: 'navbar-dropdown-item-database-of-genotypes-and-phenotypes',
  //     className: 'navMobileSubItem',
  //   },
  // ],
};
