import { test, expect } from '@playwright/test';

test('Sanport Home Page is accessible', async ({ page }) => {
    await page.goto('https://sanport-tst.sanlam.co.za/sanpublic/Home.aspx');
    await page.screenshot({ path: './reports/ScreenShot/HomePage_screenshot.png' });
  });