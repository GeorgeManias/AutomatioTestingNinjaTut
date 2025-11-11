const { expect, browser } = require('@wdio/globals');
async function cookieBanner() {
  const cookieBtn = await $('button.fc-cta-consent');
  if (await cookieBtn.isExisting()) {
    await cookieBtn.waitForClickable({ timeout: 5000 });
    await cookieBtn.click();
  }
}

module.exports = { cookieBanner };