
import MedicalCertificateAttestation from "../PageObjects/MedicalCertificateAttestation"

describe('Application for Medical certificate attestation', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

    Cypress._.times(1, () => {

      it('Application Submission', () => {

        cy.visit('https://beta-idp.stage.mygov.bd/')
  
        cy.fixture('MedicalCertificateAttestation').then((data)=> {
  
          const lb=new MedicalCertificateAttestation();
          
         // lb.clickApplyNow()

          lb.setUserName()
          lb.setPassword(data.Password)
          lb.clickLogin()
          
          cy.visit('https://beta-idp.stage.mygov.bd/go-mygov')
          cy.wait(2000)
          lb.searchMedicalService(data.service)
          lb.SearchButton()
          cy.get('#socian_home_search_text_box').type('medical certificate');
          cy.get("div[id='SocianSearchResult'] div:nth-child(1) a:nth-child(1) h2:nth-child(1)").invoke('removeAttr', 'target').click({force: true});
          cy.get("body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > a:nth-child(1) > div:nth-child(2) > h6:nth-child(1)").click({force: true})
          cy.get("div:nth-child(22) a:nth-child(1) div:nth-child(2) h6:nth-child(1)").click({force: true})
          cy.get(".apply-online.service-agree-but.btn.btn-success.py-2.px-3.d-inline-block").click({force: true})
          cy.get('[name="per_address1"]').type('mymensingh',{force: true});
          cy.get('.same-address').click({force: true})
          cy.get('[name="pre_address1"]').type('trishal',{force: true});
          cy.get('#attachments > :nth-child(1) > .fas',{includeShadowDom:true}).selectFile("test1.pdf");
          cy.get('.text-md-end > .btn-primary').click({force: true})
          cy.wait(2000)
          cy.get('#previewApplicationModal > :nth-child(1) > :nth-child(1) > :nth-child(3) > .btn-primary').click({force: true})

  
  
        })
  
      })

    })
    

  })