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
        cy.get('div[class="autocomplete_dropdownContainer"] p').each(($e1, index, $list) => {

            if ($e1.text().includes(location)) {
                $e1.click()

            }

        })

    }

    verifyLocationNameinSearchTextBox(location) {
        cy.get("input[data-at='store--search--autocomplete-text']").should("have.value", location);
    }

    getFindStoresButton() {
        const findStores = cy.get('button[name="Start Catering"]')
        findStores.click();
        cy.url().should('contains', 'store-results');
    }


    getStoreSearchWindowLabel() {
        const closeStores = cy.contains('find the closest Wawa to you');
    }

    getStoreSearchIcon() {
        const serachIcon = cy.get(':nth-child(1) > span > .sc-bwzfXH > .fsBpHN > .htpAVW');
    }

    getVerifyInvalidlocationDetails() {
        const invalidstoremsg = "Looks like we haven't nested in your area yet."
        const invalidstoremsglabel = "In the meantime, browse our catering lite menu."

        cy.get('p[class="sc-htoDjs sc-iwsKbI Text-sc-1xruaqj-0 jaEeto"]').should('have.text', invalidstoremsg);
        cy.get('p[class="sc-htoDjs sc-iwsKbI Text-sc-1xruaqj-0 euuYhT"]').should('have.text', invalidstoremsglabel);
        cy.log(invalidstoremsg)
        cy.info("1. VERIFY THE INVALID STORE ERROR MESSAGE DETAILS - " + invalidstoremsg)
    }

}

export default SelectStorePage;