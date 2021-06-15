const path = require('path');

function addBrowserStackConfig(configObj) {
  const launchers = {
    bsFirefox: {
      base: 'BrowserStack',
      browser: 'firefox',
      os: 'Windows',
      os_version: '10',
    },
    bsSafari: {
      base: 'BrowserStack',
      browser: 'safari',
      os: 'OS X',
      os_version: 'High Sierra',
    },
    bsEdge: {
      base: 'BrowserStack',
      browser: 'edge',
      browser_version: '14',
      os: 'Windows',
      os_version: '10',
    },
    bsChrome: {
      base: 'BrowserStack',
      browser: 'chrome',
      os: 'Windows',
      os_version: '10',
    },
  };

  configObj.reporters = ['mocha', 'BrowserStack'];
  configObj.plugins.push(require('karma-browserstack-launcher'));
  configObj.browserStack = {};
  configObj.customLaunchers = launchers;
  configObj.browsers = launchers;
}

module.exports = (config) => {
  const configObj = {
    /**
     * General base config:
     */
    basePath: __dirname,

    files: ['src/*.ts'],

    frameworks: ['mocha', 'karma-typescript'],
    reporters: ['mocha', 'karma-typescript'],

    client: {
      mocha: {
        timeout: 10000,
      },
    },

    plugins: [
      require('karma-typescript'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('@onslip//karma-safari-launcher'),
    ],
    karmaTypescriptConfig: {
      bundlerOptions: {
        transforms: [require('karma-typescript-es6-transform')()],
      },
    },

    preprocessors: {
      'src/*.ts': 'karma-typescript',
    },

    /**
     * Karma run config:
     */
    browsers: ['ChromeHeadless'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: true,

    mochaReporter: {
      showDiff: true,
    },
  };

  const isBrowserstack = Boolean(process.env.USE_BROWSER_STACK);

  if (isBrowserstack) {
    addBrowserStackConfig(configObj);
  }

  config.set(configObj);
};
