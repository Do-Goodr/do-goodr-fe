describe('org sign in page', () => {
  beforeEach(() => {
    cy.fixture('./event-data.json').then((allEvents) => {
      cy.intercept('GET', 'https://do-goodr-be.herokuapp.com/api/v1/events', {
        statusCode: 200,
        body: allEvents
      })
      cy.visit('http://localhost:5000');
      cy.get('[href="/signin"]').click()
    })
    cy.fixture('./org-data.json').then((allOrgs) => {
      cy.intercept('GET', 'https://do-goodr-be.herokuapp.com/api/v1/organizations', {
        statusCode: 200,
        body: allOrgs
      })
      cy.visit('http://localhost:5000');
      cy.get('[href="/signin"]').click()
    })
  })

  it('should contain a header', () => {
    cy.get('header')
      .contains('Do Goodr');
  })

  it('should allow a user to choose an organization', () => {
    cy.get('[data-cy="choose-organization"]')
      .should('exist')
    cy.get('[data-cy="choose-organization"]')
      .select(2)
  })

  it('should allow a user to create an organization', () => {
    cy.get('.add-org-btn')
      .should('exist')
  })
})

