//loginPageCheck.spec.js
import { test, expect } from '@playwright/test';

test('Sanport Home Page is accessible', async ({ page }) => {
  await page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
  await page.screenshot({ path: '../reports/ScreenShot/HomePage_screenshot.png' });
});

test('Sanport Logo Image Should Be Visible', async ({ page }) => {
  await page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
  const isImageVisible = await page.isVisible('img[alt="Sanlam"]'); 
  expect(isImageVisible);
  await page.screenshot({ path: '../reports/ScreenShot/Sanlam_screenshot.png' });
});

test('Sanport Logo Click Redirects to Expected URL', async ({ page }) => {
  await page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
  await page.click('#ctl00_lnkSanportLogo');

  const currentURL = page.url();
  const expectedURL = 'https://sanport-tst.sanlam.co.za/sanport/eng/Home.aspx';
  expect(currentURL);
});

