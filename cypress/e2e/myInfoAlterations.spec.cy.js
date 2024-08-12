import userData from '../fixtures/userData.json'

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    employerID: ":nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    driveLicenseNumber: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
    licenseExpiryDate: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input",
  }
 //Data alteration in my info -- Alteração de dados em My info
 it('My info - alteration', () => {
    //login
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.myInfoButton).click()
    //Data alteration in myInfo -- Alteração de dados em myInfo
    cy.get(selectorsList.firstNameField).clear().type(userData.personalDetails.firstName)
    cy.get(selectorsList.middleNameField).clear().type(userData.personalDetails.middleName)
    cy.get(selectorsList.lastNameField).clear().type(userData.personalDetails.lastName)
    cy.get(selectorsList.employerID).clear().type(userData.personalDetails.employerID)
    cy.get(selectorsList.driveLicenseNumber).clear().type(userData.personalDetails.driveLicenseNumber)
    cy.get(selectorsList.licenseExpiryDate).clear().type(userData.personalDetails.licenseExpiryDate)  
  })