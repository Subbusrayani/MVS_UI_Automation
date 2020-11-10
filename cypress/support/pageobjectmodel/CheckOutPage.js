class CheckOutPage {

    enterContactFirstName(name) {
        const firstnamefield = cy.get('input#firstName');
        firstnamefield.type(name)
    }

    enterContactLastName(name) {
        const lastnamefield = cy.get('input#lastName');
        lastnamefield.type(name)
    }

    enterContactEmail(email) {
        const emailfield = cy.get('input#emailAddress');
        emailfield.type(email)
    }
    enterContactPhonenumber(ph) {
        const phonefield = cy.get('input#phoneNumber');
        phonefield.type(ph)
    }

    clickAcceptCheckBox() {
        const checkbox = cy.get('span.Checkbox__StyledRadioShown-sc-162e865-2.icsdqm');
        checkbox.click()
    }

    clickPromoCodeLink() {
        const promocodelink = cy.contains('Have a promo code')
        promocodelink.click()
    }

    enterPromoCode(code) {
        const promocodefield = cy.get('input#promoCode')
        promocodefield.type(code)
    }
    enterSpecialInstructions() {
        const textfield = cy.get('textarea.Input__StyledInput-sc-1uxelqj-2.gCfqvF');
        textfield.type("sweet and spicy")
    }

    clickContinuePaymentButton() {
        const button = cy.contains('Continue to Payment')
        button.click()
    }





}
export default CheckOutPage;