// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


describe('Main User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      statusCode: 200,
      fixture: 'moviesData.json'
    });
    cy.visit('http://localhost:3000/');
  });

  it('should allow the user to view all movies on page load', () => {
    cy.get('.nav-content')
      .contains('h1', 'Rancid Tomatillos')
      .get('img[class="nav-logo"]')
      .should('be.visible');
    cy.url()
      .should('include', '/');
    cy.get('.movie-card')
      .should('be.visible');
  });

  it('should allow the user to click on a movie to see its details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie436270.json'
    }).as('getMovie');
    
  //   cy.get('[src="https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"]').click();
    
  //   cy.get('h2').should('contain', 'Black Adam');
  //   cy.get('.label').contains('overview:').should('be.visible');
  //   cy.get('.label').contains('average rating:').should('be.visible');
  //   cy.get('.label').contains('runtime:').should('be.visible');
  //   cy.get('.label').contains('genre(s):').should('be.visible');
  //   cy.get('.label').contains('release date:').should('be.visible');
  });
 
  it('should allow the user to navigate back to all movies by clicking the back button', () => {
    cy.get('[src="https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"]').click();

    cy.get('.back-button', { timeout: 10000 }).click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should display the title when navigated back to the home page', () => {
    cy.get('.nav-content').should('be.visible');
  });

  it('should navigate back to the home page when clicking the title', () => {
    cy.get('.nav-content').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

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
    cy.get('.go-home-button').should('be.visible');
  });

  it('should display a fun fact on the 404 error page', () => {
    cy.visit('http://localhost:3000/nonexistentpage');
    cy.get('.fun-fact').should('be.visible');
  });
});
