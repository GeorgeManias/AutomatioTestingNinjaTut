function nameGenerator() {
  const nowD = Date.now();
  return `test_user_${nowD}`;
}
function emailGenerator() {
  const nowD = Date.now();
  return `test_user_${nowD}@test.com`;
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



module.exports = { nameGenerator, emailGenerator, randomDate };