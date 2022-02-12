describe('events page',() => {
    beforeEach(() => {
        cy.fixture('./event-data.json').then((allEvents) => {
            cy.intercept('GET', 'https://do-goodr-be.herokuapp.com/api/v1/search?zip=80202&distance=10', {
                statusCode: 201,
                body: allEvents
            })
            cy.visit('http://localhost:5000');
        })
    })

    it('should contain a header', () => {
        cy.get('header')
        .contains('Do Goodr');
    })

    it.only('should be able to take in a user zipcode and a mileage preference', () => {
    
        cy.get('[data-cy=zip-input]').type('80202')
        cy.get('[data-cy="mileage-input"]').eq(0).select('10')
        cy.get('[data-cy=show-events-btn]').click()        
        cy.get('[data-cy=events-container]')
            .should('have.length', 1)
    
        cy.get('[data-cy=opportunity]')
            .get('[data-cy=event-name]').contains('Blood Drive')
            .get('[data-cy=event-phone]').contains('555-555-5555')
            .get('[data-cy=event-category]').contains('Animal Care')
            .get('[data-cy=event-date]').contains('12/31/2022')
            .get('[data-cy=event-time]').contains('01:00 PM - 02:00 PM')
            .get('[data-cy=event-volunteers]').contains(1)
            .get('[data-cy=event-description]').contains('Good blood')
            
        cy.get('[data-cy=filter-title]')
            .contains('Filter by Category')
        cy.get('[data-cy=choose-category]')
            .contains('Choose Category')
        cy.get('[data-cy=choose-category]')
        .select('Animal Care')
        .invoke('val')
            .should('eq', 'Animal Care')

        // cy.get('[data-cy=events-container]')
        //     .should('have.length', 1).contains('Sorry, no events available with that category selection!')    
        })
        
    it('should not show the delete button on any cards if no org is signed in to', () => {
        cy.get('[data-cy=zip-input]').type(80001)
        cy.get('[data-cy=mileage-input]').select('5')
        cy.get('[data-cy=show-events-btn]').click()        
        cy.get('[data-cy=events-container]')
            .should('have.length', 1)
        
        .get('[data-cy=opportunity]')
        .get('[data-cy=delete-event-button]')
        .should('not.exist')
    })
})