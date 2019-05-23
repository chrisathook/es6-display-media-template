import fs from 'fs-extra';
import hb from 'gulp-hb';
import path from 'path';
import helpers from 'handlebars-helpers';
import debug from 'gulp-debug';

export default function (gulp, globalConfig, taskConfig) {
    return function () {
        return new Promise((resolve, reject) => {
            const hbStream = hb({debug: false})
            //Partials
                .partials(path.join(process.cwd(), 'src/assets/partials/**/*.{hbs,js}'))
                //Helpers
                .helpers(path.join(process.cwd(), 'src/assets/helpers/**/*.js'))
                .helpers(helpers())
                //Decorators
                .decorators(path.join(process.cwd(), 'src/assets/decorators/**/*.js'))
                //data
                .data(path.join(process.cwd(), 'src/assets/data/**/*.{json,js}'))
                .data(path.join(process.cwd(), 'ad/adConfig.{json,js}'));
            let stream = gulp.src(taskConfig.src)
                .pipe(debug({title: 'Handlebars'}))
                .pipe(hbStream)
                .pipe(gulp.dest(globalConfig.tmp));
            stream.on('end', resolve);
            stream.on('error', console.error);
        })
    }
}