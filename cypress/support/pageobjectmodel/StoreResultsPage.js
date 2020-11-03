/// <reference types="Cypress" />

class StoreResultsPage
{​​​​
 
getChooseAStoreLabel()
{​​​​
    return cy.contains('Choose a Store')
}​​​​

getSelectStoreButton()
{​​​​
    return cy.contains('Select Store')
}​​​​

getStoreFirstLineAddressLabel()
{​​​​
    return cy.get('h5.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.hyjFo')
}​​​​

getStoreDistanceLabel()
{​​​​
    return cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.jzKbzX:nth-child(2)')
}​​​​
 
getStoreFullAddressLabel(){
    return cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.ibAtVq:nth-child(3)')
}

getOrderingOptionsLabel(){
    return cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.gqZeSJ:nth-child(1)')
}

getStoreTypeOnline(){
    return cy.get('svg[name="online"]')
}

getStoreTypeInStore(){
    return cy.get('svg[name="store"]')
}

getShowingResultsLabel(){
    return cy.contains('Showing results for')
}
 
}​​​​
 
export default StoreResultsPage;