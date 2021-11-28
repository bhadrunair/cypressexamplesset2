///<reference types='cypress' />

describe('This is the accomplishment page test', () => {
    beforeEach(()=>{
        cy.visit('/accomplishments');
    });

    it('This is the intercept message test', ()=>{
        cy.intercept('POST', 'http://localhost:3000', (req)=>{
            req.reply((res)=>{
                res.send({
                    msg:'Your content is not appropriate'
                });
            });
        });
    });
})