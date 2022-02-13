describe('events page',() => {
    beforeEach(() => {
        cy.fixture('./event-data.json').then((allEvents) => {
            cy.intercept('GET', 'https://do-goodr-be.herokuapp.com/api/v1/search?zip=80202&distance=10', {
                statusCode: 200,
                body: allEvents
            })
            cy.visit('http://localhost:5000');
        })
    })

    it('should contain a header', () => {
        cy.get('header')
        .contains('Do Goodr');
    })

    it('should be able to take in a user zipcode and a mileage preference', () => {
    
        cy.get('[data-cy=zip-input]').type('80202')
        cy.get('[data-cy="mileage-input"]').eq(0).select('10')
        cy.get('[data-cy=show-events-btn]').click()        
        cy.get('[data-cy=events-container]')
            .should('have.length', 1)
    
        cy.get('.events-container > :nth-child(1)')
            .contains('Blood Drive')
        cy.get('.events-container > :nth-child(1)')
            .contains('555-555-5555')
        cy.get('.events-container > :nth-child(1)')
            .contains('Healthcare')
        cy.get('.events-container > :nth-child(1)') 
            .contains('10/15/2022')
        cy.get('.events-container > :nth-child(1)')
            .contains('01:00 PM - 02:00 PM')
    })
        
    // it('should allow users to filter by category', () => {
    //     cy.get('[data-cy=filter-title]')
    //         .contains('Filter by Category')
    //     cy.get('[data-cy=choose-category]')
    //         .should('exist')
    //     cy.get('[data-cy=choose-category]')
    //         .select('Animal Care')
    //         .invoke('val')
    //         .should('eq', 'animal-care')

    //     cy.get('[data-cy=events-container]')
    //         .should('have.length', 1).contains('Sorry, no events available with that category selection!')    

    // })
})