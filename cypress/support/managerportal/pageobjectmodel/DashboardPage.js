/// <reference types="Cypress" />
import "cypress-xpath"
class DashboardPage {

    searchForStoreNumber(storenumber) {
        cy.info("1. CLICK ON CHANGE STORE")
        cy.get('button[name="Change Store"]').click()
        cy.info("2. ENTER STORE NUMBER - " + storenumber)
        cy.get('#storeInput').type(storenumber)
        cy.wait(4000)
        cy.info("3. CLICK ON SAVE BUTTON")
        cy.contains('Save').click()
        cy.wait(4000)
    }

    verifyAddressOfStore(address) {
        cy.info("VRIFY THE ADDRESS OF THE STORE - " + address)
        cy.contains(address)
    }

    verifyUpcomingOrderPrintCount() {

        var totalcount = 0;
        cy.info("1. VERIFYING PENDING PRINT COUNT DISPLAY")

        cy.xpath('//h1[.="Pending Print"]/../../..//p').invoke('text').then((pendingprintcount) => {
            cy.xpath('//div[@id="UPCOMING"]/..//p[contains(.,"Pending Print")]').invoke('text').then((pendingprintcountLeftNav) => {
                expect(pendingprintcountLeftNav).to.have.string(pendingprintcount)
                totalcount = totalcount + parseInt(pendingprintcount)

            })

            cy.xpath('//h1[.="Needs Reprint"]/../../..//p').invoke('text').then((needsprintcount) => {
                cy.xpath('//div[@id="UPCOMING"]/..//p[contains(.,"Needs Reprint")]').invoke('text').then((needsprintcountLeftNav) => {
                    expect(needsprintcountLeftNav).to.have.string(needsprintcount)
                    totalcount = totalcount + parseInt(needsprintcount)

                })

                cy.info("3. VERIFYING PRINTED COUNT DISPLAY ")

                cy.xpath('//h1[.="Printed"]/../../..//p').invoke('text').then((printedcount) => {
                    cy.xpath('//div[@id="UPCOMING"]/..//p[contains(.,"Printed")]').invoke('text').then((printedcountLeftNav) => {
                        expect(printedcountLeftNav).to.have.string(printedcount)
                        totalcount = totalcount + parseInt(printedcount)

                    })


                    cy.info("4. VERIFYING CANCELLED COUNT DISPLAY ")

                    cy.xpath('//h1[.="Cancelled"]/../../..//p').invoke('text').then((cancelledcount) => {
                        cy.xpath('//div[@id="UPCOMING"]/..//p[contains(.,"Cancelled")]').invoke('text').then((cancelledcountLeftNav) => {
                            expect(cancelledcountLeftNav).to.have.string(cancelledcount)
                            totalcount = totalcount + parseInt(cancelledcount)
                            cy.log("Total count for future orders-" + totalcount)

                            cy.info("TOTAL COUNT FOR FUTURE ORDERS -" + totalcount)
                            cy.info("VERIFYING THE TOTAL ORDER COUNT DISPLAY BELOW")

                            cy.contains('Total Orders').invoke('text').then((totalordercount) => {
                                expect(totalordercount).to.have.string(totalcount.toString())
                            })
                        })
                    })
                })

            })
        })
    }

    clickFutureTab() {
        cy.get('div[id="FUTURE"]').click()
    }

    verifyFutureOrdersPrintCount() {

        var totalcount = 0;
        cy.info("1. VERIFYING PENDING PRINT COUNT DISPLAY")

        cy.xpath('//h1[.="Pending Print"]/../../..//p').invoke('text').then((pendingprintcount) => {
            cy.xpath('//div[@id="FUTURE"]/..//p[contains(.,"Pending Print")]').invoke('text').then((pendingprintcountLeftNav) => {
                expect(pendingprintcountLeftNav).to.have.string(pendingprintcount)
                totalcount = totalcount + parseInt(pendingprintcount)
            })

            cy.info("2. VERIFYING NEEDS PRINT COUNT DISPLAY  ")

            cy.xpath('//h1[.="Needs Reprint"]/../../..//p').invoke('text').then((needsprintcount) => {
                cy.xpath('//div[@id="FUTURE"]/..//p[contains(.,"Needs Reprint")]').invoke('text').then((needsprintcountLeftNav) => {
                    expect(needsprintcountLeftNav).to.have.string(needsprintcount)
                    totalcount = totalcount + parseInt(needsprintcount)
                })


                cy.info("3. VERIFYING PRINTED COUNT DISPLAY ")

                cy.xpath('//h1[.="Printed"]/../../..//p').invoke('text').then((printedcount) => {
                    cy.xpath('//div[@id="FUTURE"]/..//p[contains(.,"Printed")]').invoke('text').then((printedcountLeftNav) => {
                        expect(printedcountLeftNav).to.have.string(printedcount)
                        totalcount = totalcount + parseInt(printedcount)
                    })


                    cy.info("4. VERIFYING CANCELLED COUNT DISPLAY ")
                    cy.xpath('//h1[.="Cancelled"]/../../..//p').invoke('text').then((cancelledcount) => {
                        cy.xpath('//div[@id="FUTURE"]/..//p[contains(.,"Cancelled")]').invoke('text').then((cancelledcountLeftNav) => {
                            expect(cancelledcountLeftNav).to.have.string(cancelledcount)
                            totalcount = totalcount + parseInt(cancelledcount)
                            cy.log("Total count for FUTURE orders-" + totalcount)

                            cy.info("TOTAL COUNT FOR FUTURE ORDERS -" + totalcount)
                            cy.info("VERIFYING THE TOTAL ORDER COUNT DISPLAY BELOW")

                            cy.contains('Total Orders').invoke('text').then((totalordercount) => {
                                expect(totalordercount).to.have.string(totalcount.toString())
                            })
                        })
                    })

                })
            })
        })
    }

