/// <reference types="Cypress" />
import DashboardPage from '../../../support/managerportal/pageobjectmodel/DashboardPage.js'
describe('ORDER DETAILS FOR A STORE IN DASHBOARD', () => {

    // Object creation for all pages
    const dashboardPage = new DashboardPage()

    // Variable declarations for Test data
    var url, storenumber, storeaddress;

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture('managerportaltestData').then(function (data) {
            this.data = data

            // Test data -Search order details for store

            url = this.data.url
            storenumber = this.data.storenumber
            storeaddress = this.data.storeaddress
        })
    })

    it('Seraching for a particular Store id ', function () {

        // Enter manager portal url
        cy.info("GO TO URL - " + url)
        cy.visit(url)

        //search for store
        dashboardPage.searchForStoreNumber(storenumber)
        cy.log(storeaddress)
        //verify address of the store
        dashboardPage.verifyAddressOfStore(storeaddress)

    })

    it('Verifying Printing count for Upcoming Orders', function () {

        //Verify upcoming order prints
        cy.info("VERIFYING PRINT COUNT DISPLAY FOR UPCOMING ORDERS IN BOTH LEFT AND RIGHT SIDE DASHBORD VIEW")
        dashboardPage.verifyUpcomingOrderPrintCount()
    })

    it('Verifying Number of Upcoming Orders displayed ', function () {

        dashboardPage.verifyNumberOfUpcomingOrdersDisplayed()

    })
    it('Verifying Printing count for Future Orders', function () {

        //click future order tab
        cy.info("CLICK FUTURE ORDERS TAB")
        dashboardPage.clickFutureTab()
        cy.wait(3000)
        //verify future order prints
        cy.info("VERIFYING PRINT COUNT DISPLAY FOR FUTURE  ORDERS IN BOTH LEFT AND RIGHT SIDE DASHBORD VIEW")
        dashboardPage.verifyFutureOrdersPrintCount()

    })






})