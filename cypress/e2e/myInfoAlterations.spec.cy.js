import userData from '../fixtures/userData.json'

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    employerIDField: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    driveLicenseNumberField: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    licenseExpiryDateField: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
    closeCalendar: ".--close",
    dropDownTables: "[class='oxd-select-text--after']",
    dateOfBirth: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
    genderField: "[class='--gender-grouped-field']",
    saveButton: ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
  }

 it('My info - alteration', () => {
    //login
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.myInfoButton).click()
    //Changing data in myInfo -- Alteração de dados em myInfo
    cy.get(selectorsList.firstNameField).clear().type(userData.personalDetails.firstName)
    cy.get(selectorsList.middleNameField).clear().type(userData.personalDetails.middleName)
    cy.get(selectorsList.lastNameField).clear().type(userData.personalDetails.lastName)
    cy.get(selectorsList.employerIDField).clear().type(userData.personalDetails.employerID)
    cy.get(selectorsList.driveLicenseNumberField).clear().type(userData.personalDetails.driveLicenseNumber)
    cy.get(selectorsList.licenseExpiryDateField).clear().type(userData.personalDetails.licenseExpiryDate)  
    cy.get(selectorsList.closeCalendar).click()

    cy.get(selectorsList.dropDownTables).eq(0).should('be.visible').click()
    cy.get('.oxd-select-dropdown').contains(userData.personalDetails.nationality).click()

    cy.get(selectorsList.dropDownTables).eq(1).click()
    cy.get('.oxd-select-dropdown').contains(userData.personalDetails.maritalSatatus).click()

    cy.get(selectorsList.dateOfBirth).clear().type(userData.personalDetails.dateOfBirth)
    cy.get(selectorsList.closeCalendar).click()

    cy.get(selectorsList.genderField).contains(userData.personalDetails.gender).click()

    //cy.get(selectorsList.saveButton).click()
  })