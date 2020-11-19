import NavigationPage from '../../../support/customerliteportal/pageobjectmodel/NavigationPage.js'
import SelectStorePage from '../../../support/customerliteportal/pageobjectmodel/SelectStorePage.js'
import StoreResultsPage from '../../../support/customerliteportal/pageobjectmodel/StoreResultsPage.js'
import StoreDetailsPage from '../../../support/customerliteportal/pageobjectmodel/StoreDetailsPage.js'
import ProductListingPage from '../../../support/customerliteportal/pageobjectmodel/ProductListingPage.js'
import ProductDetailsPage from '../../../support/customerliteportal/pageobjectmodel/ProductDetailsPage.js'
import CartDetailsPage from '../../../support/customerliteportal/pageobjectmodel/CartDetailsPage.js'

describe('Negative scenario - Entering invalid store details', () => {

    // Object creation for all pages
    const navigationPage = new NavigationPage()
    const selectStorePage = new SelectStorePage()
    const storeResultsPage = new StoreResultsPage()
    const storeDetailsPage = new StoreDetailsPage()
    const productListingPage = new ProductListingPage()
    const productDetailsPage = new ProductDetailsPage()
    const cartDetailsPage = new CartDetailsPage()

    // Variable declarations for Test data
    var url, invalidlocation, date, time, productname, varietyname;

    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data

            // Test data used for the execution

            url = this.data.url
            invalidlocation = this.data.invalidlocation


        })
    })

    it('Start Catering Order', function () {

        cy.log(url)
        cy.visit(url)
        //Click on Start catering order button
        navigationPage.getStartCateringOrder()
        cy.info("1. CLICK ON 'START ORDER' BUTTON")

    })

    it('Validate the error message without entering a store name', function () {

        //Click select store button
        cy.wait(3000)
        storeDetailsPage.getSelectStoreButtonErrorMessage()
    })

    it('Enter the invalid store details', function () {

        cy.wait(2000)

        selectStorePage.getStoreSearchTextBox(invalidlocation)
        //Click on result
        selectStorePage.selectAutoSuggest(invalidlocation)
        cy.wait(2000)

        //Verify location name 
        selectStorePage.verifyLocationNameinSearchTextBox(invalidlocation)
        cy.info("1. ENTER THE INVALID STORE LOCATION - " + invalidlocation)
        // Click find store button
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
    })

    it('Validate the invalid store location details', function () {

        selectStorePage.getVerifyInvalidlocationDetails()

    })





})
