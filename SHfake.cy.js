/// <reference types="Cypress" /> 

it('returns fake response', () => {
 const fakeresponse = {
    "quote": "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.",
    "author": "Albus Dumbledore"
}

    cy.intercept('GET', '**/sortingHat',fakeresponse).as('sortingHatBackend')

//cy.intercept(method, url, staticResponse)
   
    cy.visit('http://localhost:8080/#/sortingHat')
    cy.get('[data-test="sort-button"]').click()
    cy.wait('@sortingHatBackend')
    cy.get('[data-test="house-result"]')
})