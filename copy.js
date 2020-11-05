/* eslint-disable no-console */
const path = require('path');
const { ncp } = require('ncp');

ncp.limit = 16;

const dirsToCopy = [
    // 'css',
    'svg',
    'images',
    'js',
    'favicons'
];

const dirDestinations = [
    'ticket-to-work',
    'return-to-work',
    'work-while-on-ssdi',
    'request-a-call'
];

for (let i = 0; i < dirDestinations.length; i++) {
    console.log('Copying files for ', dirDestinations[i]);
    for (let j = 0; j < dirsToCopy.length; j++) {
        const srcPath = path.join(__dirname, `dist/${dirsToCopy[j]}`);
        const distPath = path.join(__dirname, `dist/${dirDestinations[i]}/${dirsToCopy[j]}`);
        // eslint-disable-next-line consistent-return
        ncp(srcPath, distPath, (err) => {
            if (err) {
                // eslint-disable-next-line no-console
                return console.error(err);
            }
            console.log(`Copying files complete for ${dirDestinations[i]}/${dirsToCopy[j]}`);
        });
    }
}
