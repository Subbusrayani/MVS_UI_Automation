import NavigationPage from '../../../support/customerliteportal/pageobjectmodel/NavigationPage.js'
import SelectStorePage from '../../../support/customerliteportal/pageobjectmodel/SelectStorePage.js'
import StoreResultsPage from '../../../support/customerliteportal/pageobjectmodel/StoreResultsPage.js'
import StoreDetailsPage from '../../../support/customerliteportal/pageobjectmodel/StoreDetailsPage.js'
import ProductListingPage from '../../../support/customerliteportal/pageobjectmodel/ProductListingPage.js'
import ProductDetailsPage from '../../../support/customerliteportal/pageobjectmodel/ProductDetailsPage.js'
import CartDetailsPage from '../../../support/customerliteportal/pageobjectmodel/CartDetailsPage.js'
import CheckOutPage from '../../../support/customerliteportal/pageobjectmodel/CheckOutPage.js'
import PaymentInformationPage from '../../../support/customerliteportal/pageobjectmodel/PaymentInformationPage.js'
import OrderConfirmationPage from '../../../support/customerliteportal/pageobjectmodel/OrderConfirmationPage.js'
describe('Negative scenario - Without date details', () => {

    // Object creation for all pages
    const navigationPage = new NavigationPage()
    const selectStorePage = new SelectStorePage()
    const storeResultsPage = new StoreResultsPage()
    const storeDetailsPage = new StoreDetailsPage()
    const productListingPage = new ProductListingPage()
    const productDetailsPage = new ProductDetailsPage()
    const cartDetailsPage = new CartDetailsPage()

    // Variable declarations for Test data
    var url, location, date, time, productname, varietyname;

    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data

            // Test data used for the execution

            url = this.data.url
            location = this.data.location
            date = this.data.date
            time = this.data.time
            productname = this.data.productname
            varietyname = this.data.varietyname

        })
    })

    it('Start Catering Order', function () {

        cy.log(url)
        cy.visit(url)
        //Click on Start catering order button
        navigationPage.getStartCateringOrder()
        cy.info("1. CLICK ON 'START ORDER' BUTTON")

    })

    it('Enter Location name', function () {

        cy.wait(2000)
        cy.info("1. ENTER THE CITY NAME '" + location + "' IN THE SEARCH TEXT FIELD")
        selectStorePage.getStoreSearchTextBox(location)
        cy.info("2. SELECT THE CITY NAME '" + location + "' FROM AUTO SUGGESTION LIST")
        //Click on result
        selectStorePage.selectAutoSuggest(location)
        cy.wait(2000)
        cy.info("3. VERIFY WHETHER CITY '" + location + "' IS SELECTED ")
        //Verify location name 
        selectStorePage.verifyLocationNameinSearchTextBox(location)
        cy.info("4. CLICK ON 'FIND STORES' BUTTON")
        // Click find store button
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
    })

    it('Select a store from the stores list', function () {

        //Click select store button
        storeResultsPage.getSelectStoreButton()
        cy.info("1. CLICK ON 'SELECT STORE' BUTTON -" + storename)
        cy.wait(4000)
    })

    it('Validate the error message without entering a valid date', function () {

        //Click select store button
        storeDetailsPage.getDateFieldErrorMessage()
    })




})
