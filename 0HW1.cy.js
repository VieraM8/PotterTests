describe('HW', () => {
beforeEach(()=>{
cy.visit('http://localhost:8080/#/quotes')
})  
//Overte hlavný titulok stránky
//Overte že button remove quote má správny text
//Overte že button add quote má správny text
//Overte, že po otvorení stránky je button remove quote zablokovaný (disabled)

it('title shoud have correct text', () => {
    cy.get('.title')
    .should('contain.text','Potter Quotes')
  })  

it('remove quote shoud have correct text', () => {
  // cy.get('[data-test="get-quote"]').click()
cy.get('#remove-quote')
 .should('contain.text',' Remove Quote ')
 }) 

it('add quote shoud have correct text', () => {
 cy.get('[data-test="get-quote"]')
 .should('contain.text','Get Quote')
 })
 
  it(' remove quote is disabled after opening web site', () => {
    cy.get('#remove-quote')
 .should('contain.text','Remove Quote')
 .and('be.disabled')
  })
})