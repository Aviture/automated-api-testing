const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

let _reply_body;
let _reply_statusCode;

When(/^I hit the http bin anything request$/, function (callback) {
  this.GET('https://httpbin.org/anything', callback, (statusCode, body) => {
    _reply_body = JSON.parse(body);
    _reply_statusCode = statusCode;
    callback();
  });
});

Then(/^the reply status code should be (\d{3})$/, function (statusCode) {
  return expect(_reply_statusCode).to.equal(Number(statusCode));
});

Then(/^the response url should be "([^"]*)"$/, function (responseUrl) {
  return expect(_reply_body.url).to.equal(responseUrl);
});
