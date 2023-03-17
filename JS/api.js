//const BASE_URL = `https://randomuser.me/api/?inc=gender,name,nat,picture&results=100`

const BASE_URL = "https://rickandmortyapi.com/api/character/"
const REST = ".json"
const BASE2_URL = `https://practicas-kodemia-default-rtdb.firebaseio.com/roberto/`

const getPeople = async () => {
    let response = await fetch(
        `${BASE_URL}`
    )
    let data = await response.json()
    return data
}

const getPeopleId = async (id) => {
    let response = await fetch(
        `${BASE_URL}${id}`
    )
    let data = await response.json()
    return data
}


const deletePeople = async (koderKey) => {
    console.log(`Eliminando ${koderKey}...`)
    let response = await fetch(
        BASE_URL,
        {method:"DELETE"
    })
    let data = await response.json()
    console.log("Koder eliminado")
    return data
}

const createPeople = async (koderObject) => {
    let response = await fetch(
        BASE2_URL,{
            method: "POST",
            body: JSON.stringify(koderObject)
        })
    let data = await response.json()
    return data
}

export { getPeople, getPeopleId, deletePeople, createPeople }