const fs = require('node:fs');
const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    organisationLogo: fs.readFileSync('./assets/logo.svg', 'utf8'),
    organisationName: 'X-GOVUK'
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['njk', 'md'],
    dir: {
      layouts: '_layouts'
    }
  }
}
