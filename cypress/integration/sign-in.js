describe('Sign In Page', () => {
  beforeEach(() => {
    cy.fixture('./org-data.json').then((allOrgs) => {
      cy.intercept('GET', 'https://do-goodr-be.herokuapp.com/api/v1/organizations/2/events', {
        statusCode: 200,
        body: allOrgs
      })
      cy.visit('http://localhost:5000/signin');
    })
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
      .select(2)
      .wait(2000)
    cy.get('[data-cy=events-container]')
  })

  it('should show the delete button on events that the org has created', () => {
    cy.get('[data-cy=choose-organization]')
      .select(2)
      .wait(2000)
      .get('[data-cy=events-container]')
      .get('[data-cy=opportunity]')
      .get('[data-cy=delete-event-button]')
  })

  it.only('should remove an event from the org listing once the delete button has been clicked', () => {
    // cy.intercept('DELETE', 'https://do-goodr-be.herokuapp.com/api/v1/events/1', {
    //     statusCode: 200,
    //   })
    cy.get('[data-cy=choose-organization]')
      .select(2)
      .wait(2000)
    cy.get(':nth-child(3) > [data-cy="delete-event-button"]').click()
    cy.get('.events-container > ')
      .should('have.length', 2)
  })

})