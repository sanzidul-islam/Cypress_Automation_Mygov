

class LiberationWarBookCitizen
{


    // Citizen Login

    txtUserName = "#mobile"
    txtPassword = "#see-password"
    btnLogin = "button[type='submit']"

    //Service Overview

    btnService = ":nth-child(4) > .bg-white > .row > .col-11 > h6"
    btnApplyNow = ".apply-online"

    //Application Form

    txtLibraryName = "input[name='text-f6280fa7d06be']"
    txtLibraryEmail = "input[name='text-0a2180a8d5638']"
    txtLibraryAddress = "input[name='text-3776cf8d22d5f']"
    txtPosition = "input[name='text-ab32e54afd45e']"

    // Attachment
    btnAttachment1 = "#attachments > :nth-child(1) > .fas"
    btnAttachment2 = ":nth-child(2) > .fas"

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


    setLibraryName(LibraryName)
    {
        cy.get(this.txtLibraryName).type(LibraryName, {force: true})
    }

    setLibraryEmail(LibraryEmail)
    {
        cy.get(this.txtLibraryEmail).type(LibraryEmail, {force: true})
    }

    setLibraryAddress(LibraryAddress)
    {
        cy.get(this.txtLibraryAddress).type(LibraryAddress, {force: true})
    }

    setPosition(Position)
    {
        cy.get(this.txtPosition).type(Position, {force: true})
    }

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

export default LiberationWarBookCitizen;