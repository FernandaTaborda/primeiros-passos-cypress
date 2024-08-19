class menuPage {
    selectorList (){
        const menu = {
            acessAdmin: ":nth-child(1) > .oxd-main-menu-item",
            acessPim: ":nth-child(2) > .oxd-main-menu-item",
            acessLeave: ":nth-child(3) > .oxd-main-menu-item",
            acessTime: ":nth-child(4) > .oxd-main-menu-item",
            acessRecruitment: ":nth-child(5) > .oxd-main-menu-item",
            acessMyInfo: ":nth-child(6) > .oxd-main-menu-item",
            acessPerformance: ":nth-child(7) > .oxd-main-menu-item",
            acessDashboard: ":nth-child(8) > .oxd-main-menu-item",
            acessDirectory: ":nth-child(9) > .oxd-main-menu-item",
            acessMaintenance: ":nth-child(10) > .oxd-main-menu-item",
            acessClaim: ":nth-child(11) > .oxd-main-menu-item",
            acessBuzz: ":nth-child(12) > .oxd-main-menu-item",
            
        }
        return menu
    }
    acessLogin() {
        cy.visit('/auth/login')

    }
    acessPages(page){
        cy.get(page).click()
    }

    
}

export default menuPage