function requestListener() {
    let response = this.responseText;
    response = JSON.parse(response);
    
    let pokemonlist = document.getElementById('pokemonlist');

    
    response.objects[0].pokemon.forEach((i) => {
        let newNode = document.createElement('li');

        newNode.innerText = i['name'];

        pokemonlist.appendChild(newNode);
    });
}

var request = new XMLHttpRequest();


function test() {
    console.log('blahblahblah');
}

request.onreadystatechange = function() {
    test()
    if (this.readyState == 4 && this.status == 200) {
        console.log('blah')
        test()
        
    }
}


request.addEventListener("load", requestListener);
request.open('GET', 'https://api.vschool.io/pokemon');

request.send();

