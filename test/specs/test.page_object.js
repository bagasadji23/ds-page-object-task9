
describe('Test Sauce Demo', () => {
    it('Test 1 Login Succesfully', async () => {
        await browser.url("https://www.saucedemo.com");

        // Fill in the username and password
        const usernameTextBox = await browser.$("#user-name");
        const passwordTextBox = await browser.$("#password");

        // Click on the login button
        const loginButton = await browser.$('//input[@type="submit"]');


        // Fill in the username and password
        await usernameTextBox.addValue("standard_user");
        await passwordTextBox.addValue("secret_sauce");

        // Click on the login button
        await loginButton.click();

        await browser.pause(2000);

        // Check if the website title is displayed
        await expect(browser).toHaveTitle(expect.stringContaining('Swag Labs'))

        // Checck website url is correct
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
       
    });
});