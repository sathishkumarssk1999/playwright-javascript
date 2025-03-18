const { test, expect } = require('@playwright/test');

test("screenshot", async ({ page }) => {

    await page.goto("https://saucelabs.com/");

    await page.screenshot({ path: "ss.png" });

    await page.close();
})

test('Visual regression test', async ({ page }) => {

    await page.goto('https://saucelabs.com/');

    const screenshot = await page.screenshot();

    // Compare the screenshot with the baseline snapshot
    expect(screenshot).toMatchSnapshot('snapshots/example-snapshot.png');
    
});
