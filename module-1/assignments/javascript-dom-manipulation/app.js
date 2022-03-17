window.onload = function() {
    let myGreeting = document.querySelector('#greeting');
    // console.log(myGreeting);
    console.log(myGreeting.style);
    myGreeting.style.backgroundColor = "blue";
    myGreeting.textContent = "Long time no see!";

    const h1 = document.createElement('h1');
    h1.textContent = "Long time no double see!";

    const h2 = document.createElement('h1');
    h2.textContent = "Long time no triple see!";

    const h3 = document.createElement('h1');
    h3.textContent = "Long time no quadruple see!";

    document.querySelector("#list").appendChild(h1).appendChild(h2).appendChild(h3);
   
}

