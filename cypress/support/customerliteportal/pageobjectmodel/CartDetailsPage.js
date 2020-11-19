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
            //cy.get('div[data-at="cart--item"] strong:nth-child(2)').should('have.text', price);   // price
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

    getDetailsButton() {
        cy.contains('Details').click()
        cy.wait(3000)
    }

    getCartItemDetails() {
        cy.get('div[data-at="cart--item"] td:nth-child(2)').each(($el, index, $list) => {

            $el.text().then((text1) => {
                cy.log(text1)
            })
        })

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

    getEditButton() {
        cy.get('button[data-at="cart--location--pickupDetails-editBotton"]').click()
    }

    getChangeLocationbutton() {
        cy.get('button[name="Change Location"]').click()
    }

    getSelectThisStoreButton() {
        cy.contains('Select this Store').click()
    }

    clickEditPickupDetailButton() {
        cy.get('button[name="Edit"]').click()
    }

    verifyStoreChange() {
        cy.url().should('contains', 'cart-detail');
        cy.fixture('testData').then(function (data) {
            this.data = data
            const changeStoreName = this.data.changeStoreName
            cy.contains(changeStoreName);
        })

    }


    verifyDataAndTimeChange() {
        cy.url().should('contains', 'cart-detail');
        cy.fixture('testData').then(function (data) {
            this.data = data
            const changeDate = this.data.changeDate.substr(9)
            const month = this.data.changeDate.substr(0, 3)
            const changeTime = this.data.changeTime
            cy.contains(changeDate);
            cy.contains(month)
            cy.contains(changeTime);
        })

    }

    verifyPromoCodeFeature(code) {

        //checking price details before applying promo code
        cy.contains('Order Total').siblings('strong').invoke('text').then((total) => {

            //Order total before promo code apply
            var ordertotalbeforepromo = parseInt(total.replace("$", ""))

            cy.log(ordertotalbeforepromo)
            cy.info("2. ORDER TOTAL BEFORE APPLYING PROMO CODE: " + ordertotalbeforepromo)

            //click on 'Have a promo code' button
            cy.contains('Have a promo code').click()
            cy.get('#promoCode').type(code)
            cy.contains('Apply').click()
            cy.wait(2000)

            cy.contains('Promotions').siblings('strong').invoke('text').then((totalpromotion) => {

                // extract promotion price and store in variable
                var promotionstotal = parseInt(totalpromotion.replace("-$", ""))
                cy.log(promotionstotal)
                cy.info("3. TOTAL PROMOTIONS APPLIED: " + promotionstotal)

                // subtract order total before promo code applied - promotional value and store in variable
                var ordertotalexpected = ordertotalbeforepromo - promotionstotal
                cy.log(ordertotalexpected)
                cy.info("4. ORDER TOTAL EXPECTED AFTER APPLYING PROMO CODE: " + ordertotalexpected)

                // extract  new order total order value and store in variable
                cy.contains('Order Total').siblings('strong').invoke('text').then((totalafterpromo) => {

                    var ordertotalafterpromoapplied = parseInt(totalafterpromo.replace("$", ""))
                    cy.log(ordertotalafterpromoapplied)
                    cy.info("5. ORDER TOTAL ACTUAL AFTER APPLYING PROMO CODE: " + ordertotalafterpromoapplied)

                    // check actual and expected value
                    expect(ordertotalexpected).to.equal(ordertotalafterpromoapplied)

                    //click on remove promo code icon
                    cy.get("path[fill='currentColor']").click()
                    cy.wait(5000)

                    cy.contains('Order Total').siblings('strong').invoke('text').then((totalafterremovepromo) => {
                        var ordertotalafterpromoremoved = parseInt(totalafterremovepromo.replace("$", ""))
                        cy.log(ordertotalafterpromoremoved)

                        // check actual and expected value after removing promo code
                        cy.info("6.ORDER TOTAL AFTER PROMO CODE REMOVED: " + ordertotalafterpromoremoved)
                        expect(ordertotalbeforepromo).to.equal(ordertotalafterpromoremoved)

                        //Override promo code and check functionality

                        //click on 'Have a promo code' button
                        cy.info("7. OVERRIDE PROMO CODE")
                        //cy.contains('Have a promo code').click()
                        cy.get('#promoCode').type(code)
                        cy.contains('Apply').click()
                        cy.wait(2000)

                        cy.contains('Promotions').siblings('strong').invoke('text').then((totalpromotionafterpromooverride) => {
                            // extract promotion price after promo override and store in variable
                            var promotionstotalafterpromooverride = parseInt(totalpromotionafterpromooverride.replace("-$", ""))
                            cy.log(promotionstotalafterpromooverride)
                            cy.info("8. TOTAL PROMOTIONS APPLIED AFTER PROMO OVERRIDE: " + promotionstotalafterpromooverride)

                            // subtract order total before promo code override - promotional value after promo override and store in variable
                            var ordertotalexpectedafterpromooverride = ordertotalafterpromoremoved - promotionstotalafterpromooverride
                            cy.log(ordertotalexpectedafterpromooverride)
                            cy.info("9. ORDER TOTAL EXPECTED AFTER PROMO CODE OVERRIDE: " + ordertotalexpectedafterpromooverride)
                            // extract  new order total after promo override and store in variable
                            cy.contains('Order Total').siblings('strong').invoke('text').then((totalafteroverridepromo) => {

                                var ordertotalafterpromooverride = parseInt(totalafteroverridepromo.replace("$", ""))
                                cy.log(ordertotalafterpromooverride)
                                cy.info("10. ORDER TOTAL ACTUAL AFTER PROMO CODE OVERRIDE: " + ordertotalafterpromooverride)

                                // check actual and expected value
                                expect(ordertotalexpectedafterpromooverride).to.equal(ordertotalafterpromooverride)

                            })
                        })
                    })
                })
            })
        })

    }

}


export default CartDetailsPage;