class EditPickupDetailsPage {

    clickChangeLocationButton() {
      cy.contains('Change Location').click();
    }

    selectDate(date) {
        const icon = cy.get('input[label="Date"]')
        icon.click()
        const dategiven = cy.get('abbr[aria-label="' + date + '"]')
       // const dategiven = cy.get('button[class="react-calendar__tile react-calendar__tile--now react-calendar__tile--active react-calendar__tile--rangeStart react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds react-calendar__month-view__days__day"]').next().next().next()
        dategiven.click()
    }

    selectTime(time) {
        cy.get('select[data-at="cart--locationDetails--modal--time-selector"]').select(time)
    }
    
    clickSaveChangesButton()
    {
        cy.contains('Save Changes').click()
    }
}
export default EditPickupDetailsPage;