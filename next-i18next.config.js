const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
};
