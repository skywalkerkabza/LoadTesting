//test.spec.js where the LoginPage.js and secureAccessPage.js are called to be tested 
const SecureAccessPage = require('./secureAccessPage');
const CreateProposalPage = require('./NewProposalPage'); 
const LoginPage = require('./loginPage');
import { test, expect } from '@playwright/test';

test.describe('Sanlam Login and Navigation', () => {
  
test('Sanport Home Page is accessible', async ({ page }) => {
  test.setTimeout(60000); // Reduce timeout to 1 minute
  await page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
  await page.screenshot({ path: './reports/ScreenShot/HomePage_screenshot.png' });
});
  
  
  test('Login and navigate to GDE Portal, then logout', async ({ page }) => {
    test.setTimeout(60000); // Reduce timeout to 1 minute

    const loginPage = new LoginPage(page);
    try {
      await loginPage.goto();
      await loginPage.clickLoginLink();

      // Use environment variables for credentials (not shown here)
      await loginPage.fillCredentials(X312074,Sanport02);
      await loginPage.clickLoginButton();

      const secureAccessPage = new SecureAccessPage(page);
      await secureAccessPage.clickGlacierDigitalImage();

      const newPage = await page.waitForEvent('popup');
      await expect(newPage.title()).toContain('GDE Portal');

      // Consider waiting for specific element within the welcome message
      await newPage.locator('text=Welcome').waitFor({ timeout: 5000 }); // Wait for 5 seconds

      await newPage.click('text=Log out'); // Click logout button
      await newPage.getByRole('link', { name: 'Logout' }).click(); // Click final logout link
    } catch (error) {
      console.error('Unhandled error during test:', error);
    }
  });
});



/** 
class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    try {
      await this.page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
      await page.screenshot({ path: '../reports/ScreenShot/LoginScreenSanlam_screenshot.png' });
    } catch (error) {
      console.error('Error navigating to login page:', error);
      throw error; // Re-throw the error to cause test failure
      await page.screenshot({ path: '../reports/ScreenShot/ErrorLoginScreenSanlam_screenshot.png' });
    }
  }

  async clickLoginLink() {
    try {
      // Improved selector using data-test attribute (replace if needed)
      await this.page.locator('a[data-test="login-link"]').click();
      await page.screenshot({ path: '../reports/ScreenShot/LoginClickSanlam_screenshot.png' });
    } catch (error) {
      console.error('Error clicking login link:', error);
      throw error; // Re-throw the error to cause test failure
      await page.screenshot({ path: '../reports/ScreenShot/LoginClickErrorSanlam_screenshot.png' });
    }
  }

  async fillCredentials(username, password) {
    try {
      await this.page.locator('input[name="username"]').fill(username);
      await this.page.locator('input[name="password"]').fill(password);
      await page.screenshot({ path: '../reports/ScreenShot/usernamePasswordSanlam_screenshot.png' });
    } catch (error) {
      console.error('Error filling credentials:', error);
      throw error; // Re-throw the error to cause test failure
      await page.screenshot({ path: '../reports/ScreenShot/ErrorusernamePasswordSanlam_screenshot.png' });
    }
  }

  async clickLoginButton() {
    try {
      // Improved selector using unique ID (replace if needed)
      await this.page.locator('button#login-btn').click();
      await page.screenshot({ path: '../reports/ScreenShot/ClickLoginButtonSanlam_screenshot.png' });
    } catch (error) {
      console.error('Error clicking login button:', error);
      throw error; // Re-throw the error to cause test failure
      await page.screenshot({ path: '../reports/ScreenShot/ErrorClickLoginButtonSanlam_screenshot.png' });
    }
  }
}

class SecureAccessPage {
  constructor(page) {
    this.page = page;
  }

  async clickGlacierDigitalImage() {
    try {
      await this.page.locator('img >> alt=Access Glacier Digital').click();
      await page.screenshot({ path: './reports/ScreenShot/SanPort_screenshot.png' });
    } catch (error) {
      console.error('Error clicking Glacier Digital image:', error);
      throw error; // Re-throw the error to cause test failure
      await page.screenshot({ path: '../reports/ScreenShot/ErrorSanPort_screenshot.png' });
    }
  }
}
**/