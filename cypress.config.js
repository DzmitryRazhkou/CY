const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'bohijf',

  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 4000,
  reporter: 'mochawesome',
  
  env: {
    url: 'https://rahulshettyacademy.com/angularpractice/'
  },
  retries: {
    runMode: 1,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('file:preprocessor', cucumber())

    },

    specPattern: 'cypress/integration/BDD/*.feature'

  },
});
