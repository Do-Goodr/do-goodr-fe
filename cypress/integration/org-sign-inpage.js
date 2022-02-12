describe('org sign in page',() => {
    beforeEach(() => {
        cy.visit('http://localhost:5000/');

        cy.intercept('GET', `https://do-goodr-be.herokuapp.com/api/v1/events?`, {
            fixture: 'event-data.json'
        })
        cy.get('[href="/signin"]').click()
    })

    it('should contain a header', () => {
        cy.get('header')
        .contains('Do Goodr');
    })

    it('should allow a user to choose an organization', () => {
        cy.get('.App > :nth-child(1) > :nth-child(1)')
            .should('exist')
        cy.get('.SignIn > select')
            .should('exist')
            .should('have.length', 1)
    })

    it('should allow a user to create an organization', () => {
        cy.get('.add-org-btn')
            .should('exist')
    })
})

