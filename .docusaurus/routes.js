import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b14'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '428'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '679'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2f8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '3f6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5ef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'fb7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '7bb'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '586'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '4ae'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'e9d'),
            routes: [
              {
                path: '/community',
                component: ComponentCreator('/community', '394'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/azure-data-studio',
                component: ComponentCreator('/extensions-plugins/azure-data-studio', 'f35'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/chrome',
                component: ComponentCreator('/extensions-plugins/chrome', 'b01'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/edge',
                component: ComponentCreator('/extensions-plugins/edge', '563'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/firefox',
                component: ComponentCreator('/extensions-plugins/firefox', 'b76'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/jetbrains',
                component: ComponentCreator('/extensions-plugins/jetbrains', '732'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/jupyterlab',
                component: ComponentCreator('/extensions-plugins/jupyterlab', '827'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/obsidian',
                component: ComponentCreator('/extensions-plugins/obsidian', '8d1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/teams',
                component: ComponentCreator('/extensions-plugins/teams', '370'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/visual-studio',
                component: ComponentCreator('/extensions-plugins/visual-studio', '00d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/extensions-plugins/vscode',
                component: ComponentCreator('/extensions-plugins/vscode', '4b5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/faq',
                component: ComponentCreator('/faq', '07f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/auto-enrichment',
                component: ComponentCreator('/features/auto-enrichment', '060'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/back-up-and-restore',
                component: ComponentCreator('/features/back-up-and-restore', '9de'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/code-completion',
                component: ComponentCreator('/features/code-completion', 'c9b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/creation-and-generation',
                component: ComponentCreator('/features/creation-and-generation', '2c8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/global-search',
                component: ComponentCreator('/features/global-search', 'b54'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/keyboard-shortcuts',
                component: ComponentCreator('/features/keyboard-shortcuts', '727'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/managing-saved-materials',
                component: ComponentCreator('/features/managing-saved-materials', '8f7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/one-click-snippet-sharing',
                component: ComponentCreator('/features/one-click-snippet-sharing', 'f90'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/pieces-copilot',
                component: ComponentCreator('/features/pieces-copilot', '90a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/search-modes',
                component: ComponentCreator('/features/search-modes', 'b2b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/transforming-snippets',
                component: ComponentCreator('/features/transforming-snippets', '2f1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/user-settings',
                component: ComponentCreator('/features/user-settings', '20f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/features/workflow-activity',
                component: ComponentCreator('/features/workflow-activity', '7f7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/installation-getting-started/linux',
                component: ComponentCreator('/installation-getting-started/linux', '935'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/installation-getting-started/macos',
                component: ComponentCreator('/installation-getting-started/macos', 'd64'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/installation-getting-started/pieces-os',
                component: ComponentCreator('/installation-getting-started/pieces-os', '9ba'),
                exact: true
              },
              {
                path: '/installation-getting-started/what-am-i-installing',
                component: ComponentCreator('/installation-getting-started/what-am-i-installing', '227'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/installation-getting-started/windows',
                component: ComponentCreator('/installation-getting-started/windows', '2da'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/new-to-pieces/how-our-search-works',
                component: ComponentCreator('/new-to-pieces/how-our-search-works', '2ab'),
                exact: true
              },
              {
                path: '/privacy-policy',
                component: ComponentCreator('/privacy-policy', 'cb3'),
                exact: true
              },
              {
                path: '/product-highlights-and-benefits/collections',
                component: ComponentCreator('/product-highlights-and-benefits/collections', '99e'),
                exact: true
              },
              {
                path: '/product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance',
                component: ComponentCreator('/product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance', '452'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/product-highlights-and-benefits/in-project-snippet-discovery',
                component: ComponentCreator('/product-highlights-and-benefits/in-project-snippet-discovery', '07e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/product-highlights-and-benefits/privacy-security-data',
                component: ComponentCreator('/product-highlights-and-benefits/privacy-security-data', 'b3f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/product-highlights-and-benefits/saving-screenshots',
                component: ComponentCreator('/product-highlights-and-benefits/saving-screenshots', '92a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/product-highlights-and-benefits/saving-to-and-from-github-gists',
                component: ComponentCreator('/product-highlights-and-benefits/saving-to-and-from-github-gists', 'a1b'),
                exact: true
              },
              {
                path: '/product-highlights-and-benefits/saving-useful-developer-materials',
                component: ComponentCreator('/product-highlights-and-benefits/saving-useful-developer-materials', '753'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/product-highlights-and-benefits/sync-across-multiple-devices-using-github',
                component: ComponentCreator('/product-highlights-and-benefits/sync-across-multiple-devices-using-github', '1e6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/resources',
                component: ComponentCreator('/resources', '33c'),
                exact: true
              },
              {
                path: '/support',
                component: ComponentCreator('/support', 'cac'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/terms',
                component: ComponentCreator('/terms', '7ff'),
                exact: true
              },
              {
                path: '/use-cases/countless-google-searches',
                component: ComponentCreator('/use-cases/countless-google-searches', '405'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/use-cases/onboard-new-developers',
                component: ComponentCreator('/use-cases/onboard-new-developers', 'fd2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/use-cases/resurfacing-additional-context',
                component: ComponentCreator('/use-cases/resurfacing-additional-context', 'aaf'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'b91'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
