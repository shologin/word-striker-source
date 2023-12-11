const { src, dest, series } = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");

function bundleJS() {
  return src("./src/classes/*.js")
    .pipe(concat("main.js"))
    .pipe(src("./src/dictionaries.js"))
    .pipe(concat("main.js"))
    .pipe(src("./src/main.js"))
    .pipe(concat("main.js"))
    .pipe(terser({ toplevel: true }))
    .pipe(dest("./dist"));
}

function bundleCSS() {
  return src("./src/**/*.css").pipe(concat("styles.css")).pipe(dest("./dist"));
}

function copyHTML() {
  return src("./src/*.html").pipe(dest("./dist"));
}

function copyImages() {
  return src("./src/assets/**/*.*").pipe(dest("./dist/assets"));
}

// type "gulp" to compile
exports.default = series(copyHTML, copyImages, bundleCSS, bundleJS);
