/* eslint-disable no-console */
const imagemin = require('imagemin');
const webp = require('imagemin-webp');

(async () => {
    const files = await imagemin(['src/images/*.{jpg,png}'], {
        destination: 'dist/images',
        plugins: [
            webp({
                quality: 75
            })
        ]
    });
    console.log(files);
})();