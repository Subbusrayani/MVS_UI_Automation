class SelectStorePage {

    getStoreSearchTextBox() {
        const locationSearch = cy.get('input.autocomplete_locationSearchInput');
        locationSearch.type("Philadelphia, PA, USA");
    }

    getStoreSearchIcon() {
        const search = cy.get('svg[name="search"]');
        search.click();
    }

    selectAutoSuggest() {
        cy.wait(4000)
        cy.get(':nth-child(1) > span > .sc-bwzfXH > .fsBpHN > .htpAVW').each(($e1, index, $list) => {

            if ($e1.text().includes("Philadelphia, PA, USA")) {
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