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

    it('Enter Location name', function () {

        cy.wait(2000)

        selectStorePage.getStoreSearchTextBox(location)
        //Click on result
        selectStorePage.selectAutoSuggest(location)
        cy.wait(2000)
        // Click find store button
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
    })

    it('Select a store from the stores list', function () {

        //Click select store button
        storeResultsPage.getSelectStoreButton()
        cy.wait(4000)
    })

    it('Enter the pick up up details', function () {
        //Select date
        storeDetailsPage.getDatePickerIcon()
        storeDetailsPage.getDate(date)
        //Select time
        storeDetailsPage.getTime(time)
    })

    it('Start the Order', function () {
        //click start order button
        storeDetailsPage.getStartOrderButton()
        cy.wait(4000)
    })

    it('Select the product from Product listing page', function () {

        //Select the product
        productListingPage.selectProductName(productname)
        cy.wait(3000)
        //Select variety name from dropdown

        productDetailsPage.getVarietyNameInDropdown(varietyname)
        //click on add count 
        productDetailsPage.getAddProductCountIcon()
    })


    it('Adding the selected product to the Cart', function () {
        //click on Add to cart button
        productDetailsPage.getAddToCartButton()
        //Click on Go to cart button 
        productDetailsPage.getGoToCartButton()
    })

    it('Checkout from Cart Details page', function () {

        // click on checkout button
        cartDetailsPage.getCheckoutButton()
        cy.wait(4000)
    })
})
