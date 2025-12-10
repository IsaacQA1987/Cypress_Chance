/// <reference types="cypress" />

describe('Teste simples de API - Hora do QA', () => {
  it('Deve retornar status 200 ao acessar o endpoint', () => {
    cy.api('https://www.horadoqa.com.br/testes')
      .its('status')
      .should('eq', 200)
  })
})

describe('Teste API JSONPlaceholder - POST', () => {
  it('Deve criar um novo post e retornar status 201', () => {
    cy.api({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.title).to.eq('foo');
    });
  });
});



describe('Teste API JSONPlaceholder - PUT', () => {
  it('Deve atualizar o post com id 1 e retornar status 200', () => {
    cy.api({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'foo atualizado',
        body: 'bar atualizado',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('foo atualizado');
    });
  });
});



describe('Teste API JSONPlaceholder - DELETE', () => {
  it('Deve deletar o post com id 1 e retornar status 200', () => {
    cy.api({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).then((response) => {
      expect(response.status).to.eq(200);
      // corpo geralmente vazio
      expect(response.body).to.be.empty;
    });
  });
});



