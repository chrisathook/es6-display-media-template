import gulp from 'gulp';
import os from 'os';
import fs from 'fs-extra';
//
import config from './config';
// task imports
import clean from './tasks/clean';
import handlebars from './tasks/handlebars';

gulp.task('clean', clean(gulp, config.global, config.clean));
gulp.task('handlebars', handlebars(gulp, config.global, config.handlebars));
gulp.task('build', gulp.series('clean','handlebars'));