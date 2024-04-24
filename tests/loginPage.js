const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
  }

  async clickLoginLink() {
    await this.page.locator('#ctl00_lbtLogin').click();// More specific selector
  }

  async fillCredentials(username, password) {
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
  }

  async clickLoginButton() {
    await this.page.locator('button >> text=Login').click(); // More specific selector
  }
}

module.exports = LoginPage;
