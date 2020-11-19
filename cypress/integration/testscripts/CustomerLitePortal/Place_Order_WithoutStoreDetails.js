import NavigationPage from '../../../support/customerliteportal/pageobjectmodel/NavigationPage.js'
import SelectStorePage from '../../../support/customerliteportal/pageobjectmodel/SelectStorePage.js'
import StoreResultsPage from '../../../support/customerliteportal/pageobjectmodel/StoreResultsPage.js'
import StoreDetailsPage from '../../../support/customerliteportal/pageobjectmodel/StoreDetailsPage.js'
import ProductListingPage from '../../../support/customerliteportal/pageobjectmodel/ProductListingPage.js'
import ProductDetailsPage from '../../../support/customerliteportal/pageobjectmodel/ProductDetailsPage.js'
import CartDetailsPage from '../../../support/customerliteportal/pageobjectmodel/CartDetailsPage.js'

describe('Negative scenario - Without store details', () => {

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

    it('Select a store from the stores list', function () {

        //Click select store button
        cy.info("1. CLICK ON 'SELECT STORE' BUTTON -" + storename)
        storeResultsPage.getSelectStoreButton(storename)
        cy.wait(4000)
    })


    it('Validate the error message without entering a store name', function () {

        //Click select store button
        cy.wait(3000)
        storeDetailsPage.getSelectStoreButtonErrorMessage()
    })





})
