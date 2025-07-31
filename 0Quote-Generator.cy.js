/// <reference types="Cypress" /> 

describe('Potter Quotes',()=>{
beforeEach(()=>{
  cy.log('spustim sa pred kazdym testom')
cy.visit('http://localhost:8080/#/quotes')
})
it('generate 1 quote',()=>{
 
  cy.get('[data-test="get-quote"]').click()
  cy.get('[data-test="wisdom-points"]')
    .should('have.text',' wisdom points +1 ')
   cy.get('[data-test="wisdom-level"]')
    .should('contain.text','current level NOOB') 
    
cy.get('ul.quote-list')
    .should('be.visible') 
 cy.get('ul.quote-list')
 .find('li')
    .should('have.length',1)  
   }) 
   it('generate 2 quotes',()=>{
  
  cy.get('[data-test="get-quote"]').click() 
  cy.get('[data-test="get-quote"]').click()
  cy.get('[data-test="wisdom-points"]')
    .should('have.text',' wisdom points +2 ')
   cy.get('[data-test="wisdom-level"]')
    .should('contain.text','current level NOOB') 
    
cy.get('ul.quote-list')
    .should('be.visible') 
 cy.get('ul.quote-list')
 .find('li')
    .should('have.length',2)    
})
it('remove quote',()=>{
  cy.get('[data-test="get-quote"]').click() 
 // cy.get('#remove-quote').click()
  cy.contains(' Remove Quote ')

})
it('number of wisdom points',()=>{
cy.get('[data-test="wisdom-points"]')
    .should('have.text',' wisdom points +0 ')
  })  
it('empty list message',()=>{
cy.get('div.empty-list-message')
    .should('have.text',' Click the button to get some wisdom ')
   .and('be.visible')

 cy.get('ul.quote-list')
 .should('not.exist')  
// .should('be.empty') 
// nemozem pouyit ,lebo vobec neexistuje

  })  
it.only('returns fake response', () => {
 const fakeResponse = {
    "quote": "Figa",
    "author": "Albus "
}

cy.intercept('http://localhost:3000/quote',fakeResponse)
  .as('quoteGeneratorBackend')  

cy.get('[data-test="get-quote"]').click()
   
cy.get('.quote-list')
.find('li')
.find('p.author')
.should('have.text',fakeResponse.author)

cy.get('.quote-list')
.find('li')
.contains(fakeResponse.quote)
.should('be.visible')


})



})
