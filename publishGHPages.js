/* eslint-disable @typescript-eslint/no-var-requires */
const ghpages = require('gh-pages')
ghpages.publish('static', (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log('github pages published')
  }
})