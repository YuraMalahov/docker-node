"use strict";

const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    const method = request.method;
    const url = request.url;
    const requestData = [];
    let requestBody = '';

    console.log(method, url);

    request
        .on('data', (data) => {
            requestData.push(data);
        })
        .on('end', () => {
            requestBody = Buffer.concat(requestData).toString('utf8');
            response.statusCode = 200;
            response.setHeader('Content-type', 'application/json');
            response.write(requestBody);
            response.end();
        })
        .on('error', (error) => {
            console.error(error);
        });
});

module.exports = server;
