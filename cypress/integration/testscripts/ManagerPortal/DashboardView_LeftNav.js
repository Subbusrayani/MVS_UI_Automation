/// <reference types="Cypress" />
import DashboardPage from '../../../support/managerportal/pageobjectmodel/DashboardPage.js'
describe('VERIFY DASHBOARD LEFT VIEW', () => {

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

    it('Checking dashboard left view elements ', function () {

        // Enter manager portal url
        cy.info("GO TO URL - " + url)
        cy.visit(url)
        dashboardPage.verifyDashboardLeftViewLabel()

    })



})