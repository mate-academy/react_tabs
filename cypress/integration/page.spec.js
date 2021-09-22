describe('Page', () => {
  it('should be visitable', () => {
    cy.visit('/');
    cy.get('.home')
  });

  it('should be visitable', () => {
    cy.visit('/testsssss');
  });
});