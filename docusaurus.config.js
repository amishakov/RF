// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const navLinks =  [	{ to: '/overview/Start', label: 'Overview', position: 'left' },
					{ to: '/thinking/Start', label: 'Thinking', position: 'left' },
					{ to: '/risks/Start', label: 'Risks', position: 'left' },
					{ to: '/practices/Start', label: 'Practices', position: 'left' },
					{ to: '/methods/Start', label: 'Methods', position: 'left' },
					{ to: '/books/Start', label: 'Books', position: 'left' },
					{ to: '/bets/Start', label: 'Bets', position: 'left' },
					{ to: '/estimating/Start', label: 'Estimating', position: 'left' },
					{ to: '/presentations/Start', label: 'Presentations', position: 'left' },
					{ to: '/ai/Start', label: 'AI', position: 'left' },
					]

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Risk First',
	tagline: 'Exploring the risks that ruin software projects',
	favicon: 'img/favicon/apple-icon-180x180.png',

	// Set the production url of your site here
	url: 'https://riskfirst.org',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',
	trailingSlash: false,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'risk-first', // Usually your GitHub org/user name.
	projectName: 'website', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	//onInlineTags: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" wrouteith "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: './sidebars.js',
					remarkPlugins: [remarkMath],
					rehypePlugins: [rehypeKatex],
					editUrl:
						'https://github.com/risk-first/website/blob/master/',
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
				gtag: {
					trackingID: 'G-TN9XHX17P8',
					anonymizeIP: true,
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
		announcementBar: {
		      id: 'support_us',
		      content:
		        'Risk-First Software Development Second Edition - Coming Soon! <a target="_blank" rel="noopener noreferrer" href="/Risk-First-Second-Edition">Click here for details</a>',
		      backgroundColor: 'rgb(245, 62,121)',
		      textColor: '#ffffff',
		      isCloseable: true,
		    },	
			image: 'img/generated/titles/index.png',
			metadata: [
				{ name: 'msvalidate.01', content: "3D19A6D7C17D82567867CF4238511ED1" }
			],
			navbar: {
				title: 'Risk First',
				logo: {
					alt: 'Risk First Logo',
					src: 'img/R1_logo_round_white.svg',
					srcDark: 'img/R1_logo_round_black.svg'
				},
				items: [
					...navLinks,
					{
						href: 'https://github.com/risk-first/website',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				logo: {
					alt: 'Meta Open Source Logo',
					src: 'img/R1_logo_round_black.svg',
					width: '100px',
				},
				links: [
					{
						title: 'Docs',
						items: navLinks,
					},
					{
						title: 'Further Info',
						items: [
							{
								label: 'RiskFirst GitHub Team (News)',
								href: 'https://github.com/orgs/risk-first/teams/risk-first-team',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/risk-first/website',
							},
							{
								label: 'Rob On LinkedIn',
								href: 'https://www.linkedin.com/in/robmoffat/',
							},
						],
					},
					{
						title: 'GitHub',
						items: [
							{
								html: '<a href="https://github.com/risk-first/website/stargazers"><img src="https://img.shields.io/github/stars/risk-first/website" alt="GitHub Stars"/></a>',
							},
							{
								html: '<a href="https://github.com/risk-first/website/forks"><img src="https://img.shields.io/github/forks/risk-first/website" alt="GitHub Forks"/></a>',
							},
							{
								html: '<a href="https://github.com/risk-first/website/watchers"><img src="https://img.shields.io/github/watchers/risk-first/website" alt="GitHub Watchers"/></a>',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Kite9 Ltd. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			algolia: {
				appId: 'P1W8LCRYQS',
				apiKey: '28516b430d4426535a30d5ce61cd0e7d',
				indexName: 'riskfirst',
				searchPagePath: 'search',
				contextualSearch: false,
				searchParameters: {}
			},
		}),
	plugins: ['./src/plugins/category-listing']
};

export default config;
