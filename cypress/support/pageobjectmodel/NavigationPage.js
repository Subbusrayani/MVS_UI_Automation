class NavigationPage {

    visit(url) {
    //   cy.visit("https://dev01.ip.wawa.com/commerce/ui/");
          cy.visit(url);
    }

    getStartCateringOrder() {
        const startOrder = cy.contains('Start a Catering Order')
        startOrder.click()
    }

    getStoreSearchTextBox(location) {
        const locationSearch = cy.get('input.autocomplete_locationSearchInput');
        locationSearch.type(location);
    }

    getStoreSearchIcon() {
        const search = cy.get('svg[name="search"]');
        search.click();
    }

    getFindStoresButton() {
        const findStores = cy.contains('Find Stores');
        findStores.click();

    }

    getStoreSearchWindowLabel() {
        const closeStores = cy.contains('find the closest Wawa to you');
    }

    getStoreSearchIcon() {
        const serachIcon = cy.get(':nth-child(1) > span > .sc-bwzfXH > .fsBpHN > .htpAVW');
    }

}

export default NavigationPage