/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
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
import "cypress-iframe"

describe('Place Order - Edit the Contact Information', () => {

    // Object creation for all pages
    const navigationPage = new NavigationPage()
    const selectStorePage = new SelectStorePage()
    const storeResultsPage = new StoreResultsPage()
    const storeDetailsPage = new StoreDetailsPage()
    const productListingPage = new ProductListingPage()
    const productDetailsPage = new ProductDetailsPage()
    const cartDetailsPage = new CartDetailsPage()
    const checkOutPage = new CheckOutPage()
    const paymentInformationPage = new PaymentInformationPage()
    const orderConfirmationPage = new OrderConfirmationPage()
    // Variable declarations for Test data
    var url, location, storename, date, time, productname, varietyname, calorie, servecount, price;
    var firstname, lastname, phno, email, promocode;
    var cardholdername, cardnumber, cardexpirydate, securitycode, address, city, state, country, zipcode;
    var ecfname, eclname, ecphno, ecemail

    beforeEach(function () {
        cy.fixture('testData').then(function (data) {
            this.data = data

            // Test data - order details testdata

            url = this.data.url
            location = this.data.location
            date = this.data.date
            time = this.data.time
            productname = this.data.productname
            varietyname = this.data.varietyname
            storename = this.data.storename
            calorie = this.data.calorie
            servecount = this.data.servecount
            price = this.data.price
            //contact details test data
            firstname = this.data.firstname
            lastname = this.data.lastname
            email = this.data.email
            phno = this.data.phno
            promocode = this.data.promocode

            //Edit contact info
            ecfname = this.data.ecfname
            eclname = this.data.eclname
            ecemail = this.data.ecemail
            ecphno = this.data.ecphno

            // Card details test date
            cardholdername = this.data.cardholdername
            cardnumber = this.data.cardnumber
            cardexpirydate = this.data.cardexpirydate
            securitycode = this.data.securitycode
            address = this.data.address
            city = this.data.city
            state = this.data.state
            country = this.data.country
            zipcode = this.data.zipcode



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

        //Verify location name 
        selectStorePage.verifyLocationNameinSearchTextBox(location)
        // Click find store button
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
    })

    it('Select a store from the stores list', function () {

        //Click select store button
        storeResultsPage.getSelectStoreButton(storename)
        cy.wait(4000)
    })

    it('Enter the pick up details ( Date and Time )', function () {
        //Select date
        storeDetailsPage.getDatePickerIcon()
        storeDetailsPage.getDate(date)
        //Select time
        cy.wait(4000)
        storeDetailsPage.getTime(time)
    })

    it('Start the Order', function () {
        //click start order button
        storeDetailsPage.getStartOrderButton()

    })

    it('Select the product from Product listing page', function () {

        //Select the product
        productListingPage.selectProductName(productname)
        cy.wait(4000)

        // Verifying actual product name in product details page
        productDetailsPage.getProductName().should('have.text', productname)

        //Select variety name from dropdown
        productDetailsPage.getVarietyNameInDropdown(varietyname)

        //click on add count 
        //productDetailsPage.getAddProductCountIcon()

        //Verify product details
        productDetailsPage.verifyProductDetails()


    })


    it('Adding the selected product to the Cart', function () {
        //click on Add to cart button
        productDetailsPage.getAddToCartButton()

        //Click on Go to cart button 
        productDetailsPage.getGoToCartButton()
        cy.wait(4000)

    })

    it('Verify the Product and Checkout from Cart Details page', function () {

        cy.wait(4000)

        //Verify product name in cart details page
        cartDetailsPage.getProductName().should('have.text', productname)
        //Verify product details
        cartDetailsPage.verifyProductDetails()
        // click on checkout button
        cartDetailsPage.getCheckoutButton()
        cy.wait(10000)


    })

    it('Enter Contact information in Checkout Page', function () {


        //enter contact information firstname,lastname, phno, email , promo code , spl instructions
        checkOutPage.enterContactFirstName(firstname)
        checkOutPage.enterContactLastName(lastname)
        checkOutPage.enterContactEmail(email)
        checkOutPage.enterContactPhonenumber(phno)
        checkOutPage.clickPromoCodeLink()
        checkOutPage.enterPromoCode(promocode)
        checkOutPage.enterSpecialInstructions()
        checkOutPage.clickAcceptCheckBox()

        //Click on continue payment button 
        checkOutPage.clickContinuePaymentButton()



    })

    it('Edit the Contact information in Checkout Page', function () {


        //Click on edit button
        checkOutPage.getContactInfoEditButton()
        //enter contact information firstname,lastname, phno, email 
        checkOutPage.enterContactFirstName(ecfname)
        checkOutPage.enterContactLastName(eclname)
        checkOutPage.enterContactEmail(ecemail)
        checkOutPage.enterContactPhonenumber(ecphno)

        // //Click on continue payment button 
        checkOutPage.clickContinuePaymentButton()



    })



})
