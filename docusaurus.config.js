const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

module.exports = {
  title: "aoi.js",
  tagline: "aoi.js documentation",
  url: "https://aoijs.js.org",
  baseUrl: "/",
  favicon: "img/logo.png",
  organizationName: "aoijs",
  projectName: "website",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  themeConfig: {
    image: "https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true",
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: ["php", "powershell", "diff", "typescript"],
    },
    // Translations later on
    algolia: {
      appId: "7NDV3UYBW5",
      apiKey: "dcc8ae1731cfa8322571b65e9a3e9faf",
      indexName: "aoi-js",
      contextualSearch: true,
    },
    announcementBar: {
      id: "support_us",
      content: 'Join our <a target="_blank" rel="noopener noreferrer" href="https://aoi.js.org/invite">Discord Server</a> for real-time support!',
      backgroundColor: "#1976d2",
      textColor: "#ffffff",
      isCloseable: false,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: `aoi.js`,
      logo: {
        alt: "aoi.js logo",
        src: "img/logo.png",
        width: 33,
        height: 30,
      },
      items: [
        {
          to: "docs/",
          activeBaseRegex: "docs(?!/guides|/extensions|/community)",
          label: "Documentation",
          position: "left",
        },
        {
          to: "docs/guides/setup",
          activeBasePath: "docs/guides",
          label: "Guides",
          position: "left",
        },
        {
          to: "credits/",
          activeBasePath: "credits",
          label: "Credits",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: "https://crowdin.com/translate/aoijs-documentation/all/",
              label: "Contribute & Translate",
            },
          ],
        },
        {
          href: "https://github.com/AkaruiDevelopment/aoi.js",
          position: "right",
          className: "header-github-link",
          "aria-label": "no-mobile",
        },
        {
          href: "https://aoi.js.org/invite",
          position: "right",
          className: "header-discord-link",
          "aria-label": "no-mobile",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "docs/guides/setup",
            },
            {
              label: "Extensions",
              to: "extensions/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord Server",
              href: "https://aoi.js.org/invite/",
            },
            {
              label: "Github",
              href: "https://github.com/AkaruiDevelopment/aoi.js/",
            },
            {
              label: "Credits",
              to: "credits/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Contributing",
              href: "https://github.com/AkaruiDevelopment/aoi.js-documentation/blob/v6/.github/contributing-example.md/",
            },
            {
              label: "Privacy",
              to: "privacy/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Akarui Development | AoiEngine v7.0.0`,
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-BFNTC2Y655",
        },
      },
    ],
  ],
};