    verifyNumberOfUpcomingOrdersDisplayed() {

        cy.info("VERIFY NUMBER OF UPCOMING ORDERS DISPLAYED IS SAME AS TOTAL ORDERS COUNT")
        cy.contains('Total Orders').invoke('text').then((totalordercount) => {

            var totalcount = parseInt(totalordercount.split(" ", 1));
            var looptimes = totalcount / 10;
            var i;
            for (i = 1; i < looptimes; i++) {
                cy.contains('Load').click();
            }
            cy.wait(2000)
            cy.get('div[data-at="order--list--orderCard"]').its('length').then((match) => {
                cy.log("num of matching-" + match)
                expect(totalcount).to.equal(match)

            })



        })

    }
    verifyNumberOfFutureOrdersDisplayed() {

        cy.info("VERIFY NUMBER OF FUTURE ORDERS DISPLAYED IS SAME AS TOTAL ORDERS COUNT")
        cy.contains('Total Orders').invoke('text').then((totalordercount) => {
            var totalcount = parseInt(totalordercount.split(" ", 1));
            var looptimes = totalcount / 10;
            var i;
            for (i = 1; i < looptimes; i++) {
                cy.contains('Load').click();
            }
            cy.wait(2000)
            cy.get('div[data-at="order--list--orderCard"]').its('length').then((match) => {
                cy.log("num of matching-" + match)
                expect(totalcount).to.equal(match)

            })
        })
    }

    verifyOrderSearchUsingPhoneNumber(phno) {
        cy.info("ENTER PHONE NUMBER IN SEARCH PHONE NUMBER FIELD")
        cy.get('input[id="Search Phone Number"]').type(phno)
        cy.info("CLICK ON SEARCH BUTTON")
        cy.xpath('//button[.="Search" and not(@name="Search")]').click();
        cy.wait(4000)
        cy.contains('Total Orders').invoke('text').then((totalordercount) => {
            var totalcount = parseInt(totalordercount.split(" ", 1));
            cy.info("TOTAL NUMBER OF ORDERS ARE : " + totalcount)
            var looptimes = totalcount / 10;
            var i;
            for (i = 1; i < looptimes; i++) {
                cy.contains('Load').click();
            }
            cy.info("VERIFYING SEARCH ORDER RESULTS BY PHONE NUMBER")
            var j;
            for (j = 1; j <= totalcount; j++) {
                cy.xpath('((//div[@data-at="order--list--orderCard"])[' + j + ']//p[2])[2]').invoke('text').then((phonenumber) => {
                    var actualphonenumber = phonenumber.replace(/-/g, "")
                    expect(phno).to.equal(actualphonenumber)
                })
            }
        })

    }
    clickAdvancedSearchLink() {
        cy.info("CLICK ON ADVANCED SEARCH LINK")
        cy.xpath('//button[.="Advanced Search"]').click()

    }

    enterOrderNumber(orderno) {
        cy.info("ENTER ORDER NUMBER ")
        cy.get('[id="Order Number"]').type(orderno)
    }

    enterFirstname(firstname) {
        cy.info("ENTER FIRST NAME ")
        cy.get('[id="First Name"]').type(firstname)
    }

    enterLastname(lastname) {
        cy.info("ENTER LAST NAME ")
        cy.get('[id="Last Name"]').type(lastname)
    }


    enterEmailId(email) {
        cy.info("ENTER EMAIL ID ")
        cy.get('[id="Email"]').type(email)
    }

    selectStartDateToEndDate(startdate, enddate) {

    }

