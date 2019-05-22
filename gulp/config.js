import path from 'path';

const dist = path.join(process.cwd(), 'dist');
export default {
    global: {
        dist: dist
    },
    clean: {}
}