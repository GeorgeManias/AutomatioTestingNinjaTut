const { nameGenerator, emailGenerator, randomDate, getDayNumber, getMonthNumber, getYearNumber} = require('./helper/utils/generator');

    const randomDateValue=randomDate();
    console.log(randomDateValue);

    console.log(getDayNumber(randomDateValue), getMonthNumber(randomDateValue), getYearNumber(randomDateValue));

//npx wdio run ./wdio.conf.js --spec ./test/specs/testLab.js