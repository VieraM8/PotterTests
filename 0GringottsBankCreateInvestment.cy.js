describe("Gringottbank", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/#/gringottsBank")
  })

  it("display offer data", () => {
    //TODO:
    //1. zadat vstupne udaje pre fond, investiciu a roky
    cy.get('#selectedFund')
    .select('Basilisk Bonds')
    cy.get('#oneTimeInvestment')
    .type(12000)
    cy.get('#years')
    .type(10)
    cy.get('[data-test="create-offer"]')  
    .click()
    
    //2. kliknut na tlacidlo make me an offer
    cy.get('div.offer-detail')
    .should('be.visible')
    .within(()=>{
       cy.get('.your-data')
    .find('p.period')
    .should('contain.text','10 years')

       cy.get('.your-data')
    .find('p.fund')
    .should('contain.text','Basilisk Bonds')
    })
    })
    
   
  it.only("correct name is stored in new investment", () => {
   //1. zadajte vstupne parametre (fond, roky, investicia)
    cy.get('#selectedFund')
    .select('Basilisk Bonds')
    cy.get('#oneTimeInvestment')
    .type(12000)
    cy.get('#years')
    .type(10)
    cy.get('[data-test="create-offer"]').click()
   //2. kliknite na tlacidlo make me an offer
cy.get('[data-test="customer-name"]')
.type("Tana")

cy.get('[data-test="create-investment"]').click()
cy.get('ul.investment-list')
.should('be.visible')
.find('li')
.within(()=>{
cy.get('h4')
.contains('Investment issued for')
.find('span')
.should('have.text','Tana')
cy.get('#showDetail').click() 
})

  
cy.get('div.modal-content')
.should('be.visible')
.find('div.modal-body')
.contains('p','Name')
.should('contain.text','Tana')
    //5. overte ze sa vytvorila nova investicia
    //6. v nahlade investice overte spravne meno
    //7. kliknite na View details
    //8. overte ze meno je spravne vypisane
  })
})