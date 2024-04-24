const { expect } = require('@playwright/test');

class SecureAccessPage {
  constructor(page) {
    this.page = page;
  }

  async clickGlacierDigitalImage() {
    await this.page.locator('img >> alt=Access Glacier Digital').click(); // More specific selector
  }
}

module.exports = SecureAccessPage;
