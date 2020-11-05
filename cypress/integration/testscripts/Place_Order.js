import NavigationPage from '../../support/PageObjectModel/NavigationPage.js'
import SelectStorePage from '../../support/PageObjectModel/SelectStorePage.js'
import StoreResultsPage from '../../support/PageObjectModel/StoreResultsPage.js'
import StoreDetailsPage from '../../support/PageObjectModel/StoreDetailsPage.js'
import ProductListingPage from '../../support/PageObjectModel/ProductListingPage.js'
import ProductDetailsPage from '../../support/PageObjectModel/ProductDetailsPage.js'
describe('navigate to start order', () => {
    it('start order', function () {
        cy.visit("https://dev01.ip.wawa.com/commerce/ui/")

        const navigationPage = new NavigationPage();
        const selectStorePage = new SelectStorePage()
        const storeResultsPage = new StoreResultsPage()
        const storeDetailsPage = new StoreDetailsPage()
        const productListingPage = new ProductListingPage()
        const productDetailsPage = new ProductDetailsPage()

        //Click on Start catering order button
        navigationPage.getStartCateringOrder()

        //Enter city/state or zip code
        selectStorePage.getStoreSearchTextBox()
        cy.wait(2000)

        //Click on result
        selectStorePage.selectAutoSuggest()

        cy.wait(2000)
        // Click find store button
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
        //Click select store button
        storeResultsPage.getSelectStoreButton()
        cy.wait(4000)

        storeDetailsPage.getDatePickerIcon()
        storeDetailsPage.getDate("November 9, 2020")
        storeDetailsPage.getTime("11:30 AM")
        storeDetailsPage.getStartOrderButton()
        cy.wait(4000)

    })
})