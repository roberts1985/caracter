import { getPeopleId } from "./api.js"
import { createDetailsCard } from "./cardDetalles.js"

let details = document.querySelector("#card-details")

let obtenerId = () => {
    let urlParams = new URLSearchParams(window.location.search)

    let pId = urlParams.get("id")

    return pId
}

let obtenerCaracter = async () => {
    const caracter = await getPeopleId(obtenerId())

    let {name, status, species,gender,image} = caracter
    details.appendChild(createDetailsCard(image,name,status,species,gender))
}

obtenerCaracter()