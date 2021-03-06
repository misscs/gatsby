"use strict"

const { join } = require(`path`)
const normalizePath = require(`normalize-path`)

module.exports = {
  OPTION_DEFAULT_LINK_TEXT: `REPL`,
  OPTION_DEFAULT_REDIRECT_TEMPLATE_PATH: normalizePath(
    join(__dirname, `default-redirect-template.js`)
  ),
  PROTOCOL_BABEL: `babel://`,
  PROTOCOL_CODEPEN: `codepen://`,
}
