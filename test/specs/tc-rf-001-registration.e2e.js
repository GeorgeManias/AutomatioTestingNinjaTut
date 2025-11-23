const { nameGenerator, emailGenerator, getRandomGender, randomDate, getDayNumber, getMonthNumber, getYearNumber, getRandomAlfanumeric, getRandomTelephone, selectRandomCountry } = require('./helper/utils/generator');
const { login } = require('./helper/utils/navigation');

describe('Registration Testing', () => {

  it('TC_RF_001 - should register a new user successfully', async () => {
    await login();



    const registerButton = await $('a[href="/login"]');
    await registerButton.waitForDisplayed({ timeout: 10000 });
    await registerButton.click();


    const userName = nameGenerator();


    const userEmail = emailGenerator();


    const signUpName = await $('input[placeholder="Name"]');
    await signUpName.waitForDisplayed([10000]);
    await signUpName.setValue(userName);


    const signUpEmail = await $('[data-qa="signup-email"]');
    await signUpEmail.waitForDisplayed([10000]);
    await signUpEmail.setValue(userEmail);

    const submitButton = await $('[data-qa="signup-button"]');
    await submitButton.waitForDisplayed([10000]);
    await submitButton.click();



    const randomGender = getRandomGender();
    const genderOption = await $(`label[for="${randomGender}"]`);
    await genderOption.click();


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

    const newsletter = await $('input[id="newsletter"]');
    await newsletter.click();


    const specialOffers = await $('input[id="optin"]');
    await specialOffers.click();


    const firstName = await $('input[data-qa="first_name"]');
    await firstName.setValue(getRandomAlfanumeric(10));

    const lastName = await $('input[data-qa="last_name"]');
    await lastName.setValue(getRandomAlfanumeric(10));

    const enterprise = await $('input[name="company"]');
    await enterprise.setValue(getRandomAlfanumeric(8));

    const address1 = await $('input[name="address1"]');
    await address1.setValue(getRandomAlfanumeric(12));

    const address2 = await $('input[name="address2"]');
    await address2.setValue(getRandomAlfanumeric(14));

    const state = await $('input[data-qa="state"]');
    await state.setValue(getRandomAlfanumeric(6));

    const city = await $('input[data-qa="city"]');
    await city.setValue(getRandomAlfanumeric(9));

    const zipcode = await $('input[data-qa="zipcode"]');
    await zipcode.setValue(getRandomAlfanumeric(5));

    const mobileNumber = await $('input[data-qa="mobile_number"]');
    await mobileNumber.setValue(getRandomTelephone(10));

    const randomCountry = selectRandomCountry();   // random 
    const countrySelect = await $('#country');     // dropdown
    await countrySelect.selectByVisibleText(randomCountry);  // value


    const createAccountButton = await $('button[data-qa="create-account"]');
    await createAccountButton.click();

  });


});

//npx wdio run ./wdio.conf.js --spec ./test/specs/tc-rf-001-registration.e2e.js
//npx wdio run ./wdio.conf.js --spec ./test/specs/testLab.js
