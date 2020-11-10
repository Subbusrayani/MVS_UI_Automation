import NavigationPage from '../../support/PageObjectModel/NavigationPage.js'
import SelectStorePage from '../../support/PageObjectModel/SelectStorePage.js'
import StoreResultsPage from '../../support/PageObjectModel/StoreResultsPage.js'
import StoreDetailsPage from '../../support/PageObjectModel/StoreDetailsPage.js'
import ProductListingPage from '../../support/PageObjectModel/ProductListingPage.js'
import ProductDetailsPage from '../../support/PageObjectModel/ProductDetailsPage.js'
import CartDetailsPage from '../../support/PageObjectModel/CartDetailsPage.js'
describe('Place_Order Happy Path', () => {

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

    })


    it('Validate the error message without entering a store name', function () {

        //Click select store button
        cy.wait(3000)
        storeDetailsPage.getSelectStoreButtonErrorMessage()
    })





})
