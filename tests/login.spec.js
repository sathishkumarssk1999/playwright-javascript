const { test, expect } = require ("@playwright/test")

test('login', async ({page}) => {

    // general locators
    await page.goto("https://www.demoblaze.com/");

    await page.locator('#login2').click();    

    await page.locator('#loginusername').fill("name");    
    
    await page.locator('#loginpassword').fill("test");    

    await page.locator('//button[text()="Log in"]').click();    

    await page.pause();

});

