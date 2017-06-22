const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const env = require('gulp-env');
const util = require('gulp-util');
const sequelizeFixtures = require('sequelize-fixtures');

const db = require('./server/db/models');

gulp.task('sync', (cb) => {
  db.Review.sync({ force: true })
    .then(() => { db.Accomplishment.sync({ force: true })})
    .then(() => { db.Workout.sync({ force: true })})
    .then(() => { db.Message.sync({ force: true })})
    .then(() => { db.BodyPart.sync({ force: true })})
    .then(() => { db.User.sync({ force: true })})
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

gulp.task('default', ['nodemon', 'seed']);
