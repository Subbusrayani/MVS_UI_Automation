import NavigationPage from '../../support/PageObjectModel/NavigationPage.js'
import SelectStorePage from '../../support/PageObjectModel/SelectStorePage.js'
import StoreResultsPage from '../../support/PageObjectModel/StoreResultsPage.js'
import StoreDetailsPage from '../../support/PageObjectModel/StoreDetailsPage.js'
import ProductListingPage from '../../support/PageObjectModel/ProductListingPage.js'
import ProductDetailsPage from '../../support/PageObjectModel/ProductDetailsPage.js'
import CartDetailsPage from '../../support/PageObjectModel/CartDetailsPage.js'
describe('Place_Order Happy Path', () => {

    before(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data
        })
    })

    it('Start Catering Order', function () {

        const url = this.data.url
        const location = this.data.location
        const date = this.data.date
        const time = this.data.time
        const productname = this.data.productname
        const varietyname = this.data.varietyname

        cy.visit(url)
        const navigationPage = new NavigationPage();
        const selectStorePage = new SelectStorePage()
        const storeResultsPage = new StoreResultsPage()
        const storeDetailsPage = new StoreDetailsPage()
        const productListingPage = new ProductListingPage()
        const productDetailsPage = new ProductDetailsPage()
        const cartDetailsPage = new CartDetailsPage()


        //Click on Start catering order button
        navigationPage.getStartCateringOrder()

        //Enter city/state or zip code
        selectStorePage.getStoreSearchTextBox(location)
        cy.wait(2000)

        //Click on result
        selectStorePage.selectAutoSuggest(location)

        cy.wait(2000)
        // Click find store button
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
        //Click select store button
        storeResultsPage.getSelectStoreButton()
        cy.wait(4000)

        //Select date
        storeDetailsPage.getDatePickerIcon()
        storeDetailsPage.getDate(date)

        //Select time
        storeDetailsPage.getTime(time)

        //click start order button
        storeDetailsPage.getStartOrderButton()
        cy.wait(4000)

        //Select the product
        productListingPage.selectProductName(productname)
        cy.wait(3000)

        //Select variety name from dropdown
        productDetailsPage.getVarietyNameInDropdown(varietyname)

        //click on add count 
        productDetailsPage.getAddProductCountIcon()

        //click on Add to cart button
        productDetailsPage.getAddToCartButton()

        //Click on Go to cart button 
        productDetailsPage.getGoToCartButton()


        // click on checkout button
        cartDetailsPage.getCheckoutButton()
        cy.wait(4000)






    })
})