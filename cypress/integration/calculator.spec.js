describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display showing number buttons pressed', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })

  it('should update display with results of arithmetical operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5');
  })

  it('should be able to display results with negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3');
  })

  it('should be able to display results with decimal numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5.5');
  })

  it('should be able to display results with very large numbers', () => {
    cy.get('#number5').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-subtract').click();
    cy.get('#number2').click()
    cy.get('#number5').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '25000')

    })
    
    
    it("should return 'infinity' when dividing a number by 0", () => {
      cy.get('#number5').click();
      cy.get('#operator-divide').click();
      cy.get('#number0').click();
      cy.get('#operator-equals').click();
      cy.get('.display').should('contain', 'infinity');
      
    })



})