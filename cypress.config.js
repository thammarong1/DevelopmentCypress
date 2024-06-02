const { defineConfig } = require("cypress");


module.exports = defineConfig({
  screenshotsFolder:"cypress/reports/mochareports/assets",
  projectId: "isg9qs",
  "reporter": "cypress-multi-reporters",
  "reportOption":{
    "reporterEnable":"mochawesome",
    "mochawesomeReporterOption":{
      "reportDir":"./cypress/reports/mocha",
      "quiet":true,
      "overwrite":false,
      "html":false,
      "json":true
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true





});
