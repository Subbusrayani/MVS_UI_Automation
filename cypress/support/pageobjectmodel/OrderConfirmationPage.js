/// <reference types="Cypress" />


class OrderConfirmationPage {

    checkOrderConfirmation() {
        cy.get('h1').each(($e1, index, $list) => {

            if ($e1.text().includes("Confirmed")) {

                const actualText = $e1.text()
                expect(actualText.includes("Confirmed")).to.be.true
                cy.log("Order Confirmed -" + actualText)

            }

        })
    }


    verifyEmailId(Email) {
        cy.get('p strong').each(($e1, index, $list) => {

            if ($e1.text().includes(Email)) {

                const actualText = $e1.text()
                expect(actualText.includes(Email)).to.be.true
                cy.log("Order Confirmed -" + actualText)

            }
        })
    }


}
export default OrderConfirmationPage