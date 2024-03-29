/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'ilxanlar',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://github.com/ilxanlar',
    pinned: true,
  },
];

const siteConfig = {
  title: 'React Hooks Form', // Title for your website.
  tagline: 'React Forms the Hooks Way',
  url: 'https://ilxanlar.github.io', // Your website URL
  baseUrl: '/react-hooks-form/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'react-hooks-form',
  organizationName: 'ilxanlar',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'guides/organize-fields', label: 'Guides'},
    {doc: 'components/Form', label: 'Components'},
    {doc: 'hooks/useFormFieldValue', label: 'Hooks'},
    {href: 'https://github.com/ilxanlar/react-hooks-form', label: 'Github'},
    {search: true}
  ],

  algolia: {
    apiKey: '86ff039b1381b54062423e24971ff268',
    appId: '1ZVY17J80N',
    indexName: 'react_hooks_form_production',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/react-hooks-form-header-icon.png',
  // footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2ed573',
    secondaryColor: '#2ed573',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Mehdi Namvar`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    defaultLang: 'javascript',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/react-hooks-form.png',
  twitterImage: 'img/react-hooks-form.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/ilxanlar/react-hooks-form',

  usePrism: ['js', 'jsx'],
};

module.exports = siteConfig;
