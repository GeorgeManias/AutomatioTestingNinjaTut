

const { expect, browser } = require('@wdio/globals')

async function cookieBanner() {
  const cookieBtn = await $('button.fc-cta-consent');
  if (await cookieBtn.isExisting()) {
    await cookieBtn.waitForClickable({ timeout: 5000 });
    await cookieBtn.click();
  }
}



describe('Registration Testing', () => {

    it('TC_RF_001 - should register a new user successfully', async () => {
        //1) Access Website
        await browser.url('https://automationexercise.com/');
        await browser.maximizeWindow();

        await cookieBanner();

        //2) Select the Register button
        const registerButton = await $('a[href="/login"]');
        await registerButton.waitForDisplayed({ timeout: 10000 });
        await registerButton.click();

        //Have a unique dateTime fro creation
        const nowD= Date.now();

        //Create unique name      
        const userName= 'georgios_user_'+nowD;

        //Create unique email
        const userEmail= userName+'@testmail.com';

        //3.1 Type SignUp name
        const signUpName = await $('input[placeholder="Name"]');
        await signUpName.waitForDisplayed([10000]);
        await signUpName.setValue(userName);

        //3.2 
        const signUpEmail= await $('[data-qa="signup-email"]');
        await signUpEmail.waitForDisplayed([10000]);
        await signUpEmail.setValue(userEmail);



        // Help Step Wait
        await browser.pause(30000);

    });


});

//npx wdio run ./wdio.conf.js --spec ./test/specs/tc-rf-001-registration.e2e.js
