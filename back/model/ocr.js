const AipOcrClient = require('baidu-aip-sdk').ocr;
const APP_ID = '11208450';
const APP_KEY = 'tQMNPWAhGENux1P7MX5zjZGS';
const SECRET_KEY = 'lHMrksCn8veOC9lZVAaKiYGdsrWFAkMH';
const client = new AipOcrClient(APP_ID, APP_KEY, SECRET_KEY);
const fs = require('fs');

function ocr(image, callback) {
    let base64Img = new Buffer(image).toString('base64');
    client.receipt(base64Img).then(function (result) {
        callback(result);
    });
}
module.exports = ocr;


