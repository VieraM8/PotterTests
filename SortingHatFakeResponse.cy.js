/// <reference types="Cypress" /> 

describe('Sorting Hat',()=>{
 it('sorting to house with a message',()=>{

  cy.intercept('http://localhost:3000/sortingHat')
  .as('sortingHatBackend')


cy.visit('http://localhost:8080/#/sortingHat')
cy.get('[data-test="sort-button"]')
.click()

const hogwartsHouses = ["Slytherin","Ravenclaw","Gryffindor","Hufflepuff"]
cy.wait('@sortingHatBackend')
cy.get('[data-test="house-result"]')
   .invoke('text')
   .then(elementText=> expect(elementText).to.be.oneOf(hogwartsHouses))


//cy.get('div.message')
//.find('[data-test="house-result"]')
})


it.only('returns fake response', () => {
 const fakeresponse = {
    "sortingHatSays": "Hello",
    "house": "Bratislava"
}

  cy.intercept('GET','**/sortingHat',fakeresponse)
  .as('sortingHatBackend')
//cy.intercept(method, url, staticResponse)
   
    cy.visit('http://localhost:8080/#/sortingHat')
    cy.get('[data-test="sort-button"]').click()
    cy.wait('@sortingHatBackend')
    cy.get('[data-test="house-result"]')
    //cy.get('[data-test="house-result"]')
    .should('have.text',fakeresponse.house)
   cy.get('[data-test="result-message"]')
    .should('have.text',fakeresponse.sortingHatSays)

})


})

