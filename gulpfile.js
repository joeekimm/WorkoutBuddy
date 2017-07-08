const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
// const sourcemaps = require('gulp-sourcemaps');
const SequelizeFixtures = require('sequelize-fixtures');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const env = require('gulp-env');
const util = require('gulp-util');
const db = require('./server/db/config');
const database = require('./server/db');
// const Cities = require('./server/db/City/CityModel');

// Promise.promisifyAll(database);
// ******FRONTEND GULP TASKS******* //

const input = './Client/Styles/main.scss';
const output = './Client/Styles/css';
const models = {
  City: db.City,
  User: db.User,
};

gulp.task('sass', () => gulp.src(input)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] }))
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream()));

// Watch files for changes and set browser sync
gulp.task('watch', () => {
  // BrowserSync settings
  browserSync.init({
    proxy: 'http://localhost:5000',
    files: './Client/Styles/css/main.css',
  });

  gulp.watch(input, ['sass'])
    .on('change', (event) => {
      console.log(`File ${event.path} was ${event.type} , running tasks...`);
    });
});

// default front end tasks

gulp.task('frontend', ['sass', 'watch']);
// ******BACKEND GULP TASKS******////

gulp.task('sync', (cb) => {
  database.query('SET FOREIGN_KEY_CHECKS=0')
  // database.queryAsync('SET FOREIGN_KEY_CHECKS=0')
    .then(() => { db.User.sync({ force: true }); })
    .then(() => { db.Accomplishment.sync({ force: true }); })
    .then(() => { db.Workout.sync({ force: true }); })
    .then(() => { db.Message.sync({ force: true }); })
    .then(() => { db.BodyPart.sync({ force: true }); })
    .then(() => { db.Review.sync({ force: true }); })
    .then(() => { db.City.sync({ force: true }); })
    .then(() => { database.query('SET FOREIGN_KEY_CHECKS=1'); })
    .then(() => { cb(); })
    .catch((err) => { cb(err); });
});

/** **************MAKING ALL THIS SEED DATA BRUH*********************/

/** ******************************************************************/

gulp.task('seed', (cb) => {
  SequelizeFixtures.loadFiles(['./server/db/popularcity.json', './server/db/UserSeed.js'], models)
    .then(() => {
      cb();
    })
    .catch((err) => {
      cb(err);
    });
});


gulp.task('nodemon', () => {
  const stream = nodemon({
    script: 'bin/entry.js',
    watch: ['server/'],
    ignore: ['Client/'],
  });
});

// gulp.task('babel-node', () => { // (A)
//   return "babel-node server/index.js"
//   // return gulp.src('server/index.js')
//   //     .pipe(sourcemaps.init()) // (B)
//   //     .pipe(babel())
//   //     .pipe(sourcemaps.write('.', // (C)
//   //               { sourceRoot: path.join(__dirname, 'server') }))
//   //     .pipe(gulp.dest('es5'));
// });

// gulp.task('default', ['nodemon', 'frontend']);
gulp.task('default', ['nodemon']);
