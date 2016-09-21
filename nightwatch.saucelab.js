require('dotenv').config({silent: true});
const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;

module.exports = {
  "src_folders" : ["__TESTS__/end2end/"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : "",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://ondemand.saucelabs.com:80",
      "selenium_port"  : 80,
      "selenium_host"  : "ondemand.saucelabs.com",
      "silent": true,
      "username": process.env.SAUCE_USERNAME,
      "access_key": process.env.SAUCE_ACCESS_KEY,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      desiredCapabilities: {
        "build" : `build-${TRAVIS_JOB_NUMBER}`,
        "tunnel-identifier": TRAVIS_JOB_NUMBER,
      },
      globals: {
        "waitForConditionTimeout": 10000,
      }
    },

    "chrome" : {
      "desiredCapabilities" : {
        "browserName" : "chrome",
        "platform" : "Windows 10",
        "version" : "52.0"
      }
    },

    "ie11" : {
      "desiredCapabilities" : {
        "browserName" : "internet explorer",
        "platform" : "Windows 10",
        "version" : "11.0"
      }
    },

    "edge" : {
      "desiredCapabilities" : {
        "browserName" : "MicrosoftEdge",
        "platform" : "Windows 10",
        "version" : "13.10586"
      }
    },

    "firefox" : {
      "desiredCapabilities" : {
        "browserName" : "firefox",
        "platform" : "Windows 10",
        "version" : "47"
      }
    },

    // "opera" : {
    //   "desiredCapabilities" : {
    //     "browserName" : "opera",
    //     "platform" : "Linux",
    //     "version" : "12.15"
    //   }
    // },

    "safari" : {
      "desiredCapabilities" : {
        "browserName" : "safari",
        "platform" : "OS X 10.11",
        "version" : "9.0"
      }
    }

  }
}