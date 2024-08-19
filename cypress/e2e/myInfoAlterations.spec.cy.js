import userData from '../fixtures/userData.json'
import loginPage from '../pages/loginPage.js'
import myInfoPage from '../pages/myInfoPage.js'
import menuPage from '../pages/menuPage.js'

  const login = new loginPage
  const myInfo = new myInfoPage
  const page = new menuPage

 it('My info - alteration', () => {
  //login
  page.acessLogin()
  login.loginWithUser(userData.userSuccess.username, userData.userSuccess.password )
  //Changing data in myInfo -- Alteração de dados em myInfo
  page.acessPages(page.selectorList().acessMyInfo)
  myInfo.loadPersonalDetails(userData.personalDetails)
  })