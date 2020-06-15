import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => {
  // TOPICID: 1234
  console.log(match.params)
  return (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)}

const Topics = ({ match }) => {
  // console.log(match.path);
  // console.log(match.params);
  // console.log(match.url);
  return (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    {/*REMEMBER, ROUTE DOESN'T HAVE TO BE IN THE ROUTER DIRECTLY, JUST UNDER THE UMBRELLA*/}
    <Route path={`${match.path}/:topicId`} component={Topic}/>
    {/*THE PART BELOW ONLY REALLY MATTERS IF YOU ARE RENDERING IT ON THE SAME PAGE, BUT THIS*/}
    {/*PART CAN EASILY BE OMITTED IF YOU ARE REROUTING*/}
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)}

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample



















// THIS IS THE WAY TO RENDER THE MODERN, V4 ROUTER USING REDUX, DON'T FORGET TO ADD HASHHISTORY TO BE
// ABLE TO USE THE FORWARD AND BACK BUTTONS. PLEASE ADD LATER
// let App = () => {
//
//   return (
//     <BrowserRouter>
//       <div>
//
//         <Banner />
//         <Navigation />
//
//         <Switch>
//
//           <Route exact path='/' component={HomePage}/>
//           <Route exact path='/homepage' component={HomePage}/>
//           <Route exact path='/Login' component={Login}/>
//           <Route exact path='/submitcoupons' component={SubmitCoupons}/>
//           <Route exact path='/createaccount' component={CreateAccount}/>
//           <Route exact path='/clearance' component={Clearance}/>
//           <Route exact path='/search' component={Search}/>
//           <Route exact path='/local' component={Local}/>
//           <Route exact path='/clipped' component={Clipped}/>
//
//           <PrivateRoute exact path='/advertise' authorized={myAuth.isAuthenticated()} component={AdvertiseSwitch}/>
//
//           <My404Component/>
//
//         </Switch>
//
//
//
//         <Footer />
//
//       </div>
//     </BrowserRouter>
//   )};
//


//
//
//
//
// <!DOCTYPE html>
// <html>
// <head>
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//     <style>
//       * {
//       box-sizing: border-box;
//     }
//
//       #myInput {
//       background-image: url('/css/searchicon.png');
//       background-position: 10px 12px;
//       background-repeat: no-repeat;
//       width: 100%;
//       font-size: 16px;
//       padding: 12px 20px 12px 40px;
//       border: 1px solid #ddd;
//       margin-bottom: 12px;
//     }
//
//       #myUL {
//       list-style-type: none;
//       padding: 0;
//       margin: 0;
//     }
//
//       #myUL li a {
//       border: 1px solid #ddd;
//       margin-top: -1px; /* Prevent double borders */
//       background-color: #f6f6f6;
//       padding: 12px;
//       text-decoration: none;
//       font-size: 18px;
//       color: black;
//       display: block
//     }
//
//       #myUL li a:hover:not(.header) {
//       background-color: #eee;
//     }
//     </style>
// </head>
// <body>
//
// <h2>My Phonebook</h2>
//
// <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
//
//   <ul id="myUL">
//     <li><a href="#">Adele</a></li>
//     <li><a href="#">Agnes</a></li>
//
//     <li><a href="#">Billy</a></li>
//     <li><a href="#">Bob</a></li>
//
//     <li><a href="#">Calvin</a></li>
//     <li><a href="#">Christina</a></li>
//     <li><a href="#">Cindy</a></li>
//   </ul>
//
//   <script>
//     function myFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//     li[i].style.display = "";
//   } else {
//     li[i].style.display = "none";
//
//   }
//   }
//   }
//   </script>
//
// </body>
// </html>
//
