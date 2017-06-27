const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const env = require('gulp-env');
const util = require('gulp-util');

const db = require('./server/db/config');
const database = require('./server/db');
//******FRONTEND GULP TASKS*******//

const input = './Client/Styles/main.scss'
const output = './Client/Styles/css';

gulp.task('sass', () => {
  return gulp.src(input)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions', '> 5%', 'Firefox ESR']}))
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

//Watch files for changes and set browser sync
gulp.task('watch', () => {
  //BrowserSync settings
  browserSync.init({
    proxy: "http://localhost:5000",
    files: "./Client/Styles/css/main.css",
  });

  gulp.watch(input, ['sass'])
    .on('change', (event) => {
      console.log(`File ${event.path} was ${event.type} , running tasks...`);
    })
})

//default front end tasks

gulp.task('frontend', ['sass', 'watch']);



//******BACKEND GULP TASKS******////

gulp.task('sync', (cb) => {
  database.query('SET FOREIGN_KEY_CHECKS=0')
    .then(() => { db.User.sync({ force: true })})
    .then(() => { db.Accomplishment.sync({ force: true })})
    .then(() => { db.Workout.sync({ force: true })})
    .then(() => { db.Message.sync({ force: true })})
    .then(() => { db.BodyPart.sync({ force: true })})
    .then(() => { db.Review.sync({ force: true })})
    .then(() => { database.query('SET FOREIGN_KEY_CHECKS=1')})
    .then(() => { cb(); })
    .catch((err) => { cb(err); })
});

// gulp.task('seed:seed', {

// })

// gulp.task('seed', ['sync', 'seed:seed']);

gulp.task('nodemon', () => {
  const stream = nodemon({
    script: 'server/index.js',
    watch: ['server/'],
    ignore: ['Client/'],
  })
})

gulp.task('default', ['nodemon']);
