function requestListener() {
    console.log('response', this.responseText);
}

var request = new XMLHttpRequest();

request.addEventListener("load", requestListener);
request.open('GET', 'https://api.vschool.io/pokemon');

request.send();
