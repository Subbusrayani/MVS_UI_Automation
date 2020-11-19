class CheckOutPage {

    enterContactFirstName(name) {
        const firstnamefield = cy.get('input#firstName');
        firstnamefield.clear()
        firstnamefield.type(name)
    }

    enterContactLastName(name) {
        const lastnamefield = cy.get('input#lastName');
        lastnamefield.clear()
        lastnamefield.type(name)
    }

    enterContactEmail(email) {
        const emailfield = cy.get('input#emailAddress');
        emailfield.clear()
        emailfield.type(email)
    }
    enterContactPhonenumber(ph) {
        const phonefield = cy.get('input#phoneNumber');
        phonefield.clear()
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

    getContactInfoEditButton() {
        const editbutton = cy.get('button[data-at="checkout--contact-form-editBotton"]')
        editbutton.click()
    }

    getContactInfoDetailsEdit() {

        const firstnamefield = cy.get('input#firstName');
        firstnamefield.clear()
        this.enterContactFirstName.type(ecfname)

        const lastnamefield = cy.get('input#lastName');
        lastnamefield.clear()
        this.enterContactLastName.type(eclname)

        const phonefield = cy.get('input#phoneNumber');
        phonefield.clear()
        phonefield.type(ecphno)

        const emailfield = cy.get('input#emailAddress');
        emailfield.clear()
        emailfield.type(ecemail)
    }

    getNewsletterSubscription() {
        const newsletterlabel = cy.contains('Receive news, offers, and exclusive promotions.')
        newsletterlabel.should('have.text', "Receive news, offers, and exclusive promotions.")

        const subscriptionstatus = cy.contains('Yes')
        cy.contains('Yes').should('have.text', "Yes")
    }
}

export default CheckOutPage;