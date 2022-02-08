describe('Event Submission Form DOM',() => {
    beforeEach(() => {
      cy.visit('http://localhost:5000/');
    })
  
    it('should contain a header', () => {
      cy.get('header')
      .contains('Do Goodr');
    })
    
  })