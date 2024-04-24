class LogoutPage {
    constructor(page) {
      this.page = page;
    }
  
    async clickOkButton() {
      await this.page.getByRole('button', { name: 'Ok' }).click();
    }
  
    async clickLogoutLink() {
      await this.page.getByRole('link', { name: 'Logout' }).click();
    }
  }
  
  module.exports = LogoutPage;
  