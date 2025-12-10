import './commands'
import 'cypress-plugin-api'

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar `false` aqui impede que o Cypress falhe o teste.
  // Você pode adicionar lógica condicional para ignorar apenas erros específicos.

  // Exemplo: Se o erro for de 'cross origin script' ou uma mensagem específica,
  // você pode retornar `false`.

  if (err.message.includes('Erro específico que quero ignorar')) {
    // Retorna false para ignorar o erro e continuar o teste
    return false;
  }

  // Se retornar `true` (ou não retornar nada), o Cypress falhará o teste.
  // Neste caso, se o erro não for o que queremos ignorar,
  // vamos deixar o Cypress falhar o teste (retorno implícito de undefined/true)
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora o Script error.
  if (err.message === 'Script error.') {
    return false
  }
  // Continua o comportamento padrão para outros erros
})

// cypress/support/e2e.js

// 1. Salva a função fetch original do navegador
const originalFetch = window.fetch;

// 2. Manipulador para a janela do navegador ANTES que a aplicação seja carregada
Cypress.on('window:before:load', (win) => {
  // Substitui a função fetch() da janela do navegador pela nossa customizada
  win.fetch = (input, init) => {
    // Verifica se a requisição é para googlesyndication (servidor de anúncios)
    if (typeof input === 'string' && input.includes('googlesyndication')) {
      // Rejeita a Promise, bloqueando a requisição e a tratando como falha
      return Promise.reject('Bloqueado pelo Cypress: ad request');
    }
    // Para todas as outras requisições, usa a função fetch original
    return originalFetch(input, init);
  };
});


// (Opcional) Você pode colocar aqui o código para ignorar erros 'uncaught:exception' também
Cypress.on('uncaught:exception', (err, runnable) => {
  // ... (o código para angular is not defined e Script error.)
  return false;
});