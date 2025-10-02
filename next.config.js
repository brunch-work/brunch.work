const { withPlausibleProxy } = require("next-plausible");

const path = require("path");
module.exports = withPlausibleProxy()({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
});
