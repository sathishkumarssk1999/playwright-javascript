const { test, expect } = require('@playwright/test');

test('asserstion', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/");

    // 1) expect(page).toHaveURL()   Page has URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/");

    await page.waitForTimeout(10000);
    // 2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle("nopCommerce demo store");

    // 3) expect(locator).toBeVisible()  Element is visible
    const reg = await page.locator('//a[@class="ico-register"]');
    await expect(reg).toBeVisible();


    // 1) expect(page).toHaveURL()   Page has URL
    // 2) expect(page).toHaveTitle()   Page has title
    // 3) expect(locator).toBeVisible()  Element is visible
    // 4) expect(locator).toBeEnabled()  Control is enabled
    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
    // 6) expect(locator).toHaveAttribute() Element has attribute
    // 7) expect(locator).toHaveText()  Element matches text
    // 8) expect(locator).toContainText()  Element contains text
    // 9) expect(locator).toHaveValue(value) Input has a value
    // 10) expect(locator).toHaveCount()  List of elements has given length



});

