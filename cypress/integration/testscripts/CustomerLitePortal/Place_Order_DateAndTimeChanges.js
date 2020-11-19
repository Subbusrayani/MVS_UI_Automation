/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import NavigationPage from '../../../support/customerliteportal/pageobjectmodel/NavigationPage.js'
import SelectStorePage from '../../../support/customerliteportal/pageobjectmodel/SelectStorePage.js'
import StoreResultsPage from '../../../support/customerliteportal/pageobjectmodel/StoreResultsPage.js'
import StoreDetailsPage from '../../../support/customerliteportal/pageobjectmodel/StoreDetailsPage.js'
import ProductListingPage from '../../../support/customerliteportal/pageobjectmodel/ProductListingPage.js'
import ProductDetailsPage from '../../../support/customerliteportal/pageobjectmodel/ProductDetailsPage.js'
import CartDetailsPage from '../../../support/customerliteportal/pageobjectmodel/CartDetailsPage.js'
import EditPickupDetailsPage from '../../../support/customerliteportal/pageobjectmodel/EditPickupDetailsPage.js'

import "cypress-iframe"
describe('Place Order - Change the Date and Time in the checkout page', () => {

    // Object creation for all pages
    const navigationPage = new NavigationPage()
    const selectStorePage = new SelectStorePage()
    const storeResultsPage = new StoreResultsPage()
    const storeDetailsPage = new StoreDetailsPage()
    const productListingPage = new ProductListingPage()
    const productDetailsPage = new ProductDetailsPage()
    const cartDetailsPage = new CartDetailsPage()
    const editPickupDetailsPage = new EditPickupDetailsPage()
    // Variable declarations for Test data
    var url, location, storename, changeStoreName, date, time, productname, varietyname, changeTime, changeDate;

    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data

            // Test data - order details testdata

            url = this.data.url
            location = this.data.location
            date = this.data.date
            time = this.data.time
            productname = this.data.productname
            varietyname = this.data.varietyname
            storename = this.data.storename
            changeStoreName = this.data.changeStoreName
            changeDate = this.data.changeDate
            changeTime = this.data.changeTime
        })
    })

    it('Start Catering Order', function () {

        cy.log(url)
        cy.visit(url)
        //Click on Start catering order button
        cy.info("1. CLICK ON 'START ORDER' BUTTON")
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

        //Verify location name 
        cy.info("3. VERIFY WHETHER CITY '" + location + "' IS SELECTED ")
        selectStorePage.verifyLocationNameinSearchTextBox(location)
        // Click find store button
        cy.info("4. CLICK ON 'FIND STORES' BUTTON")
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
    })

    it('Select a store from the stores list', function () {

        //Click select store button
        cy.info("1. CLICK ON 'SELECT STORE' BUTTON -" + storename)
        storeResultsPage.getSelectStoreButton(storename)
        cy.wait(4000)
    })

    it('Enter the pick up details ( Date and Time )', function () {
        //Select date
        cy.info("1. PICK THE DATE FROM THE DATE PICKER")
        storeDetailsPage.getDatePickerIcon()
        storeDetailsPage.getDate(date)
        //Select time
        cy.wait(4000)
        cy.info("2.SELECT THE TIME")
        storeDetailsPage.getTime(time)
    })

    it('Start the Order', function () {
        //click start order button
        cy.info("1. CLICK ON 'START ORDER' BUTTON ")
        storeDetailsPage.getStartOrderButton()

    })

    it('Select the product from Product listing page', function () {

        //Select the product
        cy.info("1. SELECT THE PRODUCT FROM PRODUCT DETAILS PAGE - " + productname)
        productListingPage.selectProductName(productname)
        cy.wait(4000)

        // Verifying actual product name in product details page
        cy.info("2. VERIFY THE SELECTED PRODUCT NAME -" + productname)
        productDetailsPage.getProductName().should('have.text', productname)

        //Select variety name from dropdown
        cy.info("3. SELECT THE VARIETY NAME FROM DROPDOWN - " + varietyname)
        productDetailsPage.getVarietyNameInDropdown(varietyname)

    })


    it('Adding the selected product to the Cart', function () {
        //click on Add to cart button
        cy.info("1. CLICK ON ' ADD TO CART ' BUTTON " + varietyname)
        productDetailsPage.getAddToCartButton()
        cy.info("2. CLICK ON ' GO TO CART ' BUTTON ")
        //Click on Go to cart button 
        productDetailsPage.getGoToCartButton()
        cy.wait(4000)

    })

    it('Edit Pick up details - Change date and Time', function () {

        //Click on Edit button
        cy.info("1. NAVIGATE TO CART DETAILS PAGE AND CLICK ON 'EDIT' BUTTON FROM PICKUP DETAILS SECTION")
        cartDetailsPage.clickEditPickupDetailButton()
        //Click on change location button
        cy.info("2. CHANGE DATE AND TIME IN PICK UP DETAILS DIALOG BOX")
        editPickupDetailsPage.selectDate(changeDate);
        editPickupDetailsPage.selectTime(changeTime)

        // Click on save changes button
        cy.info("3. CLICK ON SAVE CHANGES BUTTON")
        editPickupDetailsPage.clickSaveChangesButton()



    })

    it('Verify the updated Date and Time in Cart Details Page', function () {

        cy.info("VERIFY WHETHER NAVIAGTED TO CART DETAILS PAGE AND CHECK WHETHER DATE AND TIME IS UPDATED-" + changeStoreName)
        //verify pick up detail update
        cartDetailsPage.verifyDataAndTimeChange()


    })





})
