class cartProductPage {
  static getItems1(): void {
    cy.get('.inventory_item').first().find('.btn_primary').click()
  }

  static getItems2(): void {
    cy.get('.inventory_item').eq(2).find('.btn_primary').click()
  }

  static totalGetCart(): void {
    cy.get('.shopping_cart_badge').should('have.text', '2')
  }

  static clickCartLink(): void {
    cy.get('.shopping_cart_link.fa-layers.fa-fw').click()
  }

  static clickCheckoutButton(): void {
    cy.get('.btn_action.checkout_button').click()
  }

  static inputFirstName(): void {
    cy.get('#first-name').type('John')
  }

  static inputLastName(): void {
    cy.get('#last-name').type('Doe')
  }

  static inputPostalCode(): void {
    cy.get('#postal-code').type('12345')
  }

  static clickContinueButton(): void {
    cy.get('.btn_primary.cart_button').click()
  }

  static clickFinishButton(): void {
    cy.get('.btn_action.cart_button').click()
  }

  static verifyOrderSuccess(): void {
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  }
}

class FailedAddProductToCart {
  static getItems1(): void {
    cy.get('.inventory_item').first().find('.btn_primary').click()
  }

  static getItems2(): void {
    cy.get('.inventory_item').eq(2).find('.btn_primary').click()
  }

  static totalGetCart(): void {
    cy.get('.shopping_cart_badge').should('have.text', '2')
  }

  static clickCartLink(): void {
    cy.get('.shopping_cart_link.fa-layers.fa-fw').click()
  }

  static clickCheckoutButton(): void {
    cy.get('.btn_action.checkout_button').click()
  }

  static inputFirstName(): void {
    cy.get('#first-name').type('John')
  }

  static inputLastName(): void {
    cy.get('#last-name').type('Doe')
  }

  static clickContinueButton(): void {
    cy.get('.btn_primary.cart_button').click()
  }

  static verifyFailedOrder(): void {
    cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required')
  }

}

export {cartProductPage, FailedAddProductToCart};