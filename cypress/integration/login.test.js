describe('/login', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('shows error if email is not provided', () => {
        cy.get('#password').type('arrow');
        cy.get('button[type="submit"]').click();
        cy.contains('email field is required').should('be.visible');
    });

    it('shows error if password is not provided', () => {
        cy.get('#email').type('oliver@qc.com');
        cy.get('button[type="submit"]').click();
        cy.contains('password field is required').should('be.visible');
    });

    it('shows errors if no data is provided', () => {
        cy.get('button[type="submit"]').click();
        cy.contains('email field is required').should('be.visible');
        cy.contains('password field is required').should('be.visible');
    });

    it.skip('logins user and redirects to index page', () => {
        cy.get('#email').type('oliver@qc.com');
        cy.get('#password').type('arrow');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq', 'http://localhost:4200/');
    });
});
