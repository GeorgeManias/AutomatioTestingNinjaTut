const { browser } = require('@wdio/globals');
const { cookieBanner } = require('./cookie');

async function login() {
    //1) Access Website
    await browser.url('https://automationexercise.com/');

    await browser.waitUntil(
        async () => (await browser.execute(() => document.readyState)) === 'complete',
        {
            timeout: 10000,
            timeoutMsg: 'Home page did not finish loading before login helper timed out',
        }
    );


    await browser.maximizeWindow();
    await cookieBanner();

}

module.exports = { login };