// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.only('Launch browser', async () => {
    const browser = await chromium.launch(); // Launches the browser
    const context = await browser.newContext(); // Creates an isolated context (like a new browser instance)
    const page = await context.newPage(); // Opens a new page (tab)
    await page.goto('https://www.google.com'); // Navigates to Google
});
