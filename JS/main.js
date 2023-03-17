import { createCard } from "./card.js"
import { getPeople } from "./api.js"

let divContent = document.querySelector("#card-div")

let obtnerPersonas = async () => {
    let people = await getPeople()
    console.log(people)
    people["results"].forEach(element => {
        let {id, name, origin, image} = element
        let {name:nameOrigin} = origin
 
        let cards = createCard(image,name,nameOrigin,id)
        divContent.appendChild(cards)       
    });
}

obtnerPersonas()