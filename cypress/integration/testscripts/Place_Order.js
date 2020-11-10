/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import NavigationPage from '../../support/PageObjectModel/NavigationPage.js'
import SelectStorePage from '../../support/PageObjectModel/SelectStorePage.js'
import StoreResultsPage from '../../support/PageObjectModel/StoreResultsPage.js'
import StoreDetailsPage from '../../support/PageObjectModel/StoreDetailsPage.js'
import ProductListingPage from '../../support/PageObjectModel/ProductListingPage.js'
import ProductDetailsPage from '../../support/PageObjectModel/ProductDetailsPage.js'
import CartDetailsPage from '../../support/PageObjectModel/CartDetailsPage.js'
import CheckOutPage from '../../support/PageObjectModel/CheckOutPage.js'
import PaymentInformationPage from '../../support/PageObjectModel/PaymentInformationPage.js'
import OrderConfirmationPage from '../../support/PageObjectModel/OrderConfirmationPage.js'
import "cypress-iframe"
describe('Place_Order Happy Path', () => {

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
    var url, location, storename, date, time, productname, varietyname;
    var firstname, lastname, phno, email, promocode;
    var cardholdername, cardnumber, cardexpirydate, securitycode, address, city, state, country, zipcode;
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
            //contact details test data
            firstname = this.data.firstname
            lastname = this.data.lastname
            email = this.data.email
            phno = this.data.phno
            promocode = this.data.promocode

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

        //Note calorie , price and serve count of product details

        //Select the product
        productListingPage.selectProductName(productname)
        cy.wait(4000)

        // Verifying actual product name in product details page
        productDetailsPage.getProductName().should('have.text', productname)

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
        cy.wait(4000)

    })

    it('Verify the Product and Checkout from Cart Details page', function () {


        cy.wait(4000)
        //Verify product name in cart details page
        cartDetailsPage.getProductName().should('have.text', productname)

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

    it('Enter payment details and submit order', function () {

        // Switch to payment frame
        cy.wait(10000)
        paymentInformationPage.switchToPaymentFrame()

        //enter card holder name, card number, expirydate, security code, city , state , country, address , zip code

        paymentInformationPage.enterCardHolderName(cardholdername)
        paymentInformationPage.enterCardNumber(cardnumber)
        paymentInformationPage.enterExpiryDate(cardexpirydate)
        paymentInformationPage.enterSecurityCode(securitycode)
        paymentInformationPage.enterAddress(address)
        paymentInformationPage.enterCity(city)
        paymentInformationPage.selectState(state)
        paymentInformationPage.enterPostalCode(zipcode)
        // paymentInformationPage.selectCountry(country)


        // Click submit order
        paymentInformationPage.clickSubmitOrderButton()
        cy.wait(10000)


    })

    it('Verify the Order Confirmation page', function () {

        //Verify order details in order confirmation page
        orderConfirmationPage.checkOrderConfirmation()

        //Verify Email id
        orderConfirmationPage.verifyEmailId()


    })
})
