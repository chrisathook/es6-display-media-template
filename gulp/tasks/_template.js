import fs from 'fs-extra';

export default function (gulp, globalConfig, taskConfig) {
    return function () {
        return new Promise((resolve, reject) => {
            try {
                fs.emptyDirSync(globalConfig.dist);
                resolve(gulp)
            } catch (err) {
                fs.mkdirSync(globalConfig.dist);
                resolve(gulp)
            }
        })
    }
}