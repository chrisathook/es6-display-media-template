import path from 'path';
import tmp from 'tmp';
//tmp.setGracefulCleanup();
const dist = path.join(process.cwd(), 'dist');
const tempDir = tmp.dirSync({
    prefix: `${Date.now()}_`,
    dir: path.join(process.cwd(), 'tmp')
});
export default {
    global: {
        dist: dist,
        cwd: process.cwd(),
        tmp:tempDir.name
    },
    clean: {},
    handlebars: {
        src: path.join(process.cwd(), 'src', 'index.html')
    }
}