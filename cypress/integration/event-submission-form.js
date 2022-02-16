describe('Event Submission Form DOM', () => {
  beforeEach(() => {
    cy.fixture('./event-data.json').then((allEvents) => {
      cy.intercept('GET', 'https://do-goodr-be.herokuapp.com/api/v1/events', {
        statusCode: 200,
        body: allEvents
      })
      cy.visit('http://localhost:5000');
      cy.get('[data-cy=signin-nav-link]').click()
      cy.get('[data-cy=choose-organization]').select('ARC')
      cy.get('[data-cy=add-opp-btn]').click()
    })
  })

  it('should contain the h2: Create New Volunteering Event', () => {
    cy.get('h2')
      .contains('Create New Volunteering Event');
  })

  it('should have an input for selecting the date of an event', () => {
    cy.get('[data-cy=set-date]')
  })

  it('should have an input for selecting the start time of an event', () => {
    cy.get('[data-cy=set-start-time]')
  })

  it('should have an input for selecting the end time of an event', () => {
    cy.get('[data-cy=set-end-time]')
  })

  it('should have an input for selecting the category of an event', () => {
    cy.get('[data-cy=set-category]')
      .should('have.attr', 'placeholder', 'Choose Category')
  })

  it('should have 9 category options in the category drop down', () => {
    cy.get('[data-cy=set-category]')
      .get('#category option')
      .should('have.length', 9)

    cy.get('#category option').eq(0)
      .should('have.value', 'Animal Care')

    cy.get('#category option').eq(1)
      .should('have.value', 'Campaigning')

    cy.get('#category option').eq(2)
      .should('have.value', 'Community Development')

    cy.get('#category option').eq(3)
      .should('have.value', 'Food Service')

    cy.get('#category option').eq(4)
      .should('have.value', 'Grounds Cleanup')

    cy.get('#category option').eq(5)
      .should('have.value', 'Healthcare')

    cy.get('#category option').eq(6)
      .should('have.value', 'Nursing Home')

    cy.get('#category option').eq(7)
      .should('have.value', 'Youth Mentorship')

    cy.get('#category option').eq(8)
      .should('have.value', 'Other')
  })

  it('should have an input for selecting the amount of volunteers needed for an event', () => {
    cy.get('[data-cy=set-volunteer-num]')
  })

  it('should have an input for creating the description for an event', () => {
    cy.get('[data-cy=set-description]')
      .should('have.attr', 'placeholder', 'Give potential volunteers the detail they need for this event...')
  })

  it('should have a button for submitting an event', () => {
    cy.get('[data-cy=disabled-submit-button]')
  })

})

describe('Event Submission Form Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000');
    cy.get('[data-cy=signin-nav-link]').click()
    cy.get('[data-cy=choose-organization]').select('ARC')
    cy.get('[data-cy=add-opp-btn]').click()
  })

  it('should not allow the user to click the submit button if the input fields are not completed', () => {
    cy.get('[data-cy=disabled-submit-button]')
      .should('be.disabled')
  })

  it('should allow a user to update the date', () => {
    cy.get('[data-cy=set-date]')
      .type('2022-03-11')
      .should('have.value', '2022-03-11')
  })

  it('should allow a user to update the start time', () => {
    cy.get('[data-cy=set-start-time]')
      .type('10:45')
      .should('have.value', '10:45')
  })

  it('should allow a user to update the end time', () => {
    cy.get('[data-cy=set-end-time]')
      .type('13:30')
      .should('have.value', '13:30')
  })

  it('should allow a user to update the category', () => {
    cy.get('[data-cy=set-category]')
      .type('Healthcare')
      .should('have.value', 'Healthcare')
  })

  it('should allow a user to update the amount of volunteers needed', () => {
    cy.get('[data-cy=set-volunteer-num]')
      .type('4')
      .should('have.value', '4')
  })

  it('should allow a user to write a description', () => {
    cy.get('[data-cy=set-description]')
      .type('Community Blood Drive in New Orleans Uptown')
      .should('have.value', 'Community Blood Drive in New Orleans Uptown')
  })


  it('should allow the user to click the submission button after all input fields are changed', () => {
    cy.get('[data-cy=set-date]')
      .type('2022-03-11')
      .get('[data-cy=set-start-time]')
      .type('10:45')
      .get('[data-cy=set-end-time]')
      .type('13:30')
    cy.get('[data-cy="set-address"]')
      .type('123 Sesame Way, Denver CO 80202')
      .get('[data-cy=set-category]')
      .type('Healthcare')
      .get('[data-cy=set-volunteer-num]')
      .type('4')
      .get('[data-cy=set-description]')
      .type('Community Blood Drive in New Orleans Uptown')
      .get('[data-cy=enabled-submit-button]')
      .should('be.enabled')
  })

})