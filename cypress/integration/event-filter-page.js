// describe('events page',() => {
//     beforeEach(() => {
//         cy.visit('http://localhost:5000/');

//         cy.intercept('GET', `https://do-goodr-be.herokuapp.com/api/v1/events?`, {
//             fixture: 'event-data.json'
//         })
//     })

//     it('should contain a header', () => {
//         cy.get('header')
//         .contains('Do Goodr');
//     })

//     cy.get('[data-cy=show-events-btn]').click()
//     it('should display a page with relevant volunteer opportunities', () => {
//         cy.get('[data-cy=events-container]')
//             .should('exist')
//             .should('have.class', 'events-container')
//             .should('have.length', 1)
//     })

//     it('should have volunteer event details on event card', () => {
//         cy.get('[data-cy=opportunity]')
//             .should('exist')
//             .contains('Blood & Plasma Drive')
//     })

    

// })

