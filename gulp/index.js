import gulp from 'gulp';
import os from 'os';
import fs from 'fs-extra';
//
import config from './config';
// task imports
import clean from './tasks/clean';

gulp.task('clean', clean(gulp, config.global, config.clean));
gulp.task('serve', gulp.series('clean'));