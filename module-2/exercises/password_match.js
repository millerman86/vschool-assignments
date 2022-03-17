// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
const user = { username: 'sam', password: '123abc' };
const login = (username, password) => {
  //check credentials
  try {
    if (username !== 'sam') {
      throw new Error(`Username doesn't match!`);
    } else if (password !== '123abc') {
      throw new Error(`Password doesn't match!`);
    }
  } catch (err) {
    return err;
  }
  return `login successful!`;
};
console.log(login('sam', '123abc'));


// const login = (user) => {
//     try {
//         if (user.username !== 'sam') { // MORE LIKE IF THE USERNAME IS NOT FOUND IN THE DATABASE, SINCE THIS IS SERVER-SIDE CODE
//           throw new Error(`Username doesn't EXIST!`);
//         } else if (bcrypt.compareSync(myPlaintextPassword, hash) === false) { // LOOKUP BCRYPT, BCRYPT CAN COMPARE GIVEN PASSWORD TO THE ENCRYPTED PASSWORD IN THE DATABASE
//           throw new Error(`Password doesn't match!`); // FOR SECURITY PURPOSES, YOU REALLY DON'T WANT TO LET PEOPLE KNOW WHETHER ONE OR THE OTHER FAILS
//         }
//       } catch (err) {
//         return err;
//       }
//       console.log('login successful')
//     };
// }


const user = { username: 'sa', password: '123abc' };
const login = ({ username, password }) => {
  //check credentials
    if (username !== 'sam') {
      throw new Error(`Username doesn't match!`);
    } else if (password !== '123abc') {
      throw new Error(`Password doesn't match!`);
    }
  return `login successful!`;
};


try {
    login(user)
} catch (err) {
    console.log(err.message)
}

// // 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!