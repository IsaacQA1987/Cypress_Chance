/// <reference types="cypress" />

describe('Testando pagina QA', () => {
    it('Aprendendo a usar o comando SELECT', () => {

        cy.visit('https://www.horadoqa.com.br/testes/')
        cy.get('#select-itens').select('Cypress')
        cy.get('[name="area"]').type('Test de QA')
        cy.get('[name="firstname"]').type('Joao')
        cy.get('[name="email"]').type('joao@gmail.com')
        cy.get('[name="phonenumber"]').type('1234567890')
        cy.get('[name="country"]').select('Brasil')
    });
});

it('Teste', function() {});

