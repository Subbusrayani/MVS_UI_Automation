/// <reference types="Cypress" />
import DashboardPage from '../../../support/managerportal/pageobjectmodel/DashboardPage.js'
describe('Search order details of a store ', () => {

    // Object creation for all pages
    const dashboardPage = new DashboardPage()

    // Variable declarations for Test data
    var url, storenumber, storeaddress, phonenumber, firstname, lastname, ordernumber, email, startdate, enddate;

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture('managerportaltestData').then(function (data) {
            this.data = data

            // Test data -Search order details for store

            url = this.data.url
            storenumber = this.data.storenumber
            storeaddress = this.data.storeaddress
            phonenumber = this.data.phonenumber
            firstname = this.data.firstname
            lastname = this.data.lastname
            ordernumber = this.data.ordernumber
            email = this.data.email
        })
    })

    it('Searching for a particular Store id ', function () {

        // Enter manager portal url
        cy.info("GO TO URL - " + url)
        cy.visit(url)

        //search for store
        dashboardPage.searchForStoreNumber(storenumber)
        cy.log(storeaddress)
        //verify address of the store
        dashboardPage.verifyAddressOfStore(storeaddress)

    })


    it('Search order using phone number', function () {

        cy.info("SEARCH ORDER USING PHONE NUMBER")
        dashboardPage.verifyOrderSearchUsingPhoneNumber(phonenumber)
        cy.wait(4000)

    })

    it('Search order using Order number', function () {


        dashboardPage.clickAdvancedSearchLink()
        dashboardPage.enterOrderNumber(ordernumber)
        dashboardPage.clickSearchButton()
        cy.wait(4000)
        dashboardPage.verifyOrderSearchUsingOrderNumber(ordernumber)
    })


    it('Search order using firstname', function () {

        dashboardPage.clickAdvancedSearchLink()
        dashboardPage.enterFirstname(firstname)
        dashboardPage.clickSearchButton()
        cy.wait(4000)
        dashboardPage.verifyOrderSearchUsingUsername(firstname)

    })

    it('Search order using lastname', function () {

        dashboardPage.clickAdvancedSearchLink()
        dashboardPage.enterLastname(lastname)
        dashboardPage.clickSearchButton()
        cy.wait(4000)
        dashboardPage.verifyOrderSearchUsingUsername(lastname)

    })

    it('Search order using email', function () {

        dashboardPage.clickAdvancedSearchLink()
        dashboardPage.enterEmailId(email)
        dashboardPage.clickSearchButton()
        cy.wait(4000)
        dashboardPage.verifyOrderSearchUsingEmail(email)

    })

    // it('Search order using Start Date-End Date', function () {



    // })


})