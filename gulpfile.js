"use strict";

let
gulp = require( "gulp" ),
sass = require( "gulp-sass" ),
autoprefixer = require( "gulp-autoprefixer" ),
browserSync = require( "browser-sync").create(),
concat = require( "gulp-concat" ),
browserify = require( "browserify" ),
babelify = require( "babelify" ),
uglify = require( "gulp-uglify" ),
fileinclude = require( "gulp-file-include" ),
source = require( "vinyl-source-stream" ),
PAGES = require( "./routes.js" );

let packageJson = require( "./package.json" );
const DEPENDENCIES = Object.keys( packageJson && packageJson.dependencies || {});

let ENTRIES = {
  SASS_ALL: "./app/sass/**/*.scss",
  SASS_MAIN: "./app/sass/style.scss",
  CSS: "./dist/css/style.css",
  JS_ALL: "./app/js/**/*.js",
  JS_MAIN: "./app/js/main.js",
  JS_BUNDLE: "./dist/bundle.js",
  JS_VENDORS: "./dist/vendors.js",
  HTML_INDEX: "./app/views/index.html",
  HTML_ALL: "./app/views/**/*.html"
};

let OUTPUT = {
  INDEX: "./",
  CSS: "./dist/css",
  BUNDLE: "bundle.js",
  VENDORS: "vendors.js",
  PAGES: "./pages/**/*.html",
  PATH: "dist"
};

function handleErrors( err ) {
  console.log("\nERROR:");
  console.log( err.toString() );
  console.log( err.loc );
  console.log( "filename ", err.filename, "\n" );

  this.emit( "end" );
}

// Vendors tasks

gulp.task( "vendors", () => {
  return browserify()
  .require( DEPENDENCIES )
  .bundle()
  .on( "error", handleErrors )
  .pipe( source( OUTPUT.VENDORS ) )
  .pipe( gulp.dest( OUTPUT.PATH ) );
});

gulp.task( "compress-vendors", [ "vendors" ], () => {
  return gulp.src( ENTRIES.JS_VENDORS )
  .pipe( uglify() )
  .pipe( gulp.dest( OUTPUT.PATH ) );
});

// Scripts tasks

gulp.task( "scripts", () => {
  return browserify({
    entries: [ ENTRIES.JS_MAIN ],
    extensions: [ "js" ],
    debug: true
  })
  .transform( "babelify", { presets: [ "es2015" ] } )
  .external( DEPENDENCIES )
  .bundle()
  .on( "error", handleErrors )
  .pipe( source( OUTPUT.BUNDLE ) )
  .pipe( gulp.dest( OUTPUT.PATH ) );
});

gulp.task( "compress-scripts", () => {
  return gulp.src( ENTRIES.JS_BUNDLE )
  .pipe( uglify() )
  .pipe( gulp.dest( OUTPUT.PATH ) );
});

// Sass tasks

gulp.task( "sass", () => {
  return gulp.src( ENTRIES.SASS_MAIN )
  .pipe( sass().on( "error", sass.logError ) )
  .pipe( sass({ outputStyle: "compressed" }) )
  .pipe( gulp.dest( OUTPUT.CSS ) )
  .pipe( browserSync.stream() );
});

gulp.task( "autoprefixer", () => {
  return gulp.src( ENTRIES.CSS )
  .pipe( autoprefixer({
      browsers: [ "last 2 versions" ],
      cascade: false
    })
  )
  .pipe( gulp.dest( OUTPUT.CSS ) )
  .pipe( browserSync.stream() );
});

// file include

gulp.task( "fileinclude", () => {
  function pages( entry, output ) {
    gulp.src([ entry ])
    .pipe( fileinclude({
      prefix: "@@",
      basepath: "./app/views"
    }) )
    .pipe( gulp.dest( output ) );
  }

  Object.keys( PAGES ).forEach( ( key ) => {
    pages( PAGES[ key ].entry, PAGES[ key ].output );
  });
});

// Browser sync tasks

gulp.task( "browser-sync", () => {
  browserSync.init({
    open: false,
    server: {
      baseDir: "./"
    }
  });
});

gulp.task( "files:watch", () => {
  gulp.watch( ENTRIES.JS_ALL, [ "scripts" ] );
  gulp.watch( ENTRIES.JS_BUNDLE ).on( "change", browserSync.reload );
  gulp.watch( ENTRIES.HTML_ALL, [ "fileinclude" ] );
  gulp.watch( OUTPUT.PAGES ).on( "change", browserSync.reload );
  gulp.watch( ENTRIES.SASS_ALL, [ "sass" ] );
  gulp.watch( ENTRIES.CSS, [ "autoprefixer" ] );
});

// Exec

gulp.task( "default", [
  "vendors",
  "scripts",
  "sass",
  "autoprefixer",
  "fileinclude",
  "files:watch",
  "browser-sync"
]);

gulp.task( "production", [
  "vendors",
  "scripts",
  "sass",
  "autoprefixer",
  "fileinclude",
  "compress-scripts",
  "compress-vendors"
]);
