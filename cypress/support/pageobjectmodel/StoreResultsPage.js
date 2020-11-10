class StoreResultsPage {


    getChooseAStoreLabel() {
        const storelabel = cy.contains('Choose a Store')
    }

    getSelectStoreButton(store) {
        const storebutton = cy.contains(store).siblings('button')
        storebutton.click()
    }

    getStoreFirstLineAddressLabel() {
        const addr = cy.get('h5.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.hyjFo')
    }

    getStoreDistanceLabel() {
        const dist = cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.jzKbzX:nth-child(2)')
    }

    getStoreFullAddressLabel() {
        const addr = cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.ibAtVq:nth-child(3)')
    }

    getOrderingOptionsLabel() {
        const label = cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.gqZeSJ:nth-child(1)')
    }

    getStoreTypeOnline() {
        const type = cy.get('svg[name="online"]')
    }

    getStoreTypeInStore() {
        const type = cy.get('svg[name="store"]')
    }

    getShowingResultsLabel() {
        const label = cy.contains('Showing results for')
    }

}

export default StoreResultsPage;
