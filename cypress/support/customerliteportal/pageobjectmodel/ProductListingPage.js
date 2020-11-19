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


    getHoagiesProduct_link() {
        const prodname = cy.get('a[href="#hoagies"]')
        prodname.click()
        const hoagieproduct = cy.get('div[name="Hoagie and Soup/Side Bundle"]').click()
        cy.log(hoagieproduct)
        cy.wait(4000)
    }

    getHoagiesMenuText() {

        const hoagiemenulabelexpectedvalue = "Hoagie and Soup/Side Bundle"
        const hoagiecaloriedetailsexpectedvalue = "360-430 cals / serving"

        cy.contains('Hoagie and Soup/Side Bundle').should('have.text', hoagiemenulabelexpectedvalue);
        cy.get('p[class="sc-htoDjs sc-iwsKbI Text-sc-1xruaqj-0 bwBKPe"]').should('have.text', hoagiecaloriedetailsexpectedvalue);

        cy.log(hoagiemenulabelexpectedvalue)
        cy.log(hoagiecaloriedetailsexpectedvalue)
        cy.info("2. VERIFY THE HOAGIE MENU LABEL TEXT - " + hoagiemenulabelexpectedvalue)
        cy.info("3. VERIFY THE HOAGIE CALORIE TEXT - " + hoagiecaloriedetailsexpectedvalue)

    }

    getHoagiesbundle() {
        cy.contains('Our Most Popular-2').click()
    }

    getHoagiesVariety(hvariety, cheesetype) {
        const hoagiesvariety = cy.get('select[id="' + hvariety + '"]').select(cheesetype)
        cy.log("Selecting the variety-" + hoagiesvariety, +cheesetype)

    }

    getChickenNoodleSoup(side) {
        cy.contains('Chicken Noodle Soup').click()
        cy.contains('Chicken Noodle Soup').should('have.text', side);
    }

    getToppings(toppings) {
        cy.contains('Toppings and Spreads').parent().parent().parent().contains(toppings).parent().parent().find('button[name="add"]').click()
    }


    getHoagiesAddToCart() {
        cy.contains('Add to Cart').click()
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
        expect(ackAfterRemovingCartItem.includes("Your Cart is empty")).to.be.equal
        cy.log(ackAfterRemovingCartItem)
    }

    getEditButton() {
        cy.contains('Edit').click()
    }

    getAddbutton() {
        cy.get(svg[name = "add"]).click()
    }

    getUpdateItembutton() {
        cy.contains('Update item').click()
        cy.wait(4000)
        const cartitems = cy.get('div.sc - jzJRlG.sc - cSHVUG.iwbtDQ:nth - child(2)').text()
        cy.log(cartitems)
    }


}

export default ProductListingPage;
