function doubleNumbers(arr) {
    // your code here
    arr = arr.map((i, index) => {
        return i * i
    });

    return arr
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]



function stringItUp(arr) {
    // your code here
    arr = arr.map((i, index) => {
        return i.toString()
    });

    return arr
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


function capitalizeNames(arr) {
    // your code here
    arr = arr.map((i, index) => {
        return i[0].toUpperCase() + i.slice(1)
    });

    return arr
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


function namesOnly(arr){
    // your code here
    arr = arr.map((i, index) => {
        return i['name']
    });

    return arr
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]




  function makeStrings(arr){
    // your code here
    let canGo = arr.map((i) => {
        if (i['age'] > 18) return i
    });
    canGo = canGo.filter((i) => {
        return (typeof i === 'object')
    });

    console.log('cango', canGo)
    canGo = canGo.map((i) => {
        return i['name'] + ' can go to the Matrix'
    })


    
    let cannotGo = arr.map((i) => {
        if (i['age'] < 18) return i
    });
    cannotGo = cannotGo.filter((i) => {
        return (typeof i === 'object')
    });
    cannotGo = cannotGo.map((i) => {
        return i['name'] + ' is under age!!'
    })


    return canGo.concat(cannotGo);
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]



  function readyToPutInTheDOM(arr){
    // your code here
    return arr.map((i) => {
        return `<h1>${i['name']}</h1><h2>${i['age']}</h2>`;
    });    
  }


  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]