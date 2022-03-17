// readyState: 1 - 4
// Promise: 1 - pending, 2 - resolved, 3 - rejected
function get(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url, true)
        xhr.send()

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                const data = JSON.parse(xhr.responseText)
                resolve(data)
            } else if(xhr.readyState === 4 && xhr.status !== 200) {
                const data = JSON.parse(xhr.responseText)
                reject(data)
            }
        }
    })
}

// axios.get("https://rickandmortyapi.com/api/character")
//     .then(function(res) { console.log(res) })
//     .catch(err => console.log("REJECTED: " + err))

// axios.get("https://rickandmortyapi.com/api/location")
//     .then(function(res) { console.log(res) })
//     .catch(err => console.log("REJECTED: " + err))

// axios.get("https://rickandmortyapi.com/api/episode")
//     .then(function(res) { console.log(res) })
//     .catch(err => console.log("REJECTED: " + err))


async function getAllDatas(){
    let characters, locations, episodes
    try {
        characters = await axios.get("https://rickandmortyapi.com/api/character")

        locations = await axios.get("https://rickandmortyapi.com/api/location")

        episodes = await axios.get("https://rickandmortyapi.com/api/episode")
    }
    catch(err){
        console.log(err)
    }
    return {
        characters,
        episodes,
        locations
    }
}

// const wait = get('https://rickandmortyapi.com/api/location').then(response => console.log('response', response))

const result = getAllDatas().then(resp => {
    console.log('object', resp);
    console.log('locations',resp.locations.data.results);
    listData(resp.characters.data.results)
})

function listData(arr){
    arr.forEach(makeElements)
}

function makeElements(item){
    // 1 create elements
    const h1 = document.createElement("h1")
    const img = document.createElement("img")
    const container = document.createElement("div")

    // 2 - edit elements 
    h1.textContent = item.name
    img.src = item.image
    img.style.width = "200px"

    // 3 - place it on the dom (append)
    const list = document.getElementById('list')
    container.appendChild(h1)
    container.appendChild(img)
    list.appendChild(container)
}