    clickSearchButton() {
        cy.xpath('//button[.="Search" and @name="Search"]').click();
    }
    verifyOrderSearchUsingOrderNumber(ordernumber) {
        cy.contains('Total Orders').invoke('text').then((totalordercount) => {
            var totalcount = parseInt(totalordercount.split(" ", 1));
            cy.info("TOTAL NUMBER OF ORDERS ARE : " + totalcount)
            var looptimes = totalcount / 10;
            var i;
            for (i = 1; i < looptimes; i++) {
                cy.contains('Load').click();
            }
            cy.info("VERIFYING SEARCH ORDER RESULTS BY ORDER NUMBER")
            var j;
            for (j = 1; j <= totalcount; j++) {
                cy.xpath('((//div[@data-at="order--list--orderCard"])[' + j + ']//p[1])[1]').invoke('text').then((actualordernumber) => {
                    expect(actualordernumber).to.contain(ordernumber)
                })
            }
        })
    }

    verifyOrderSearchUsingUsername(name) {   // firstname or lastname
        cy.contains('Total Orders').invoke('text').then((totalordercount) => {
            var totalcount = parseInt(totalordercount.split(" ", 1));
            cy.info("TOTAL NUMBER OF ORDERS ARE : " + totalcount)
            var looptimes = totalcount / 10;
            var i;
            for (i = 1; i < looptimes; i++) {
                cy.contains('Load').click();
            }
            cy.info("VERIFYING SEARCH ORDER RESULTS BY FIRSTNAME/LASTNAME")
            var j;
            for (j = 1; j <= totalcount; j++) {
                cy.xpath('((//div[@data-at="order--list--orderCard"])[' + j + ']//strong)[1]').invoke('text').then((actualname) => {
                    expect(actualname).to.contain(name)
                })
            }
        })
    }

    verifyOrderSearchUsingEmail(email) {   // firstname or lastname
        cy.contains('Total Orders').invoke('text').then((totalordercount) => {
            var totalcount = parseInt(totalordercount.split(" ", 1));
            cy.info("TOTAL NUMBER OF ORDERS ARE : " + totalcount)
            var looptimes = totalcount / 10;
            var i;
            for (i = 1; i < looptimes; i++) {
                cy.contains('Load').click();
            }
            cy.info("VERIFYING SEARCH ORDER RESULTS BY FIRSTNAME/LASTNAME")
            var j;
            for (j = 1; j <= totalcount; j++) {
                cy.xpath('((//div[@data-at="order--list--orderCard"])[' + j + ']//p)[3]').invoke('text').then((actualemail) => {
                    expect(email).to.equal(actualemail)
                })
            }
        })
    }



    verifyDashboardLeftViewLabel() {
        cy.info("1. CHECKING WELCOME TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.contains('Welcome,').should('have.text', 'Welcome,')
        cy.info("2. CHECKING LOG OUT TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.contains('Log Out').should('have.text', 'Log Out')
        cy.info("3. CHECKING MY DASHBOARD TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.contains('MY DASHBOARD').should('have.text', 'MY DASHBOARD')
        cy.info("4. CHECKING UPCOMING TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.contains('UPCOMING').should('have.text', 'UPCOMING')
        cy.info("5. CHECKING UPCOMING TIME INTERVAL TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.xpath('//h2[text()="UPCOMING"]/following-sibling::p').should('be.visible')
        cy.info("6. CHECKING PENDING PRINT TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.xpath('//div[@id="UPCOMING"]/following-sibling::div//p[contains(text(),"Pending Print")]').should('contain', 'Pending Print')
        cy.info("7. CHECKING NEEDS REPRINT TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.xpath('//div[@id="UPCOMING"]/following-sibling::div//p[contains(text(),"Needs Reprint")]').should('contain', 'Needs Reprint')
        cy.info("8. CHECKING PRINTED TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.xpath('//div[@id="UPCOMING"]/following-sibling::div//p[contains(text(),"Printed")]').should('contain', 'Printed')
        cy.info("9. CHECKING CANCELLED TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.xpath('//div[@id="UPCOMING"]/following-sibling::div//p[contains(text(),"Cancelled")]').should('contain', 'Cancelled')
        cy.info("10. CHECKING FUTURE TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.contains('FUTURE').should('have.text', 'FUTURE')
        cy.info("11. CHECKING FUTURE TIME INTERVAL TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.xpath('//h2[text()="FUTURE"]/following-sibling::p').should('be.visible');
        cy.info("12. CHECKING COMPLETED TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.contains('COMPLETED').should('have.text', 'COMPLETED')
        cy.info("13. CHECKING COMPLETED TIME INTERVAL TEXT IS PRESENT ON THE DASHBOARD LEFT VIEW")
        cy.xpath('//h2[text()="COMPLETED"]/following-sibling::p').should('be.visible')

    }


}

export default DashboardPage