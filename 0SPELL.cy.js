/// <reference types="Cypress" /> 


describe('Spelleology',()=>{
  beforeEach(()=>{
cy.visit('http://localhost:8080/#/spelleology')
  })
//- overte filtrovanie podla efektu kuzla, 
// overte filtrovanie podla checkboxu `Unforgivable only`
// overte ze sa zobrazi detail vybraneho kuzla
// overte hlasku Mischief managed ak sa kuzlo podla filtra nenajde

it('filter spells by spell typel',()=>{

const jinxSpells = ['knocks an object backwards','makes target feel stinging']

  cy.get('div.type-filter')
  .should('be.visible')
  .within(()=>{
cy.get('#spell').click()
cy.get('#charm').click()
cy.get('#curse').click()
cy.get('#enchantment').click()
cy.get('#hex').click()

//cy.get('ul.spells')
//.wait(20000)
//.find('li')
//.should('have.length','2')
//.contains(jinxSpells)

jinxSpells.forEach(spell => cy.log(spell))
jinxSpells.forEach(kuzlo => cy.get('ul.spells').should('contain.text',kuzlo))
  })

})

it('filter spells by unforgivableOnly',()=>{
  cy.get('#unforgivableOnly').click()
cy.get('ul.spells')
.find('li')
.should('have.length',3)
 })

it('filter spells by checkbox unforgivableOnly-II',()=>{
  cy.get('#unforgivableOnly').click()
  cy.get('ul.spells')
  .within(()=>{

  
cy.get('li')
.contains(' murders opponent ')
cy.get('li')
.contains(' tortures a person ')
cy.get('li')
.contains(' controls a person ')
})

})

it('display detail of spell- is visible ?',()=>{
  cy.get('ul.spells')
  cy.get('li')
.contains('opens objects').click()
cy.get('div.modal-container')
.should('be.visible')
cy.get('div.modal-body')
.should('contain.text','opens objects')
})

it('display detail of spell- II',()=>{
cy.get('ul.spells')
.contains('li','prevents cheating on exams')
.click()
cy.get('div.modal-container')
  .should('be.visible')
  .within(()=>{
    cy.get('h2').should('have.text','Anti-Cheating')
    cy.get('h3').should('have.text','prevents cheating on exams')
    cy.get('h4').should('have.text','Spell')
  })

})
it('display detail of spell- III',()=>{
const spell = {
name:'Anti-Cheating',
effect:'prevents cheating on exams',
type:'Spell'
}
cy.get('ul.spells')
.contains('li',spell.effect)
.click()
cy.get('div.modal-container')
  .should('be.visible')
  .within(()=>{
    cy.get('h2').should('have.text',spell.name)
    cy.get('h3').should('have.text',spell.effect)
    cy.get('h4').should('have.text',spell.type)
  })

})
it('verify Mischief managed',()=>{
  cy.get('div.type-filter')
  .should('be.visible')
  .within(()=>{
cy.get('#spell').click()
cy.get('#charm').click()
cy.get('#curse').click()
cy.get('#enchantment').click()
cy.get('#hex').click()
cy.get('#jinx').click()
  })
cy.get('h1.subtitle')
.should('contain.text','Mischief managed')
})


 }) 
