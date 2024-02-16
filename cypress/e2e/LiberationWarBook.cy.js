
import LiberationWarBookCitizen from "../PageObjects/LiberationWarBookCitizenPage";

describe('Application for Liberation War Book', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

    Cypress._.times(10, () => {

      it('Application Submission', () => {

        cy.visit('https://beta-idp.stage.mygov.bd/')
  
        cy.fixture('LiberationWarBook').then((data)=> {
  
          const lb=new LiberationWarBookCitizen();
          
          lb.setUserName(data.UserName)
          lb.setPassword(data.Password)
          lb.clickLogin()
          cy.wait(2000)
          cy.visit('https://beta-idp.stage.mygov.bd/go-mygov')
          
  
          cy.wait(3000)
          lb.clickService()
          lb.clickApplyNow()
  
          cy.wait(2000)
          lb.setLibraryName(data.LibraryName)
          lb.setLibraryEmail(data.LibraryEmail)
          lb.setLibraryAddress(data.LibraryAddress)
          lb.setPosition(data.Position)
  
          lb.clickPreview()
          lb.clickSubmit()
          lb.verifySubmit()
  
        })
  
      })

    })

  })