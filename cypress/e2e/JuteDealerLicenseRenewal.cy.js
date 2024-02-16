
import JuteDealerLicenseRenewalCitizen from "../PageObjects/JuteDealerLicenseRenewalCitizenPage";

describe('Application for Jute Dealer License Renewal', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

    Cypress._.times(5, () => {

      it('Application Submission', () => {

        cy.visit('https://beta-idp.stage.mygov.bd/')
  
        cy.fixture('JuteDealerLicenseRenewal').then((data)=> {
  
          const lb=new JuteDealerLicenseRenewalCitizen();
          
          lb.setUserName(data.UserName)
          lb.setPassword(data.Password)
          lb.clickLogin()
          cy.wait(2000)
          cy.visit('https://beta-idp.stage.mygov.bd/go-mygov')
          
  
          cy.wait(2000)
          lb.clickService()
          lb.clickApplyNow()
  
          cy.wait(2000)
          lb.setPassport(data.Passport)
          lb.setTIN(data.TIN)
          //lb.setAddress(data.Address)
  
          lb.clickPreview()
          lb.clickSubmit()
          lb.verifySubmit()
  
  
        })
  
      })

    })
    

  })