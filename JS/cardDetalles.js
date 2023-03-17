/*
<div class="card mb-3">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
*/

let createDetailsCard = (imagenSrc,name,status,species,gender) => {
    let divCard = document.createElement("div")
    divCard.classList.add("card","mb-3")
    divCard.setAttribute("style","max-width: 540px;")

    let image = document.createElement("img")
    image.classList.add("card-img-top")
    image.setAttribute("src",imagenSrc)

    let divBody = document.createElement("div")
    divBody.classList.add("card-body")

    let title = document.createElement("h5")
    title.classList.add("card-title")
    let nombre = document.createTextNode(name)
    title.appendChild(nombre)

    let elementStatus = document.createElement("p")
    elementStatus.classList.add("card-text")
    let textStatus = document.createTextNode(`Status: ${status}`)
    elementStatus.appendChild(textStatus)

    let elementSpecies = document.createElement("p")
    elementSpecies.classList.add("card-text")
    let textSpecies = document.createTextNode(`Species: ${species}`)
    elementSpecies.appendChild(textSpecies)

    let elementGender = document.createElement("p")
    elementGender.classList.add("card-text")
    let textGender = document.createTextNode(`Gender: ${gender}`)
    elementGender.appendChild(textGender)

    divBody.append(title,elementStatus,elementSpecies,elementGender)
    divCard.append(image,divBody)

    return divCard
}

export {createDetailsCard}