/// <reference types="Cypress" /> 

describe('Quote generator',()=>{

beforeEach(()=>{
cy.visit('http://localhost:8080/#/quotes')
})

  it.only('type numer of quotes',()=>{
const numberOfQuotes = 10    
enterNumberOfQuotes(numberOfQuotes)
cy.get('.quote-list')
.find('li')
.should('have.length',numberOfQuotes)

cy.get('[data-test="wisdom-points"]')
 .should('contain.text',`wisdom points +${numberOfQuotes}`)


  })
})

function enterNumberOfQuotes(numberOfQuotes){
  for (let i = 0; i < numberOfQuotes; i++) 
   cy.get('[data-test="get-quote"]').click() 

}
