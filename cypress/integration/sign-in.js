describe('Sign In Page',() => {
    beforeEach(() => {
      cy.visit('http://localhost:5000/signin');
    })

    it('should contain the sign in form', () => {
      cy.get('[data-cy=organization-form]')
      .should('exist')
    })
  
    it('should contain the dropdown to choose an organization', () => {
      cy.get('[data-cy=choose-organization]')
      .should('exist')
    })

    it('should contain a button to sign up a new organization', () => {
      cy.get('[data-cy=add-org-btn]')
      .should('exist')
    })

    it('should not show any events until an organization has been selected', () => {
      cy.get('[data-cy=events-container]')
      .should('not.exist')
    })

    it('should show events when an organization has been selected', () => {
      cy.get('[data-cy=choose-organization]')
      .select(1)
      .wait(2000)
      .get('[data-cy=events-container]')
    })

    it('should show the delete button on events that the org has created', () => {
      cy.get('[data-cy=choose-organization]')
      .select(1)
      .wait(2000)
      .get('[data-cy=events-container]')
      .get('[data-cy=opportunity]')
      .get('[data-cy=delete-event-button]')
    })

})