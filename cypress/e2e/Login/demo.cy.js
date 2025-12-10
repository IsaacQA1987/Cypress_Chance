/// <reference types="cypress" />

describe('Site Demo', () => {
    it('Aprendendo a usar o Select', () => {

         cy.visit('https://demo.automationtesting.in/Register.html')
         cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('João', { force: true })
         cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Silva', { force: true })
         cy.get('.col-md-8 > .form-control').type('Teste', { force: true });
         cy.get('#eid > .form-control').type('test@gamail.com', { force: true })
         cy.get(':nth-child(4) > .col-md-4 > .form-control').type('1234567890', { force: true })
         cy.get(':nth-child(5) > .col-md-4 > :nth-child(1)').click()
         cy.get('#checkbox2').click()
         cy.get('#Skills').select('Java')
         cy.get('#countries').select('Select Country')
         cy.get('.select2-selection').click()
         cy.get('.select2-search__field').type('Australia{enter}')
         cy.get('#yearbox').select('1990')
         cy.get('[ng-model="monthbox"]').select('February')
         cy.get('#daybox').select('10')
         cy.get('#firstpassword').type('123456')
         cy.get('#secondpassword').type('123456')
         cy.get('#imagesrc').selectFile('C:/QArobo/cypress/fixtures/Teclado1.jpeg')

         
         
        
    });
});

// describe('Site Demo', () => {
//     it('Aprendendo a usar o Select', () => {

//          cy.visit('https://www.horadoqa.com.br/testes/')
//          cy.get('[name="select-itens"]').select('Cypress')
//          cy.get('[name="area"]').type('Frontend')
//          cy.get('[name="firstname"]').type('João')
//          cy.get('[name="email"]').type('joao@gmail.com')
//          cy.get('[name="phonenumber"]').type('1234567890')
//          cy.get('[name="country"]').select('Brasil')
//          cy.get('#submit-button').click()
//          cy.get('h1').should('have.text', 'Bem-vindo')
         
        
//     });
// });