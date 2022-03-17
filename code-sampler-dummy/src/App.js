import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

import {hashHistory} from 'react-router';
import Home from './components/Home';
import About from './components/About';
// import Topic from './components/Topic';
import SearchableList from './containers/SearchableList';
import BlogListings from './containers/Blog/Blog';
import ChosenBlog from './containers/ChosenBlog/ChosenBlogComponent';
import { Redirect, Switch } from 'react-router-dom'
import Login from './components/Login';
import './semantic-ui/semantic.min.css';



const myAuth = {
  isAuthenticated: function () {
    const result = sessionStorage.getItem('token');
    return !!result;
  }
};


// THIS FOR SURE WORKS
const PrivateRoute = ({component: Component, authorized, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authorized === true ? (<Component {...props} />) : (
          <Redirect to={{pathname: '/login', state: {from: props.location}}}/>)}
    />
  )
};


const My404Component = () => (
  <div className='center-align'>
    I'M SO SORRY, I CAN'T FIND YOUR PAGE!
  </div>
);


// THESE ARE ALL BASICALLY THE SIMPLEST LEVEL OF MARKUP, WHICH WOULD REPRESENT A WEB PAGE
const App = () => (
  <HashRouter>
    <div>
      {/*THIS CAN BE CONSIDERED A HEADER OR NAVIGATION BAR*/}
      {/*THIS WILL BE RENDERED A LITTLE DIFFERENTLY USING REDUX, USING THE NAVLINK TAGS*/}

      <hr/>
      <Switch>
        <Route exact path="/" component={SearchableList}/>
        <Route exact path="/about" component={About}/>
        {/*<Route exact path='/blog' component={Blog}/>*/}

        {/*THE SEARCHABLE LIST COMPONENT WILL MATCH ANY BASE URL PATH, SO YOU CAN USE THE SEARCHABLE LIST COMPONENT FOR SEARCHING FOR WORDS, TOPICS, THINGS, ENTITY CODES, OR WHATEVER ELSE YOU WANT!!*/}
        {/*THERE IS A SUBTLE DISTINCTION HERE: IF YOU WANT TO RENDER THE SAME COMPONENT, MAKE USE OF THE VARIABLES, BUT IF YOU WANT TO RENDER DIFFERENT ONES, USE BOTH EXACT PATH AND PATH. IT REALLY DEPENDS ON IF YOU WOULD LIKE TO
        RENDER THEM BOTH INCLUSIVELY OR HAVE THEM RENDER EXCLUSIVELY */}

        {/* I HAVE GROUPED THE NEXT THREE ROUTES TOGETHER, BECAUSE THAT IS THE ORDER THAT YOU WILL BE CLICKING ON THEM.
        FROM LIST VIEW TO (TOPIC) OVERVIEW, AND THEN TO ITEM (INDIVIDUAL BLOG) VIEW*/}
        <Route exact path="/topics" component={SearchableList}/>
        <Route exact path="/topics/:topic" component={BlogListings}/>
        <Route exact path='/blog/:blogid' component={ChosenBlog}/>


        <Route exact path="/words" component={SearchableList}/>
        <Route exact path="/things" component={SearchableList}/>
        <Route exact path="/htmlentitycodes" component={SearchableList}/>
        <Route exact path="/people" component={SearchableList}/>
        <Route exact path="/frameworks" component={SearchableList}/>


        {/*<PrivateRoute exact path='/editmyblog' authorized={!myAuth.isAuthenticated()} component={EditMyBlog}/>*/}


        <Route path='*' exact={true} component={My404Component} />

      </Switch>

    </div>
  </HashRouter>
);

export default App;






























































//
// {listOfThingsIKnow.filter(createFilter(this.state.searchTerm)).map((thing, i, originalArray) => {
//
//   let wordPortionOfUrl = thing.toLowerCase().replace(/ /g,'');
//
//   {/*let listTagItems = originalArray.map(thing => <li><Link to={`${this.props.match.url}/${wordPortionOfUrl}`}>{thing}</Link></li>);*/}
//
//   return (<ul key={thing}>
//     {listTagItems}
//     <li>
//       {/*EVEN THOUGH LINK IS A SPECIAL TAG, YOU CAN STILL STYLE IT USING THE DESCENDENT SELECTOR AND TARGETING THE A TAG, BECAUSE YOU DON'T NEED TO NAME ALL THE PATHS*/}
//       <Link to={`${this.props.match.url}/${wordPortionOfUrl}`}>
//         {thing}
//       </Link>
//     </li>
//   </ul>)})}


//
// .replace(/\s/g,'')
//



//
// // THE <LINK> TAG SHOULD REALLY ONLY BE USED INSIDE ROUTER, NOT OUTSIDE OF IT, OR IT WON'T WORK
// const Topic = ({match}) => (
//   <div>
//     <h2>Topic</h2>
//
//     {/*THIS PART OF THE PROJECT IS WHAT I REFER TO AS THE ART OF THE DANGLE*/}
//     {/*EVERY SINGLE TIME THIS GETS RENDERED FROM THE ROUTER, IT WILL ONLY CATCH THE URL YOU ARE SITTING UNDER.*/}
//     {/*CONSIDER MAKING THIS COMPONENT MORE GENERIC, OR JUST CHANGE THE NAME TOPICS EVERY TIME, SINCE THAT IS*/}
//     {/*THE PART THAT GETS MATCHED,*/}
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     {/*RENDER WITH A VARIABLE, :TOPIDID*/}
//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// );


// I AM ADDING THE APP COMPONENT
// const App = () => (
//   <div>
//     <h2>App</h2>
//   </div>
// );

// const Words = ({match}) => (
//   <div>
//     <h2>Words</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.path}/:wordId`} component={Topic}/>
//
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )
//
//



/*
{/!*<ul>*!/
}
{/!*<li><Link to="/">Home</Link></li>*!/
}
{/!*<li><Link to="/about">About this page</Link></li>*!/
}
{/!*<li><Link to="/topics">Searchable List of Things I know</Link></li>*!/
}
{/!*</ul>*!/
}
*/


// const Topic = ({match}) => (
//   <div>
//     <p>This is the topic component</p>
//
//     {/*<h3>{'match.params ' + match.params.topicId}</h3>*/}
//     {/*<h3>{'match.url ' + match.url}</h3>*/}
//     {/*<h3>{'match.path ' + match.path}</h3>*/}
//   </div>
// );


// #myInput {
//   background-image: url('/css/searchicon.png');
//   background-position: 10px 12px;
//   background-repeat: no-repeat;
//   width: 100%;
//   font-size: 16px;
//   padding: 12px 20px 12px 40px;
//   border: 1px solid #ddd;
//   margin-bottom: 12px;
// }
//
// #myUL {
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
// }
//
// #myUL li a {
//   border: 1px solid #ddd;
//   margin-top: -1px; /* Prevent double borders */
//   background-color: #f6f6f6;
//   padding: 12px;
//   text-decoration: none;
//   font-size: 18px;
//   color: black;
//   display: block
// }
