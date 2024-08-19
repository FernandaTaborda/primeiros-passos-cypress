import loginPage from '../pages/loginPage.js'
import menuPage from '../pages/menuPage.js'
import userData from '../fixtures/userData.json'

const login = new loginPage
const page = new menuPage

describe('LoginOrange HRM Tests', () => {
  it('Failed login -- Login com falha', () => {
    page.acessLogin()
    login.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    login.checkAcessInvalid()
  })
  it('Sucessfull login -- Login com sucesso', () => {
    page.acessLogin()
    login.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
  })
})