

class JuteDealerLicenseRenewalCitizen
{


    // Citizen Login

    txtUserName = "#mobile"
    txtPassword = "#see-password"
    btnLogin = "button[type='submit']"

    //Service Overview

    btnService = "div:nth-child(5) a:nth-child(1) div:nth-child(1) div:nth-child(2) h6:nth-child(1)"
    btnApplyNow = ".apply-online"

    //Application Form

    txtPassport = "input[name='passport']"
    txtTIN = "input[name='tin']"
    txtAddress = "textarea[name='textarea-0cb532941f25d']"
  
    // Submissiion
    btnPreview = ".text-md-end > .btn-primary"
    btnSubmit = ".btn.btn-primary.apply-application-btn"
    
    //Success

    lblSuccess = "#give-feedback > .modal-dialog > .modal-content > .modal-header > .modal-title"


    setUserName(UserName)
    {
        cy.get(this.txtUserName).type(UserName)
    }

    setPassword(Password)
    {
        cy.get(this.txtPassword).type(Password)
    }

    clickLogin()
    {
        cy.get(this.btnLogin).click({force: true})
    }


    clickService()
    {
        cy.get(this.btnService).click({force: true})
    }

    clickApplyNow()
    {
        cy.get(this.btnApplyNow).click({force: true})
    }

    setPassport(Passport)
    {
        cy.get(this.txtPassport).type(Passport, {force: true})
    }

    setTIN(TIN)
    {
        cy.get(this.txtTIN).type(TIN, {force: true})
    }

    //setAddress(Address)
    //{
       // cy.get(this.txtAddress).type(Address, {force: true})
    //}

    clickPreview()
    {
        cy.get(this.btnPreview).click({force: true})
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click({force: true})
    }

    verifySubmit()
    {
        cy.get(this.lblSuccess).should("have.text", "আপনার সন্তুষ্টি")
    }
}

export default JuteDealerLicenseRenewalCitizen;