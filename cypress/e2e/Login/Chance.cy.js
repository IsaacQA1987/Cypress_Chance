const Chance = require('chance');
const chance = new Chance();

describe('Testando a biblioteca Chance', () => {
    it('Preenchendo formulários', () => {

        const nomeAleatório = chance.name();
        const emailAleatório = chance.email();
        const telefoneAleatório = chance.phone();


        cy.visit('https://www.horadoqa.com.br/testes/')
        cy.get('[name="select-itens"]').select('Cypress')
        cy.get('[name="area"]').type('Testes Automatizados')
        cy.get('[name="firstname"]').type(nomeAleatório)
        cy.get('[name="email"]').type(emailAleatório)
        cy.get('[name="phonenumber"]').type(telefoneAleatório)
        cy.get('[name="country"]').select('Brasil')
        cy.get('#submit-button').click()
        cy.get('h1').should('have.text', 'Bem-vindo')


    });
});