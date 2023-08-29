// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('main user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      statusCode: 201,
      fixture: 'moviesData.json'
    })
    cy.visit('http://localhost:3000/')

    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
    //   statusCode: 201,
    //   fixture: 'movie437270.json'
    // })
  })

  it('should allow the user to view all movies on page load', () => {
    cy.get('.nav-content').contains('h1', 'Rancid Tomatillos')
    .get('img[class="nav-logo"]').should('be.visible')
    cy.url().should('include', '/')
    cy.get('.movie-card').should('be.visible')
  })
})