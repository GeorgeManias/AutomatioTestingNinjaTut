const { browser } = require('@wdio/globals');
const { cookieBanner } = require('./cookie');

async function login() {
    //1) Access Website
    await browser.url('https://automationexercise.com/');
    await browser.maximizeWindow();

    await cookieBanner();

}

module.exports = { login };