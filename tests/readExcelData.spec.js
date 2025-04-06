import xlsx from 'xlsx';
import { test } from '@playwright/test';

// Function to read Excel file
function readExcelFile(filePath) {
    // Read the Excel file
    const workbook = xlsx.readFile(filePath);

    // Get the first worksheet in the workbook
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert worksheet to JSON formatnpm
    const data = xlsx.utils.sheet_to_json(worksheet);
    
    return data;
}

// Playwright test using Excel data
test.only('Read data from Excel and perform actions', async ({ page }) => {
    // Read Excel file
    const excelData = readExcelFile('TestData/TestData.xlsx');
    
    // Log the data from the Excel file
    console.log(excelData);

    // Example usage of the Excel data (assuming each row contains 'username' and 'password')
    for (const row of excelData) {
        const username = row.username; // Replace 'username' with the actual column name in your Excel sheet
        const password = row.password; // Replace 'password' with the actual column name

        // Perform actions using Playwright
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator('[name="username"]').fill(username); 
        await page.locator('[name="password"]').fill(password); 
        await page.locator('[type="submit"]').click();
        
        // You can add assertions or other logic based on the data
    }
});
