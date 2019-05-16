context('Network Requests', () => {
    beforeEach(() => {
      cy.visit('https://www.post.japanpost.jp/index.html')
    })
    
    describe('sample test', () => {
        it('shouldbe hogehoge', () => {
            cy.get('#toolBox #select').select('石川')
            cy.get('#toolBox input:first').type('金沢市')
            cy.get('#toolBox input:first').should('value', '金沢市')
            cy.get('[name="zip"]').find('[alt="検索"]').click()
            cy.get('table tr a').contains('駅西本町').click()
            cy.get('.present .zip-code').should(($val) => {
                expect($val).to.contain('920-0025')
            })
        })
    })
})