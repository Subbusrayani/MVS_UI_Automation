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

describe('Place_Order - Subscribing to the promos', () => {

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
        cy.info("1. CLICK ON 'START ORDER' BUTTON")

    })

    it('Enter Location name', function () {

        cy.wait(2000)
        cy.info("1. ENTER THE CITY NAME '" + location + "' IN THE SEARCH TEXT FIELD")
        selectStorePage.getStoreSearchTextBox(location)
        cy.info("2. SELECT THE CITY NAME '" + location + "' FROM AUTO SUGGESTION LIST")
        //Click on result
        selectStorePage.selectAutoSuggest(location)
        cy.wait(2000)
        cy.info("3. VERIFY WHETHER CITY '" + location + "' IS SELECTED ")
        //Verify location name 
        selectStorePage.verifyLocationNameinSearchTextBox(location)
        cy.info("4. CLICK ON 'FIND STORES' BUTTON")
        // Click find store button
        selectStorePage.getFindStoresButton()
        cy.wait(2000)
    })

    it('Select a store from the stores list', function () {

        //Click select store button
        cy.info("1. CLICK ON 'SELECT STORE' BUTTON -" + storename)
        storeResultsPage.getSelectStoreButton(storename)
        cy.wait(4000)
    })

    it('Enter the pick up details ( Date and Time )', function () {
        //Select date
        cy.info("1. PICK THE DATE FROM THE DATE PICKER")
        storeDetailsPage.getDatePickerIcon()
        storeDetailsPage.getDate(date)
        //Select time
        cy.wait(4000)
        cy.info("2.SELECT THE TIME")
        storeDetailsPage.getTime(time)
    })

    it('Start the Order', function () {
        //click start order button
        cy.info("1. CLICK ON 'START ORDER' BUTTON ")
        storeDetailsPage.getStartOrderButton()

    })

    it('Select the product from Product listing page', function () {

        //Select the product
        cy.info("1. SELECT THE PRODUCT FROM PRODUCT DETAILS PAGE - " + productname)
        productListingPage.selectProductName(productname)
        cy.wait(4000)

        // Verifying actual product name in product details page
        cy.info("2. VERIFY THE SELECTED PRODUCT NAME -" + productname)
        productDetailsPage.getProductName().should('have.text', productname)

        cy.info("3. SELECT THE VARIETY NAME FROM DROPDOWN - " + varietyname)
        //Select variety name from dropdown
        productDetailsPage.getVarietyNameInDropdown(varietyname)

        //click on add count 
        //productDetailsPage.getAddProductCountIcon()
        cy.info("4. VERIFY THE CALORIE VALUE AND SERVE COUNT OF SELECTED PRODUCT")
        //Verify product details
        productDetailsPage.verifyProductDetails()


    })


    it('Adding the selected product to the Cart', function () {
        //click on Add to cart button
        cy.info("1. CLICK ON ' ADD TO CART ' BUTTON ")
        productDetailsPage.getAddToCartButton()
        cy.info("2. CLICK ON ' GO TO CART ' BUTTON ")
        //Click on Go to cart button 
        productDetailsPage.getGoToCartButton()
        cy.wait(4000)

    })

    it('Verify the Product and Checkout from Cart Details page', function () {

        cy.wait(4000)
        cy.info("1. VERIFY PRODUCT NAME IN CART DETAILS PAGE -" + productname)
        //Verify product name in cart details page
        cartDetailsPage.getProductName().should('have.text', productname)
        //Verify product details
        cy.info("2. VERIFY CALORIE VALUE AND SERVE COUNT  IN CART DETAILS PAGE -" + productname)
        cartDetailsPage.verifyProductDetails()
        // click on checkout button
        cy.info("3. CLICK ON 'CHECKOUT BUTTON' " + productname)
        cartDetailsPage.getCheckoutButton()
        cy.wait(10000)


    })

    it('Enter Contact information in Checkout Page', function () {


        cy.info("1. NAVIGATE TO CHECKOUT PAGE AND ENTER CONTACT INFORMATION")
        //enter contact information firstname,lastname, phno, email , promo code , spl instructions
        cy.info("FIRSTNAME -" + firstname + ", LASTNAME -" + lastname + " , EMAIL -" + email + " , PHONE NUMBER -" + phno)
        checkOutPage.enterContactFirstName(firstname)
        checkOutPage.enterContactLastName(lastname)
        checkOutPage.enterContactEmail(email)
        checkOutPage.enterContactPhonenumber(phno)
        cy.info("2. CLICK ON PROMO CODE BUTTON")
        checkOutPage.clickPromoCodeLink()
        cy.info("3. ENTER VALID PROMO CODE -" + promocode)
        checkOutPage.enterPromoCode(promocode)
        cy.info("4. FILL SOME TEXT IN 'SPECIAL INSTRUCTIONS' TEXTFIELD")
        checkOutPage.enterSpecialInstructions()
        cy.info("5. CHECK AGREE CHECK BOX")
        checkOutPage.clickAcceptCheckBox()


        //Click on continue payment button 
        checkOutPage.clickContinuePaymentButton()
        cy.info("6. CLICK ON 'CONTINUE PAYMENT' BUTTON")
        cy.wait(3000)
        //verify the promo subscriptions
        checkOutPage.getNewsletterSubscription()
        cy.info("7. CLICK ON NEWS LETTER SUBSCRIPTIONS")

    })


})
