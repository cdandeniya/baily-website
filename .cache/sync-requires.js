
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/echanuld/Baily/website-main/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/echanuld/Baily/website-main/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/echanuld/Baily/website-main/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/echanuld/Baily/website-main/src/pages/index.js")),
  "component---src-pages-sponsors-js": preferDefault(require("/Users/echanuld/Baily/website-main/src/pages/sponsors.js"))
}

