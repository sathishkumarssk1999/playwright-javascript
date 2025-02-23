const {test, expect } = require('@playwright/test');

test("screenshot", async ({ page }) => {
    await page.goto("https://www.grootan.com/");

    await page.screenshot({ path: "ss.png" });
        
    await page.close();
 
})