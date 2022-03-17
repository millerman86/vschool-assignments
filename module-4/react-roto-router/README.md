Exercise
For this exercise you will be making a mock SPA (Single Page Application) for a plumbing company website.

Your website must contain a navbar, footer, and a main view section. Your navbar must contain at least 3 Link tags to at least 3 different views (for example Home, About, and Services).

The goal is to become proficient in using the three basic React-Router components: Link,Switch, and Route.

Make sure to npm install react-router-dom and wrap your App component inside BrowserRouter:

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, 
  document.getElementById("root");
);
For a refresher on how React Router works, check out our post about it