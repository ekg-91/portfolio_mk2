describe('Routes', () => {
  context('Can navigate to paths of:', () => {
    it('The site/home page', () => {
      cy.visit('http://localhost:3000').then(() => {
        cy.location().should((location) => {
          expect(location.hash).to.be.empty;
          expect(location.pathname).to.eq('/');
          expect(location.search).to.be.empty;
        });
      });
    });
  });
});
