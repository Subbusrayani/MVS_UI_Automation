/// <reference types="Cypress" />

class StoreDetailsPage
{​​​​
 
getChangeStoreChevronLeftLink()
{​​​​
    return cy.get('svg[name="chevron-left"]')
}​​​​

getStoreName()
{​​​​
 return cy.get('h2[class="sc-bdVaJa sc-htpNat Text-sc-1xruaqj-0 gmCKON"]')
}​​​​

getStoreDistance()
{​​​​
 return cy.get('h2[class="sc-bdVaJa sc-htpNat Text-sc-1xruaqj-0 ETWol"]')
}​​​​


getStoreFullAddressLabel(){
    return cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.kGByny')
}

getStoreTelephoneNumber(){
    return cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.fpASgs')
}


getCateringHours(){
    return cy.get('div.sc-bdVaJa.iHZvIS')
}

getStoreHours(){
    return cy.get('div.sc-bdVaJa.DYHzM')
}


getStoreTypeOnlineOption(){
    return cy.get('svg[name="online"]')
}

getStoreTypeInStoreOption(){
    return cy.get('svg[name="store"]')
}

getShowingResultsLabel(){
    return cy.contains('Showing results for')
}
 
}​​​​
 
getDatePickerIcon(){
    return cy.get('svg[name="online"]')
}

getTimePickerIcon(){
    return cy.get('div.sc-bdVaJa.gvZPsh div.use-icon-indicators__IconContainer-oppmwq-0.eyItmM div svg')
}

getStoreTypeInStoreOption(){
    return cy.get('svg[name="store"]')
}


div.sc-bdVaJa.gvZPsh div.use-icon-indicators__IconContainer-oppmwq-0.eyItmM div svg
export default StoreDetailsPage;