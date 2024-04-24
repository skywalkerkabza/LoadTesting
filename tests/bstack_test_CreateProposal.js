const SecureAccessPage = require('./secureAccessPage');
const CreateProposalPage = require('./NewProposalPage'); 
const LoginPage = require('./loginPage');
 // Import the CreateProposalPage POM
import { test, expect } from '@playwright/test';

test('Login, create Proposal, and Logout', async ({ page }) => {
  test.setTimeout(1200000); // Reduce timeout to 2 minute

  const loginPage = new LoginPage(page);
  try {
    await loginPage.goto();
    await loginPage.clickLoginLink();
    //await page.screenshot({ path: './reports/ScreenShot/1screenshot.png' });

    // Use environment variables for credentials (not shown here)
    await loginPage.fillCredentials(X312074, Sanport02);
    await loginPage.clickLoginButton();
   // await page.screenshot({ path: './reports/ScreenShot/2screenshot.png' });
    const secureAccessPage = new SecureAccessPage(page);
    await secureAccessPage.clickGlacierDigitalImage();
    //await page.screenshot({ path: './reports/ScreenShot/3screenshot.png' });
    const createProposalPage = new CreateProposalPage(page); // Create instance of CreateProposalPage

    // --- Proposal Creation Steps ---
    await createProposalPage.clickNewProposalButton();
    await createProposalPage.fillProposalDetails(); // Fill in proposal details
    await createProposalPage.submitProposal();
    // Add assertions to verify successful proposal creation (replace with your logic)
    await expect(page).toHaveURL('proposal-confirmation-page'); // Example assertion
    await page.screenshot({ path: './reports/ScreenShot/4screenshot.png' });

    // --- Logout Steps ---
    await createProposalPage.clickLogoutLink(); // Click logout link
    await createProposalPage.clickFinalLogout(); // Click final logout confirmation (if any)
    await page.screenshot({ path: './reports/ScreenShot/5screenshot.png' });
  } catch (error) {
    console.error('Unhandled error during test:', error);
  }
});
