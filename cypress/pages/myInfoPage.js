class myInfoPage {
    selectorList() {
        const selectors = {
            myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            employerIDField: ".oxd-form > :nth-child(3) > :nth-child(1) > :nth-child(1)",
            driveLicenseNumberField: ":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            licenseExpiryDateField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
            closeCalendar: ".--close",
            dropDownTables: "[class='oxd-select-text--after']",
            dateOfBirthField: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
            genderField: "[class='--gender-grouped-field']",
            saveButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button",
            confirmationButton: ".oxd-toast",
            closeToast: ".oxd-toast-close"
        }
        return selectors
    }
    loadPersonalDetails(personalDetails){
        cy.get(this.selectorList().firstNameField).clear().type(personalDetails.firstName)
        cy.get(this.selectorList().middleNameField).clear().type(personalDetails.middleName)
        cy.get(this.selectorList().lastNameField).clear().type(personalDetails.lastName)
        cy.get(this.selectorList().employerIDField).clear().type(personalDetails.employerID)
        cy.get(this.selectorList().driveLicenseNumberField).clear().type(personalDetails.driveLicenseNumber)
        cy.get(this.selectorList().licenseExpiryDateField).clear().type(personalDetails.licenseExpiryDate)
        cy.get(this.selectorList().closeCalendar).click()
        cy.get(this.selectorList().dropDownTables).eq(0).should('be.visible').click()
        cy.get('.oxd-select-dropdown').contains(personalDetails.nationality).click()
        cy.get(this.selectorList().dropDownTables).eq(1).should('be.visible').click()
        cy.get('.oxd-select-dropdown').contains(personalDetails.maritalSatatus).click()
        cy.get(this.selectorList().dateOfBirthField).clear().type(personalDetails.dateOfBirth)
        cy.get(this.selectorList().closeCalendar).click()
        cy.get(this.selectorList().genderField).contains(personalDetails.gender).click()
        cy.get(this.selectorList().saveButton).click()
        cy.get(this.selectorList().confirmationButton).should('be.visible')
        cy.get(this.selectorList().closeToast).click()
    }
}

export default myInfoPage
