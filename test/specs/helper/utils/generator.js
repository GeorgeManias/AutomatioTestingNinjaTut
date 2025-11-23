function nameGenerator() {
  const nowD = Date.now();
  return `test_user_${nowD}`;
}

function emailGenerator() {
  const nowD = Date.now();
  return `test_user_${nowD}@test.com`;
}

function getRandomGender() {
  return Math.random() < 0.5 ? "id_gender1" : "id_gender2";
}


function randomDate() {
  const start = new Date("1900-01-01");
  const end = new Date();
  end.setFullYear(end.getFullYear() - 15); // current date - 15 years

  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

function getDayNumber(dateString) {
  const date = new Date(dateString);
  return date.getDate();
}

function getMonthNumber(dateString) {
  const date = new Date(dateString);
  return date.getMonth() + 1; // +1 γιατί 
}

function getYearNumber(dateString) {
  const date = new Date(dateString);
  return date.getFullYear();
}

function getRandomAlfanumeric(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getRandomTelephone(length) {
  const digits = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return result;
}

function selectRandomCountry() {
  const countries = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "Israel",
    "New Zealand",
    "Singapore"
  ];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  return randomCountry;
}


module.exports = { nameGenerator, emailGenerator, getRandomGender, randomDate, getDayNumber, getMonthNumber, getYearNumber, getRandomAlfanumeric, getRandomTelephone, selectRandomCountry };