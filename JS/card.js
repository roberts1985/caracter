let createCard = (imgSrc,cardTitle,pContent,id) => {
    let divCol = document.createElement("div")
    divCol.classList.add("col-6")

    let divCard = document.createElement("div")
    divCard.classList.add("card","mb-3")
    divCard.setAttribute("style","max-width: 600px;")

    let divRow = document.createElement("div")
    divRow.classList.add("row","g-0")

    let divImage = document.createElement("div")
    divImage.classList.add("col-md-4")

    let imagen = document.createElement("img")
    imagen.setAttribute("src",imgSrc)
    imagen.classList.add("img-fluid","rounded-start")

    let divCol2 = document.createElement("div")
    divCol2.classList.add("col-md-8","text-white","bg-dark","rounded-end","bg-opacity-75")

    let divBody = document.createElement("div")
    divBody.classList.add("card-body")

    let name = document.createElement("h5")
    name.classList.add("card-title")
    let nameText = document.createTextNode(cardTitle)
    name.appendChild(nameText)

    let description = document.createElement("p")
    description.classList.add("card-text")
    let textDescription = document.createTextNode(pContent)
    description.appendChild(textDescription)

    let anchor = document.createElement("a")
    anchor.classList.add("btn","btn-primary","btn-lg")
    let anchorText = document.createTextNode("Ver detalles")
    anchor.setAttribute("type","button")
    anchor.setAttribute("href",`./view/detalles.html?id=${id}`)
    anchor.appendChild(anchorText)

    divBody.append(name,description,anchor)
    divCol2.appendChild(divBody)
    divImage.appendChild(imagen)
    divRow.append(divImage,divCol2)
    divCard.appendChild(divRow)
    divCol.appendChild(divCard)

    return divCol
}

export { createCard }