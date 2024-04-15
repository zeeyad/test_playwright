const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch(); // Launch a Chromium browser instance
  const page = await browser.newPage(); // Open a new page

  await page.goto('https://example.com'); // Navigate to a URL
  console.log(await page.title()); // Output the title of the page

  // Perform other actions, such as clicking buttons or filling out forms

  await browser.close(); // Close the browser instance
})();
