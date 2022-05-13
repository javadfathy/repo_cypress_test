/// <reference type="cypress"/>



describe("Suite 1", () => {
    // it ('1- Google search', () => {
    //     cy.visit("https://google.com")
    //     cy.get("input[name=q]").type("madareno{enter}")
    // })
    
    
    // it ('2- test 1', () => {
    //     cy.visit("https://vuetifyjs.com/")
    //     cy.title().should('include', "Vuetify")
    // })

    // it ('3- test', () => {
    //     cy.visit("http://new.madareno.com")
    //     cy.get('[style="transition-delay: .9s"] > .SiteHeader-nav-link').type('{enter}') 
    // })

    // it ('4- test', () => {
    //     cy.visit("https://vuejs.org/")
    //     cy.contains("h2","Platinum Sponsors") 
    //     // cy.get("h2").contains("Platinum Sponsors")
    // })


    // it ('5- test', () => {
    //     cy.visit("https://digikala.com")
    //     cy.get(".d-block-md").children("[href='/faq/question/649/']").click()
    //     cy
    // })

    // it ('6- test', () => {
    //     cy.visit("https://google.com")
    //     cy.get("input[name=q]").type("I'm typing Slow",{delay:0})
    //     cy.get("input[name=q]").type("{selectAll}{del}")
    // })

    // it.only ('7- test', () => {
    //     cy.visit("https://google.com")
    //     cy.get("input[name=q]").type("Cypress")
    //         .realPress(["Control","A"])
    //         .realPress(["Control","X"])
    //         .realPress(["Control","V"])
    // })

    
    // it ('8- test', () => {
    //     cy.visit("https://google.com")
    //     cy.get("input[name=q]").type("Cypress ".repeat(2))
    // })



    // for run sypress : npx cypress open
    //  ============== example for use .then in cypress
    // cypress is sync 
    it ('9- test', () => {
        cy.visit("https://google.com")
        cy.wait(3000).then( () => {
            console.log("finished")
        })
    })

    // this test for API
    it.only ('10- test', () => {
        fetch("api")
        .then( (res) => res.json())
        .then( (data) => {
            console.log(data)
        })
    })



})