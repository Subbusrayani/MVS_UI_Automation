class ProductListingPage {


    getDrinksMenu() {
        const drinkmenu = cy.contains('Drinks')
    }

    getHoagiesMenu() {
        const hoagiesmenu = cy.contains('Hoagies')
    }


    get_Sides_Sweets_Snacks_Menu() {
        const snacksmenu = cy.contains('Sides,Sweets & Snacks')
    }

    getBreakfastMenu() {
        const breakfastmenu = cy.contains('Breakfast')
    }

    getBeverageProduct_Name() {
        const prodname = cy.get('#beverages h5')
    }

    selectProductName(prname) {
        const productname = cy.get('div[name="' + prname + '"]')
        productname.click()
        cy.log("Selecting the product-" + prname)
    }

    getBeverageProduct_Calorie() {
        const calorie = cy.get('#beverages p[data-at="product--listing--calorie-text"]')
    }

    getBeverageProduct_Serve_Count() {
        const servecount = cy.get('#beverages p[data-at="product--listing--serves-text"]')
    }

    getBeverageProduct_PriceRange() {
        const price = cy.get('#beverages strong')
    }


    getHoagiesProduct_Name() {
        const prodname = cy.get('#hoagies h5')
    }

    getHoagiesProduct_Calorie() {
        const calorie = cy.get('#hoagies p[data-at="product--listing--calorie-text"]')
    }

    getHoagiesProduct_Serve_Count() {
        const servecount = cy.get('#hoagies p[data-at="product--listing--serves-text"]')
    }

    getHoagiesProduct_PriceRange() {
        const price = cy.get('#hoagies strong')
    }


    getSnacks_Name() {
        const snacksname = cy.get('#snacks h5')
    }

    getSnacks_Calorie() {
        const calorie = cy.get('#snacks p[data-at="product--listing--calorie-text"]')
    }

    getSnacks_Serve_Count() {
        const servecount = cy.get('#snacks p[data-at="product--listing--serves-text"]')
    }

    getSnacks_PriceRange() {
        const price = cy.get('#snacks strong')
    }


    getBreakfastItem_Name() {
        const name = cy.get('#breakfast h5')
    }

    getBreakfastItem_Calorie() {
        const calorie = cy.get('#breakfast p[data-at="product--listing--calorie-text"]')
    }

    getBreakfastItem_Serve_Count() {
        const servecount = cy.get('#breakfast p[data-at="product--listing--serves-text"]')
    }

    getBreakfastItem_PriceRange() {
        const price = cy.get('#breakfast strong')
    }


    selectProductQuantityCheckout(updateitemquantity) {
        const updatequantity = cy.get('select#mini-select').select(updateitemquantity)
        cy.log("Updated the product quantity to", updateitemquantity)
    }

    getRemoveItemFromCart() {
        cy.contains('Remove').click()
        cy.contains('Yes, remove').click()
    }

    getAckAfterRemovingItem() {
        const ackAfterRemovingCartItem = cy.contains('Your Cart is empty').text()
        expect(ackAfterRemovingCartItem.includes("Your Cart is empty")).to.be.true
        cy.log(ackAfterRemovingCartItem)
    }



}

export default ProductListingPage;
