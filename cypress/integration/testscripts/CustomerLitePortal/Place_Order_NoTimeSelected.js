/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import NavigationPage from '../../../support/customerliteportal/pageobjectmodel/NavigationPage.js'
import SelectStorePage from '../../../support/customerliteportal/pageobjectmodel/SelectStorePage.js'
import StoreResultsPage from '../../../support/customerliteportal/pageobjectmodel/StoreResultsPage.js'
import StoreDetailsPage from '../../../support/customerliteportal/pageobjectmodel/StoreDetailsPage.js'

describe('Negative Scenario - No Time selected ', () => {

    // Object creation for all pages
    const navigationPage = new NavigationPage()
    const selectStorePage = new SelectStorePage()
    const storeResultsPage = new StoreResultsPage()
    const storeDetailsPage = new StoreDetailsPage()

    // Variable declarations for Test data
    var url, location, storename, date;

    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data

            // Test data - order details testdata
            url = this.data.url
            location = this.data.location
            date = this.data.date
            storename = this.data.storename

        })
    })

    it('Start Catering Order', function () {

        cy.visit(url)
        //Click on Start catering order button
        cy.info("1. CLICKING ON 'START ORDER' BUTTON")
        navigationPage.getStartCateringOrder()

    })

    it('Enter Location name', function () {

        cy.wait(2000)
        cy.info("1. ENTER THE CITY NAME '" + location + "' IN THE SEARCH TEXT FIELD")
        selectStorePage.getStoreSearchTextBox(location)
        //Click on result
        cy.info("2. SELECT THE CITY NAME '" + location + "' FROM AUTO SUGGESTION LIST")
        selectStorePage.selectAutoSuggest(location)
        cy.wait(2000)
        cy.info("3. VERIFY WHETHER CITY '" + location + "' IS SELECTED ")
        //Verify location name 
        selectStorePage.verifyLocationNameinSearchTextBox(location)
        // Click find store button
        cy.info("4. CLICK ON 'FIND STORES' BUTTON")
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
    })

    it('Select a store from the stores list', function () {

        //Click select store button
        storeResultsPage.getSelectStoreButton(storename)
        cy.info("1. CLICK ON 'SELECT STORE' BUTTON -" + storename)
        cy.wait(4000)
    })

    it('Click Start order without selecting Time and verify error message', function () {
        //Select date
        storeDetailsPage.getDatePickerIcon()
        storeDetailsPage.getDate(date)
        cy.info("1. PICK THE DATE FROM THE DATE PICKER")
        cy.wait(4000)
        //click start order button without selecting Time
        cy.info("2. CLICK ON 'START ORDER' BUTTON WITHOUT SELECTING TIME")
        storeDetailsPage.verifyTimeNotSelected()
        cy.info("3. ERROR MESSAGE SHOULD BE DISPLAYED AS 'This field is required'")
    })


})
