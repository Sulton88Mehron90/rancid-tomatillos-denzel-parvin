describe('Error Handling', () => {
  it('should display a 500 error message when the server fails', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      statusCode: 500
    });
    cy.visit('http://localhost:3000/');
    cy.contains('500 - Internal Server Error').should('be.visible');
    cy.contains("Oops! Something went wrong on our end.").should('be.visible');
    cy.get('.go-home-button').should('be.visible');
  });

  it('should display a 404 error message when the page is not found', () => {
    cy.visit('http://localhost:3000/nonexistentpage');
    cy.contains('404 - Page Not Found').should('be.visible');
    cy.contains("Sorry! That page doesn't seem to exist. Try going back to the home page.").should('be.visible');
    cy.url().should('include', '/404')
    cy.get('.go-home-button').should('be.visible');
    cy.get('.fun-fact').should('be.visible');
  });
});