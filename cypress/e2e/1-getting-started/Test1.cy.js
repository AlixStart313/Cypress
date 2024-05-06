/*
Sitio a probar:Demonplace
Accion a probar:Visitar la pagina web
URL: https://www.demoblaze.com/index.html
*/

require('cypress-xpath')
describe("Prueba al sitio demonPlace",()=>{
    //Todo el codigo para realizar en mi prueba

    const URL='https://example.cypress.io'
    //La palabra reservada "it" sirve para indicar la accion o paso que debe realizarse
    beforeEach(()=>{
        cy.visit(URL)
    })

    it('Buscar texto XHR',()=>{
        cy.contains('xhr')
    })

    //buscar en un elemento especifico dentro de otro elemento, para darle clic despues

    it('Buscar texto XHR y darle clic',()=>{
        cy.get('.nav')//busca el elemento
        .contains("Commands")//busca la palabra dentro del elemento
        .click()//da clic
        .wait(4000)//espera 3 segundos, la cantidad de tiempo es en milisegundos
        // de aqui en adelante lo haremos con xpath
        .xpath('//*[@id="navbar"]/ul[1]/li[1]/ul/li[7]/a')//selecciona un elemento con el xpath
        .click()
        .should('match',"cy.go")// que encuentre cierto texto

    })

    it('Buscar texto cy.go',()=>{
        cy
        .xpath('//*[@id="navbar"]/ul[1]/li[1]/ul/li[7]/a')//selecciona un elemento con el xpath
        .click()
        .should('match',"cy.go")// que encuentre cierto texto

    })


})

//instalamos el plugin para hacer uso del Xpath con esta linea
//npm i cypress-xpath --save-dev
