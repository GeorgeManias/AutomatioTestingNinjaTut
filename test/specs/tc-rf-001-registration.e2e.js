const { nameGenerator, emailGenerator, randomDate, getDayNumber, getMonthNumber, getYearNumber } = require('./helper/utils/generator');
const { login } = require('./helper/utils/navigation');

describe('Registration Testing', () => {

  it('TC_RF_001 - should register a new user successfully', async () => {
    await login();


    //1) Select the Register button
    const registerButton = await $('a[href="/login"]');
    await registerButton.waitForDisplayed({ timeout: 10000 });
    await registerButton.click();

    //Create unique name      
    const userName = nameGenerator();

    //Create unique email
    const userEmail = emailGenerator();

    //2.1 Type SignUp name
    const signUpName = await $('input[placeholder="Name"]');
    await signUpName.waitForDisplayed([10000]);
    await signUpName.setValue(userName);

    //2.2 
    const signUpEmail = await $('[data-qa="signup-email"]');
    await signUpEmail.waitForDisplayed([10000]);
    await signUpEmail.setValue(userEmail);

    const submitButton = await $('[data-qa="signup-button"]');
    await submitButton.waitForDisplayed([10000]);
    await submitButton.click();


    // 3.0) Fill Gender Title
    const genderTitle = await $('label[for="id_gender1"]');
    await genderTitle.waitForDisplayed([10000]);
    await genderTitle.click();

    // 3.1) Fill password 
    const passwordField = await $('[data-qa="password"]');
    await passwordField.waitForDisplayed({ timeout: 10000 });
    await passwordField.setValue("Test1234!");

    const randomDateValue = randomDate()

    const dayDropdown = await $('[data-qa="days"]');
    await dayDropdown.waitForDisplayed({ timeout: 10000 });
    await dayDropdown.click();
    const dayOption = await $(`//select[@data-qa="days"]/option[@value="${getDayNumber(randomDateValue)}"]`);
    await dayOption.click();

    const monthDropdown = await $('[data-qa="months"]');
    await monthDropdown.waitForDisplayed({ timeout: 10000 });
    await dayDropdown.click();
    const monthOption = await $(`//select[@data-qa="months"]/option[@value="${getMonthNumber(randomDateValue)}"]`);
    await monthOption.click();

    const yearDropdown = await $('[data-qa="years"]');
    await yearDropdown.waitForDisplayed({ timeout: 10000 });
    await yearDropdown.click();

    const yearOption = await $(`//select[@data-qa="years"]/option[@value="${getYearNumber(randomDateValue)}"]`);
    await yearOption.click();



    console.log(getDayNumber(randomDateValue), getMonthNumber(randomDateValue), getYearNumber(randomDateValue));




    // Help Step Wait
    await browser.pause(30000);

  });


});

//npx wdio run ./wdio.conf.js --spec ./test/specs/tc-rf-001-registration.e2e.js
//npx wdio run ./wdio.conf.js --spec ./test/specs/testLab.js
