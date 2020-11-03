const { describe } = require("mocha");

describe('navigate to start order', () =>
{
    it('start order', function()
    {
        cy.visit("https://www.wawa.com/")
    })
})