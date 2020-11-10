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