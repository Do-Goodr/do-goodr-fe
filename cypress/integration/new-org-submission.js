describe('Org Submission Form DOM', () => {
    beforeEach(() => {
        cy.fixture('./org-data.json').then((allOrgs) => {
            cy.intercept('GET', 'https://do-goodr-be.herokuapp.com/api/v1/organizations', {
                statusCode: 200,
                body: allOrgs
            })
            cy.visit('http://localhost:5000/neworganization');
        })
    })

    it('should be able to take a user to a new org sign up form and allow the user to create a new organization in the application', () => {
        cy.get('[data-cy=signin-nav-link]').click()
        cy.get('[data-cy=add-org-btn]').click()
        cy.get('[data-cy=org-name-input]').type('Big Brothers Big Sisters of Colorado')
        cy.get('[data-cy=org-address-input]').type('750 W Hampden Ave #450, Englewood CO 80110')
        cy.get('[data-cy=org-phone-input]').type('7775555555')
        cy.get('[data-cy=org-email-input]').type('bbbs@fakeemail.com')
    })
})