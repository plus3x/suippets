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
            "./__TESTS__/unit/**/*Spec.js",
            "app/js/components/*.js"
        ],
        exclude: [
            "yes"
        ],
        browserify: {
            debug: true,
            transform: ["babelify", istanbul({
                instrumenterConfig: { embedSource: true },
                ignore: ["**/node_modules/**", "**/__TESTS__/unit/**"]
            })]
        },
        preprocessors: {
            "./__TESTS__/unit/**/*Spec.js": ["browserify"],
            "app/js/components/*.js": ["browserify"]
        },
        reporters: ["progress", "coverage"],
        coverageReporter: {
            dir : "coverage/",
            reporters: [
                { type: 'text' },
                { type: 'lcov', subdir: 'report-lcov' }
            ]
        },
        hostname: "0.0.0.0",
        port: 9898,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: false,
        concurrency: Infinity
    });
}
