const express = require('express');
const app = express();
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: 'APIKey.json'
});

// Perform label detection on the image file
// client
//     .labelDetection('./beatles-poster.jpg')
//     .then(results => {
//         const labels = results[0].labelAnnotations;

//         console.log('Labels:');
//         labels.forEach(label => console.log(label.description));
//         //console.log(results);
//     })
//     .catch(err => {
//         console.error('ERROR:', err);
//     });

// text detection
client
    .textDetection('./beatles-poster.jpg')
    .then(results => {
        const texts = results[0].textAnnotations;

        console.log('Texts:');
        texts.forEach(text => console.log(text.description));
    })
    .catch(err => {
        console.error("ERROR:", err);
    });



app.listen(5000, '127.0.0.1', () => console.log('Server running'));