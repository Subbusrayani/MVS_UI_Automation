/// <reference types="Cypress" />


class PaymentInformationPage {

    enterCardHolderName(name) {
        const holdername = cy.iframe('#myId').find('input#exact_cardholder_name')
        holdername.type(name)
    }

    switchToPaymentFrame() {
        cy.frameLoaded('#myId')
    }

    enterCardNumber(cardnumber) {
        const number = cy.iframe('#myId').find('input#x_card_num')
        number.type(cardnumber)
    }

    enterExpiryDate(expirydate) {
        const date = cy.iframe('#myId').find('input#x_exp_date')
        date.type(expirydate)
    }

    enterSecurityCode(code) {
        const securitycode = cy.iframe('#myId').find('input#x_card_code')
        securitycode.type(code)
    }
    enterAddress(address) {
        const addressfield = cy.iframe('#myId').find('input#x_address')
        addressfield.type(address)
    }

    enterCity(city) {
        const citynamefield = cy.iframe('#myId').find('input#x_city')
        citynamefield.type(city)
    }

    selectState(state) {
        cy.iframe('#myId').find('#x_state').select(state)
    }
    enterPostalCode(postcode) {
        const code = cy.iframe('#myId').find('input#x_zip')
        code.type(postcode)
    }

    selectCountry(country) {
        cy.iframe('#myId').find('#x_country').select(country)
    }

    clickSubmitOrderButton() {
        const submitbutton = cy.iframe('#myId').find('input[value="Submit Order"]')
        submitbutton.click()
    }
    verifyErrorMessage() {
        cy.iframe('#myId').find('div.fieldErrorMessage').should('have.text', 'Invalid credit card number')
    }

    verifyPromoCodeFeatureOnPaymentPage(promocode) {
        //checking price details before applying promo code
        cy.contains('Order Total').siblings('strong').invoke('text').then((total) => {

            //Order total before promo code apply
            var ordertotalbeforepromo = parseInt(total.replace("$", ""))

            cy.log(ordertotalbeforepromo)
            cy.info("1. ORDER TOTAL BEFORE APPLYING PROMO CODE: " + ordertotalbeforepromo)
            cy.iframe('#myId').find('.total_value').invoke('text').then((totalamount) => {

                //total amount before promo code apply in payment section    
                var totalamountinpaymentsection = parseInt(totalamount)
                cy.log(totalamountinpaymentsection)

                //click on 'Have a promo code' button
                cy.info("2. CLICK ON PROMO CODE BUTTON")
                cy.contains('Have a promo code').click()

                cy.info("3. ENTER VALID PROMO CODE -" + promocode)
                cy.get('#promoCode').type(promocode)

                cy.info("4. CLICK ON APPLY BUTTON")
                cy.contains('Apply').click()
                cy.wait(2000)

                cy.contains('Promotions').siblings('strong').invoke('text').then((totalpromotion) => {

                    // extract promotion price and store in variable
                    var promotionstotal = parseInt(totalpromotion.replace("-$", ""))
                    cy.log(promotionstotal)
                    cy.info("5. TOTAL PROMOTIONS APPLIED: " + promotionstotal)

                    // subtract order total before promo code applied - promotional value and store in variable
                    var ordertotalexpected = ordertotalbeforepromo - promotionstotal

                    //expected value of total amount after promo applied in payment section
                    var ordertotalexpectedonpaymentpage = totalamountinpaymentsection - promotionstotal
                    cy.log(ordertotalexpected)
                    cy.log(ordertotalexpectedonpaymentpage)
                    cy.info("6. ORDER TOTAL EXPECTED AFTER APPLYING PROMO CODE: " + ordertotalexpected)

                    // extract  new order total order value and store in variable
                    cy.contains('Order Total').siblings('strong').invoke('text').then((totalafterpromo) => {

                        var ordertotalafterpromoapplied = parseInt(totalafterpromo.replace("$", ""))
                        cy.log(ordertotalafterpromoapplied)

                        cy.info("7. ORDER TOTAL ACTUAL AFTER APPLYING PROMO CODE: " + ordertotalafterpromoapplied)

                        // check actual and expected value in order total section
                        expect(ordertotalexpected).to.equal(ordertotalafterpromoapplied)

                        cy.wait(15000)
                        cy.iframe('#myId').find('.total_value').invoke('text').then((totalamountafterpromo) => {
                            var totalamountafterpromoappliedonpaymentpage = parseInt(totalamountafterpromo)
                            // check actual and expected value in payment section
                            expect(ordertotalexpectedonpaymentpage).to.equal(totalamountafterpromoappliedonpaymentpage)
                        })
                    })
                })
            })
        })

    }


}
export default PaymentInformationPage;