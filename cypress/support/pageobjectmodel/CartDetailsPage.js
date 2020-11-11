// Author name - Vinoth kumar S
/// <reference types="Cypress" />


class CartDetailsPage {
    getProductName() {
        return cy.get('div[data-at="cart--item"] strong:nth-child(1)');
    }

    getProductCalorie() {
        const calorie = cy.get('div[data-at="cart--item"] p:nth-child(1)');
    }

    getProductVarietyName() {
        const name = cy.get('div[class="sc-bdVaJa sc-bwzfXH CartItem__BodyContent-of6uop-2 fWuoYd"] p:nth-child(3)');
    }

    getQuantityValue() {
        const value = cy.get('div[class="sc-bdVaJa sc-bwzfXH CartItem__BodyContent-of6uop-2 fWuoYd"] p:nth-child(3)');
    }

    getProductPrice() {
        const price = cy.get('p[data-at="product--details--price"]');
    }


    verifyProductDetails() {

        cy.fixture('testData').then(function (data) {
            this.data = data

            // Test data - order details testdata

            const location = this.data.location
            const date = this.data.date
            const time = this.data.time
            const varietyname = this.data.varietyname
            const storename = this.data.storename
            const calorie = this.data.calorie
            const servecount = this.data.servecount
            const price = this.data.price
            cy.contains('Your Order').should('have.text', "Your Order")  
            cy.get('[data-at="cart--location--pickupDetails-heading"]').should('have.text', 'Pickup Details'); 
            cy.get('[name="Edit"]').should('be.visible');  //Edit pickup details
            //cy.contains(location).should('have.text', location); //location name
            cy.contains(storename); //store name
         //   cy.get('div[data-at="cart--item"] p:nth-child(2)').should('contains', servecount); // serve count
            cy.get('div[data-at="cart--item"] strong:nth-child(2)').should('have.text', price);   // price
            cy.get('div[data-at="cart--item"] p:nth-child(3)').should('have.text', varietyname); //variety name
            cy.get('p[data-at="cart--location--pickupDetails--time-value"]').should('have.text', time); // time
        })


    }
    getVarietyDropDownIcon() {
        const icon = cy.get('div[class="Select__IconBox-mc5yz9-0 bOvjaH"]');
    }

    getVarietyNameInDropdown() {
        const icon = cy.get('select option').eq(1);
    }

    getAddProductCountIcon() {
        const icon = cy.get('svg[name="add"]');
    }

    getReduceProductCountIcon() {
        const icon = cy.get('svg[name="remove"]');
    }

    getAddToCartButton() {
        const button = cy.contains('Add to Cart');
    }

    getSelectVarietyErrorMessage() {
        const errmsg = cy.get('div[class="sc-bdVaJa sc-htpNat Text-sc-1xruaqj-0 Select__StyledError-mc5yz9-2 eOiZem"]');
    }

    getAddedToCartBox() {
        const cartbox = cy.get('div[role="dialog"] h5');

    }

    getGoToCartButton() {
        const gotocartbutton = cy.contains('Go to Cart');
    }

    getKeepShoppingButton() {
        const keepshoppingbutton = cy.contains('Keep shopping');
    }

    getCheckoutButton() {
        const checkoutbutton = cy.contains('Checkout');
        checkoutbutton.click()
    }

    getTextCalorie() {
        cy.contains('Find Stores').click()
        const storebutton = cy.get('div.error-label')
        storebutton.get('div.error-label').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("This field is required")).to.be.true
            cy.log(actualText)
        })
    }
}


export default CartDetailsPage;