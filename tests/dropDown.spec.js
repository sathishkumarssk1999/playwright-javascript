const { test, expect } = require('@playwright/test')

test("Drop Down test", async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    const drop = await page.locator('#state');

    // Select the option by value
    await drop.selectOption("Assam");

    // Select the option by (index 1)
    await drop.selectOption({ index: 1 });

    await page.waitForTimeout(3000);

    // Select the option with the visible text 'Assam'
    await drop.selectOption({ label: "Assam" });

    const allvalues = await page.locator('#state').textContent();
    console.log(allvalues);

    const state = await page.$('#state'); // Returns the first element with id "state"

    const allStates = await state.$$('option'); // Returns an array of all <option> elements within the state element

    for (let i = 0; i < allStates.length; i++) {

        console.log("Values in drop down" + await allStates[i].textContent());

    }


}
)