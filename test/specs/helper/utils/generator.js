function nameGenerator() {
  const nowD = Date.now();
  return `test_user_${nowD}`;
}
function emailGenerator() {
  const nowD = Date.now();
  return `test_user_${nowD}@test.com`;
}
module.exports = { nameGenerator, emailGenerator };