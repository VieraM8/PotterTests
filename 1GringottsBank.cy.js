describe("Gringottbank", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/#/gringottsBank")
    })

    it("display offer data", () => {
       const name = 'Jozef'

const investmentData = { 
         years : 12,
         fund :'Basilisk Bonds',
         investment : 15023
}
        enterInvestmentData(investmentData)

     //   cy.get('#selectedFund').select(investmentInfo.fund)
     //   cy.get('#oneTimeInvestment').type(investmentInfo.investment)
     //   cy.get('input#years').type(investmentInfo.years)
        cy.get('[data-test="create-offer"]').click()
        cy.get('div.offer-detail')
            .should('be.visible')
            .within(() => {
                cy.get('div.your-data')
                    .contains('Period')
                    .find('span')
                    .should('have.text',investmentData.years +' years')
               // .should('contain.text',`${investmentData.years} years`)
                    cy.get('div.your-data')
                    .find('p.fund')
                    .find('span')
                    .should('have.text', investmentData.fund)
            })
    })

    it("correct name is stored in new investment", () => {
        // const   let
        const name = 'Jozef'
        
       // const years = 12
       // const fund = 'Basilisk Bonds'
      //  const investment = 15023

        const investmentInfo = {
          years: 12,
          fund:'Basilisk Bonds',
          investment: 15023
        }
        cy.log(investmentInfo)
        cy.log(investmentInfo.fund)

        
enterInvestmentData(investmentInfo)
    //  cy.get('#selectedFund').select (investmentInfo.fund)
    //    cy.get('#oneTimeInvestment').type(investmentInfo.investment)
     //   cy.get('input#years').type(investmentInfo.years)
        cy.get('[data-test="create-offer"]').click()

        //cy.get('[data-test="customer-name"]').type(name)
        enterCustomerName(name)
        cy.get('[data-test="create-investment"]').click()
        cy.get('ul.investment-list')
            .find('li')
            .should('be.visible')
            .within(() => {
                cy.get('h4').find('span').should('have.text',name)

                cy.contains('button', 'View Details').click()
            })
        cy.get('div.modal-content')
            .should('be.visible')
            .find('div.modal-body')
            .within(() => {
                cy.contains('p', 'Name')
                    .should('contain.text',name)

                cy.contains('p', 'Fund')
                    .should('contain.text', investmentInfo.fund)
            })
    })
})

function enterCustomerName(customerName){
  cy.log('enter customer name' +customerName)
cy.get('[data-test="customer-name"]').type(customerName)
}

function enterInvestmentData(investmentObject){
 cy.get('#selectedFund').select (investmentObject.fund)
   cy.get('#oneTimeInvestment').type(investmentObject.investment)
  cy.get('input#years').type(investmentObject.years)
}