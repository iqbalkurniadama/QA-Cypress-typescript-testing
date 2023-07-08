import {successLoginPage, FailedLoginPage} from "./pages/login_pages.cy"

describe('Testing Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('failed login', () => {
        FailedLoginPage.inputUsername()
        FailedLoginPage.inputPassword()
        FailedLoginPage.clickLoginButton()
        FailedLoginPage.verifyLoginFailed()
    })

    it('success login', () => {
        successLoginPage.inputUsername()
        successLoginPage.inputPassword()
        successLoginPage.clickLoginButton()
        successLoginPage.verifyLoginSuccess()
    })
})