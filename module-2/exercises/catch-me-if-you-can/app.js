function sum(x, y) {
    return x + y
}

try {
    sum(1, 2)
} catch (err) {
    console.log(err)
}


var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  if (username != user.username) throw 'The username or password doesn\'t match'
  if (password != user.password) throw 'The username or password doesnn\'t match'
}

try {
    login()
} catch (err) {
    console.log(err)
}

try {
    login(user.username, user.password)
} catch (err) {
    console.log(err)
}


