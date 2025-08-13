const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Verify title on homepage', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await expect(page).toHaveTitle(/Playwright/);
});