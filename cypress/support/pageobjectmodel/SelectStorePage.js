/// <reference types="Cypress" />

class SelectStorePage
{​​​​
 
getStartOrderingButton()
{​​​​
    return cy.contains('Start a Catering Order')
}​​​​
 
getStoreSearchTextBox(){
    return cy.get('input.autocomplete_locationSearchInput')
}

getStoreSearchIcon(){
    return cy.get('svg[name="search"]')
}

getFindStoresButton()
{​​​​
    return cy.contains('Find Stores')
}​​​​

getStoreSearchWindowLabel()
{​​​​
    return cy.contains('find the closest Wawa to you')
}​​​​

getStoreSearchIcon(){
    return cy.get(':nth-child(1) > span > .sc-bwzfXH > .fsBpHN > .htpAVW')
}

}​​​​


 
export default SelectStorePage;