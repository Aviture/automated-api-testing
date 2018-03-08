const request = require('request');

const { setWorldConstructor } = require('cucumber');

const handleRequest = (error, response, body, cucumberCallback, callback) => {
  if (error) {
    return cucumberCallback(error);
  } else {
    try {
      callback(response.statusCode, body);
    } catch (e) {
      return cucumberCallback(e);
    }
  }
};

class CustomWorld {
  constructor() {}

  GET(url, cucumberCallback, myCallback) {
    request(url, (error, response, body) => {
      return handleRequest(error, response, body, cucumberCallback, myCallback);
    });
  }

  POST(url, json, cucumberCallback, myCallback) {
    request({
      method: 'POST',
      url: url,
      json: json
    }, (error, response, body) => {
      return handleRequest(error, response, body, cucumberCallback, myCallback);
    });
  }

  PUT (url, json, cucumberCallback, myCallback) {
    request({
      method: 'PUT',
      url: url,
      json: json
    }, (error, response, body) => {
      return handleRequest(error, response, body, cucumberCallback, myCallback);
    });
  }

  DEL (url, json, cucumberCallback, myCallback) {
    request({
      method: 'DELETE',
      url: url,
      json: json
    }, (error, response, body) => {
      return handleRequest(error, response, body, cucumberCallback, myCallback);
    });
  }
}

setWorldConstructor(CustomWorld);