describe('Event Submission Form DOM',() => {
    beforeEach(() => {
      cy.visit('http://localhost:5000/');
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

    it('should have 8 category options in the category drop down', () => {
        cy.get('[data-cy=set-category]')
          .get('#category option')
          .should('have.length', 8)

        cy.get('#category option').eq(0)
            .should('have.value', 'Animal Care')

        cy.get('#category option').eq(1)
            .should('have.value', 'Campaigning')

        cy.get('#category option').eq(2)
            .should('have.value', 'Youth Mentorship')

        cy.get('#category option').eq(3)
            .should('have.value', 'Nursing Home')
        
        cy.get('#category option').eq(4)
            .should('have.value', 'Food Service')

        cy.get('#category option').eq(5)
            .should('have.value', 'Grounds Cleanup')

        cy.get('#category option').eq(6)
            .should('have.value', 'Healthcare')

        cy.get('#category option').eq(7)
            .should('have.value', 'Community Development')
    })

    it('should have an input for selecting the amount of volunteers needed for an event', () => {
        cy.get('[data-cy=set-volunteer-num]')    
    })

     it('should have an input for creating the description for an event', () => {
        cy.get('[data-cy=set-description]')
        .should('have.attr', 'placeholder', 'Description...')
    })

    it('should have a button for submitting an event', () => {
        cy.get('[data-cy=disabled-submit-button]')
    })

  })

  describe('Event Submission Form Actions',() => {
    beforeEach(() => {
      cy.visit('http://localhost:5000/');
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
       
      })

    it('should allow a user to update the end time', () => {
       
      })

    it('should allow a user to update the category', () => {
       
      })

    it('should allow a user to update the amount of volunteers needed', () => {
       
      })

    it('should allow a user to write a description', () => {
       
      })


    it('should allow a user to update the end time input', () => {
       
      })

 })