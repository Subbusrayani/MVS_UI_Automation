class ProductDetailsPage {

  getProductName() {
    return cy.get('h2[data-at="product--details--product-name"]');
  }

  verifyProductDetails() {

    cy.fixture('testData').then(function (data) {
      this.data = data

      // Test data - order details testdata
      const caloriename = this.data.calorie
      const servecount = this.data.servecount
      const price = this.data.price
      cy.get('p[data-at="product--details--calorie"]').should('have.text', caloriename); // calorie
      cy.get('p[data-at="product--details--serveSize"]').should('have.text', servecount); // serve count
      cy.get('strong[data-at="product--details--price"]').should('have.text', price);   // price
    })


  }
  getProductCalorie() {

    const caloriename = cy.get('p[data-at="product--details--calorie"]');

  }

  getProductServeCount() {
    const servecount = cy.get('p[data-at="product--details--serveSize"]');
  }

  getProductPrice() {
    const price = cy.get('p[data-at="product--details--price"]');
  }

  getVarietyDropDownIcon() {
    const icon = cy.get('div[class="Select__Wrapper-mc5yz9-5 IUOBA"]');
    icon.click()
  }

  getVarietyNameInDropdown(varietyname) {
    cy.get('select').select(varietyname)
  }

  getAddProductCountIcon() {
    const addcounticon = cy.get('svg[name="add"]');
    addcounticon.click()
  }
  getReduceProductCountIcon() {
    const reducecounticon = cy.get('svg[name="remove"]');
  }

  getAddToCartButton() {
    const cartbutton = cy.contains('Add to Cart');
    cartbutton.click()
  }
  getSelectVarietyErrorMessage() {
    const err = cy.get('div[class="sc-bdVaJa sc-htpNat Text-sc-1xruaqj-0 Select__StyledError-mc5yz9-2 eOiZem"]');
  }

  getAddedToCartBox() {
    const cartbox = cy.get('div[role="dialog"] h5');
  }
  getGoToCartButton() {
    const gotoCartButton = cy.contains('Go to Cart');
    gotoCartButton.click()
  }

  getKeepShoppingButton() {
    const keepShoppingButton = cy.contains('Keep shopping');
  }
}

export default ProductDetailsPage;

