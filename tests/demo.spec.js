const {test, expect} = require('@playwright/test');

test('Demo', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://saucelabs.com/');

    // Get and log the title
    const title = await page.title();
    console.log("Title - ", title);  // Outputs the title of the page

    // Get and log the URL
    const url = await page.url();
    console.log("Site URL - ", url);    // Outputs the current URL of the page

    // Validate the page title with the full title
    await expect(page).toHaveTitle("Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing");

    // Validate the page URL
    await expect(page).toHaveURL("https://saucelabs.com/");

    // Close the page
    await page.close();
});
