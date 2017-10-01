"use strict";
const gulp = require('gulp');
const del = require('del');

// ============================== //
// =========== Config =========== //
// ============================== //

// Autoprefixer
const autoprefixer_browsers = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Banner
const pkg = require('./package.json');
const banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @license <%= pkg.license %>',
  ` * @copyright ${new Date().getFullYear()} Tom Scholz`,
  ' * @link <%= pkg.homepage %>',
  ' **/',
  ''
].join('\n');

// =================================== //
// =========== Style tasks =========== //
// =================================== //
gulp.task('lint:sass', () => {
  const stylelint = require('gulp-stylelint');

  return gulp.src('src/**/*.scss')
  .pipe(stylelint({
    failAfterError: true,
    reporters: [{
        formatter: 'string',
        console: true
    }]
  }));
});

// Compile and prefix stylesheets (production)
gulp.task('compile:sass', () => {
  const sourcemaps = require('gulp-sourcemaps');
  const sass = require('gulp-sass');
  const autoprefixer = require('gulp-autoprefixer');
  const concat = require('gulp-concat');
  const header = require('gulp-header');
  const gulpif = require('gulp-if');
  const cssmin = require('gulp-cssmin');
  const size = require('gulp-size');

  return gulp.src('src/material.scss')
    // Generate Source Maps
    .pipe(sourcemaps.init())
    .pipe(sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(autoprefixer(autoprefixer_browsers))
    // Concatenate styles
    .pipe(concat('material.css'))
    .pipe(header(banner, {pkg}))
    .pipe(gulp.dest('./dist/css'))
    // Minify styles
    .pipe(gulpif('*.css', cssmin()))
    .pipe(concat('material.min.css'))
    .pipe(header(banner, {pkg}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(size({title: 'Total size of styles:'}));
});

// **** Tasks ***** //

gulp.task('default', () => {
  gulp.watch(['src/**/*.{scss,css}'], ['compile:sass', 'lint:sass']);
});

gulp.task('build', ['compile:sass']);
