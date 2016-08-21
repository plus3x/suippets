var istanbul = require("browserify-istanbul");

var PATH = {
    TEST: "test/**/*Spec.js",
    APP: "app/js/components/*.js"
};

module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: [
            "jasmine-jquery",
            "jasmine",
            "browserify",
        ],
        files: [
            PATH.TEST,
            PATH.APP
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
            PATH.TEST: ["browserify"],
            PATH.APP: ["browserify"]
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
