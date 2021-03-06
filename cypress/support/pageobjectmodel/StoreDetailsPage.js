class StoreDetailsPage {
    getChangeStoreChevronLeftLink() {
        const link = cy.get('svg[name="chevron-left"]')
    }

    getStoreName() {
        const name = cy.get('h2[class="sc-bdVaJa sc-htpNat Text-sc-1xruaqj-0 gmCKON"]')
    }

    getStoreDistance() {
        const dist = cy.get('h2[class="sc-bdVaJa sc-htpNat Text-sc-1xruaqj-0 ETWol"]')
    }
    getStoreFullAddressLabel() {
        const addr = cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.kGByny')
    }

    getStoreTelephoneNumber() {
        const no = cy.get('p.sc-bdVaJa.sc-htpNat.Text-sc-1xruaqj-0.fpASgs')
    }

    getCateringHours() {
        const hrs = cy.get('div.sc-bdVaJa.iHZvIS')
    }

    getStoreHours() {
        const storehours = cy.get('div.sc-bdVaJa.DYHzM')
    }
    getStoreTypeOnlineOption() {
        const option = cy.get('svg[name="online"]')
    }

    getStoreTypeInStoreOption() {
        const option = cy.get('svg[name="store"]')
    }

    getDatePickerIcon() {
        const icon = cy.get('input[label="Date"]')
        icon.click()
    }

    getTimePickerIcon() {
        const icon = cy.get('div[class="Select__Root-mc5yz9-4 lnNXZL"] div[class="Select__IconBox-mc5yz9-0 bOvjaH"]')
        icon.click()
    }

    getDate(date) {
        const dategiven = cy.get('abbr[aria-label="' + date + '"]')
        dategiven.click()
    }


    getTime(time) {
        cy.get('select').select(time)
        //  const timegiven = cy.get('option[value=' + time + '')
        //timegiven.click()
    }

    getStartOrderButton() {
        const startOrderbutton = cy.contains('Start Order')
        startOrderbutton.click()
        cy.url().should('contains', 'product-listing');
    }

    getSelectStoreButtonErrorMessage() {
        cy.contains('Find Stores').click()
        const storebutton = cy.get('div.error-label')
        storebutton.get('div.error-label').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("This field is required")).to.be.true
            cy.log(actualText)
        })
    }

    getDateFieldErrorMessage() {
        cy.contains('Start Order').click()
        const datePicker = cy.contains('This field is required')
        datePicker.contains('This field is required').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("This field is required")).to.be.true
            cy.log(actualText)
        })
    }

    //change store




}

export default StoreDetailsPage;