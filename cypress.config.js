const { defineConfig } = require("cypress");

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
    },

    specPattern: 'cypress/integration/*js'

  },
});
