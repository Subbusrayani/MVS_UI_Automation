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



}
export default PaymentInformationPage;