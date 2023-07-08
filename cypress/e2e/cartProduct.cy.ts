import login from '../fixtures/login.json';
import {cartProductPage, FailedAddProductToCart} from './pages/cartProduct.page.cy';

console.log(login);
describe('Testing Cart Product', () => {
  beforeEach(() => {
    cy.login(login[0].username, login[0].password)
  })

  it('failed to add the product to the cart because not input the postal code', () => {
    FailedAddProductToCart.getItems1()
    FailedAddProductToCart.getItems2()
    FailedAddProductToCart.totalGetCart()
    FailedAddProductToCart.clickCartLink()
    FailedAddProductToCart.clickCheckoutButton()
    FailedAddProductToCart.inputFirstName()
    FailedAddProductToCart.inputLastName()
    FailedAddProductToCart.clickContinueButton()
    FailedAddProductToCart.verifyFailedOrder()
  })

  it('success add product to cart', () => {
    cartProductPage.getItems1()
    cartProductPage.getItems2()
    cartProductPage.totalGetCart()
    cartProductPage.clickCartLink()
    cartProductPage.clickCheckoutButton()
    cartProductPage.inputFirstName()
    cartProductPage.inputLastName()
    cartProductPage.inputPostalCode()
    cartProductPage.clickContinueButton()
    cartProductPage.clickFinishButton()
    cartProductPage.verifyOrderSuccess()
    cy.wait(2000)
  })
})