describe('main page',() => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('should contain a header', () => {
    cy.get('header')
    .contains('Do Goodr');
  })
  
})