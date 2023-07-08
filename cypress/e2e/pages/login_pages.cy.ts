import login from '../../fixtures/login.json'

// username and password benar
const username = login[0].username
const password = login[0].password

// username dan password salah
const usernameSalah = login[1].username
const passwordSalah = login[1].password

class successLoginPage {
  static inputUsername(): void {
    cy.get('#user-name').type(username)
  }
  static inputPassword(): void {
    cy.get('#password').type(password)
  }
  static clickLoginButton(): void {
    cy.get('#login-button').click()
  }
  static verifyLoginSuccess(): void {
    cy.contains('Products').should('be.visible')
  }
}

class FailedLoginPage {
  static inputUsername(): void {
    cy.get('#user-name').type(usernameSalah)
  }
  static inputPassword(): void {
    cy.get('#password').type(passwordSalah)
  }
  static clickLoginButton(): void {
    cy.get('#login-button').click()
  }
  static verifyLoginFailed(): void {
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
  }
}


export {successLoginPage, FailedLoginPage};