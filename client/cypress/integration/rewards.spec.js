///<reference types='cypress'/>

describe('These are the rewards tests', ()=>{
    beforeEach(()=>{
        cy.visit('/rewards');
    });

    it('Should display a list of rewards', ()=>{
        cy.get('ul')
        .should('contain', '500 points for drinking 8 cups of water for 7 straight days')
        .and('contain','850 points for fasting for 5 days straight');

    });

    it('It should display a list of rewards with a mock', ()=>{
        cy.intercept('GET', 'http://localhost:3000/rewards', {
            fixture: 'rewards.json'
        });
    });
});