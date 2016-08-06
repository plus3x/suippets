var istanbul = require("browserify-istanbul");

module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: [
            "jasmine-jquery",
            "jasmine",
            "browserify",
        ],
        files: [
            "test/**/*Spec.js",
            "app/js/components/*.js"
        ],
        exclude: [
            "yes"
        ],
        browserify: {
            debug: true,
            transform: [ "babelify", istanbul({
               ignore: ["**/node_modules/**", "**/test/**"]
            })]
        },
        preprocessors: {
            "test/**/*Spec.js": ["browserify"],
            "app/js/components/*.js": ["browserify"]
        },
        reporters: ["progress", "coverage"],
        coverageReporter: {
            type : "text",
            dir : "coverage/"
        },
        hostname: "0.0.0.0",
        port: 9898,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: false,
        concurrency: Infinity
    })
}
