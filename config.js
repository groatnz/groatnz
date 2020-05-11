module.exports = {
  // I18n settings.
  // If you wanna add another language, add it below.
  // Use language code in ISO 639-1 format.
  languages: {
    en: 'English'
  },
  mainLanguage: 'en',

  // Default values for frontmatter data.
  // If you want to add custom data, add them below.
  frontmatter: {
    title: 'Groat',
    description: 'Software Generation',
    color: '#809080'
  },

  // Data for <meta> tags and PWA.
  meta: {
    name: 'Groat.nz',
    shortName: 'groatnz',
    url: 'http://groat.nz',
    image: '/static/images/groat-small.svg',
    twitter: '@avowkind',
    themeColor: '#809080',
    backgroundColor: '#000000'
  },

  // Sidebar links settings.
  // Please provide settings for all supported languages.
  sidebar: {
    en: [
      ['Home', '/'],
      ['Resume', '/resume'],
      ['Dev skills', '/tech-skills'],
      ['IT skills', '/sfia-skills'],
      ['Quotes', '/quotes']
    ]
  },

  // Header links settings.
  // Please provide settings for all supported languages.
  header: {
    en: [['GitHub', 'https://github.com/groatnz']]
  }
}
