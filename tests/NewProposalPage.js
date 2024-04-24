class CreateProposalPage {
  constructor(page) {
    this.page = page;
  }

  async clickNewProposalButton() {
    await this.page.getByRole('button', { name: ' Create new proposal' }).click();
  }

  async fillProposalDetails() {
    // Client Details
    await this.page.getByLabel('react-aria1425594455-:r8:').click(); // Replace with your selector for client name input
    await this.page.getByLabel('react-aria1425594455-:r8:').fill('Kabelo');

    await this.page.getByLabel('react-aria1425594455-:ra:').click(); // Replace with your selector for client surname input
    await this.page.getByLabel('react-aria1425594455-:ra:').fill('Hodin');

    await this.page.getByLabel('react-aria1425594455-:rc:').click(); // Replace with your selector for client DOB input
    await this.page.getByLabel('react-aria1425594455-:rc:').fill('1989-09-25');

    // Proposal Details (Assuming selectors provided are accurate)
    await this.page.getByRole('button', { name: 'Create' }).click();

    // Investment Details
    await this.page.getByRole('button', { name: ' Growth General savings sd-' }).click();
    await this.page.getByLabel('Voluntary').check();

    await this.page.getByRole('button', { name: 'Fixed Return Plan Pays a' }).click();
    await this.page.getByLabel('react-aria1425594455-:rp:').click();

    await this.page.getByLabel('Male', { exact: true }).check();
    await this.page.getByLabel('PAYE').check();

    await this.page.getByRole('button', { name: 'Next' }).click();

    // Investment Start Date
    await this.page.getByLabel('react-aria1425594455-:r12:').click();
    await this.page.getByLabel('react-aria1425594455-:r12:').fill('');
    await this.page.getByLabel('react-aria1425594455-:r12:').click(); // Clear any pre-populated value
    await this.page.getByLabel('Choose Monday, March 11th,').click(); // Assuming this is a calendar element

    // Investment Amount
    await this.page.getByLabel('react-aria1425594455-:r16:').click();
    await this.page.getByLabel('react-aria1425594455-:r16:').fill('100000');

    await this.page.getByLabel('react-aria1425594455-:r18:').click();
    await this.page.getByLabel('react-aria1425594455-:r18:').fill('5');

    await this.page.getByRole('button', { name: 'Calculate results' }).click();
    await this.page.getByRole('button', { name: 'Next' }).click();

    // Client Contact Details
    await this.page.getByRole('button', { name: 'Start application' }).click();

    
    
  }

  async submitProposal() {
    await this.page.getByRole('button', { name: 'Create' }).click();
  }

  async clickLogoutLink() {
    await this.page.getByRole('link', { name: 'Log out' }).click();
  }

  async clickFinalLogout() {
    // Implement logic to click final logout confirmation if it exists
    const finalLogoutButton = await this.page.locator('.final-logout-button'); // Replace with your selector
    if (await finalLogoutButton.isVisible()) {
      await finalLogoutButton.click();
    }
  }
}

module.exports =  CreateProposalPage;
