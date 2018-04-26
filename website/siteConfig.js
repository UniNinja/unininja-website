/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  title: '' /* title for your website */,
  tagline: 'UniNinja',
  url: 'https://uni.ninja' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'unininja',
  organizationName: 'UniNinja',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {page: 'index', label: 'Home'},
    {page: 'team', label: 'Meet the Team'},
    {doc: 'introduction', label: 'Developers'}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  favicon: 'img/favicon/favicon.ico',

  /* colors for website */
  colors: {
    primaryColor: '#1a64db',
    secondaryColor: '#124597'
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    new Date().getFullYear() +
    ' UniNinja',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'atom-one-dark'
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate'
}

module.exports = siteConfig
