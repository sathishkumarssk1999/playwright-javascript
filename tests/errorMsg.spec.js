const { test, expect } = require('@playwright/test');

test.use({
    Viewport: null
})

test("Error Message", async ({ page }) => {

    //await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('//input[@name="username"]').fill("Admin");
    await page.locator('//input[@name="password"]').fill("Admin123");
    await page.locator('//button[@type="submit"]').click();

    const textContent = await page.locator('//*[text()="Invalid credentials"]').textContent();
    console.log(textContent);
    const msg = await page.locator('//*[text()="Invalid credentials"]');
    await expect(msg).toHaveText("Invalid credentials");

});