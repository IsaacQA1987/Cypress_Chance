/// <reference types="cypress" />

describe('Testar site Saucedemo', () => {
   it('Adicionar um item ao carrinho e verificar se tem o numeral 1 aparecendo no carrinho', () => {

cy.visit('https://www.saucedemo.com/')


      cy.get('[data-test="username"]').type('standard_user')


      cy.get('[data-test="password"]').type('secret_sauce')


      cy.get('[data-test="login-button"]').click()


      cy.get('[data-test="title"]').should('have.text', 'Products')


      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()


      cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
      
   });

   it('Adicionar um item ao carrinho e verificar se tem o item adicionado está no carrinho', () => {

      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="title"]').should('have.text', 'Products')
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.contains('Your Cart')
      cy.contains('Sauce Labs Backpack')

   });

   it('Adicionar um item ao carrinho e verificar se tem o item adicionado está no carrinho', () => {

      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')  //estou escrevendo o nome do usuario
      cy.get('[data-test="password"]').type('secret_sauce')  //estou escrevendo a senha
      cy.get('[data-test="login-button"]').click()          //clicar no botao login
      cy.get('[data-test="title"]').should('have.text', 'Products')
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.contains('Your Cart')
      cy.contains('Sauce Labs Backpack')
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      cy.contains('Sauce Labs Backpack').should('not.exist')
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type('Joao')
      cy.get('[data-test="lastName"]').type('Silva')
      cy.get('[data-test="postalCode"]').type('12345')
      cy.get('[data-test="continue"]').click()
      cy.contains('Checkout: Overview')
      cy.get('[data-test="finish"]').click()
      cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
      cy.get('[data-test="back-to-products"]').click()


   });

});