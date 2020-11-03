/// <reference types="Cypress" />

class NavigationPage
{​​​​
 
getStartOrderingButton()
{​​​​
    return cy.contains('Start a Catering Order')
}​​​​
 

 
}​​​​
 
export default NavigationPage;