describe('Event Submission Form DOM',() => {
    beforeEach(() => {
        cy.visit('http://localhost:5000/newevent');
    })

    it('should be able to take a user to a new org sing up form and allow the user to create a new organization in the application', () => {
        cy.get('[data-cy=signin-nav-link]').click()
        cy.get('[data-cy=add-org-btn]').click()
        cy.get('[data-cy=org-name-input]').type('Pawnee Parks & Rec')
        cy.get('[data-cy=org-address-input]').type('321 Government Ave, Pawnee IN 47801')
        cy.get('[data-cy=org-phone-input]').type('9305555555')
        cy.get('[data-cy=org-email-input]').type('pawneeparksnrec@fakeemail.com')
        cy.get('[data-cy=create-org-signup-btn]').click()
        cy.get('[data-cy=successful-signup]').contains('SUCCESS! You are signed up!')
    })
})