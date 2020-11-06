class SelectStorePage {

    getStoreSearchTextBox(location) {
        const locationSearch = cy.get('input.autocomplete_locationSearchInput');
        locationSearch.type(location);
    }

    getStoreSearchIcon() {
        const search = cy.get('svg[name="search"]');
        search.click();
    }

    selectAutoSuggest(location) {
        cy.wait(4000)
        cy.get(':nth-child(1) > span > .sc-bwzfXH > .fsBpHN > .htpAVW').each(($e1, index, $list) => {

            if ($e1.text().includes(location)) {
                $e1.click()

            }
            else {
                cy.log("not found")
            }
        })

    }

    getFindStoresButton() {
        const findStores = cy.get('button[name="Start Catering"]')

        findStores.click();
    }


    getStoreSearchWindowLabel() {
        const closeStores = cy.contains('find the closest Wawa to you');
    }

    getStoreSearchIcon() {
        const serachIcon = cy.get(':nth-child(1) > span > .sc-bwzfXH > .fsBpHN > .htpAVW');
    }

}

export default SelectStorePage;