describe('Orange HRM Tests', () => {
  //Selector list -- Lista de seletores
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredantialAlert: ".oxd-alert"
  }

  //Test data -- Dados de teste
  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: {
      username: 'administrador',
      password: 'admin123'
    }
  }

  //Sucess login test -- Teste de Login com sucesso
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  //Fail login test -- Teste de Login com falha
  it('Login - fail', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredantialAlert)
  })
})