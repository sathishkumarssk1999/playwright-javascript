const {test, expect} = require('@playwright/test')

test ("Handle Radio Button", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const radio = await page.locator("//input[@id='male']");
    await radio.check();
    await expect(radio).toBeChecked();
})

test ("Handle Check Box", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const tick = await page.locator("//input[@id='sunday']");
    await tick.check();
    await expect(tick).toBeChecked();
})
