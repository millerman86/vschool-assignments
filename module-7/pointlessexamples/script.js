let boxes = Array.from(document.getElementsByClassName('box'))

function selectBox(id) {
    boxes.forEach(b => {
        b.classList.toggle('selected', b.id === id)
    })
}

window.addEventListener('popstate', (event) => {
    console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
})

boxes.forEach(b => {
    let id = b.id 
    b.addEventListener('click', e => {
        history.pushState({id}, ``, `./selected=${id}`)
        selectBox(id)
    })
})

