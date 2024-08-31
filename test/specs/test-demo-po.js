import cartPage from "../pageobjects/cart.page";
import homePage from "../pageobjects/home.page";
import loginPage from "../pageobjects/login.page";

describe('Login Test', () => {
    it('Login to Home Page', async () => {

        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await homePage.validateOnHomePage();



        // await cartPage.continueShopping();
        // await homePage.open();
        // await homePage.cartIconClick();
        // await cartPage.open();
        // await cartPage.checkout();

        await browser.pause(2000);

    });

    it('Add to Cart', async () => {
        await homePage.open();
        await homePage.addToCart();
        await homePage.cartIconClick();
        await cartPage.validateOnCartPage();

        await browser.pause(2000);
    });
});