# Rock The Vote - Module 6

The deploy for this website can be found here: https://clever-northcutt-c44592.netlify.app

![](readme-images/rockthevoteimage.jpeg)

You are going to create a full stack application with user authentication created with Node, React, Express, Mongoose & Mongodb that allows users to post and upvote or downvote political issues.

Requirements:
- A login/signup page that is required to visit any part of the application. <input type="checkbox" checked>
- Web page that shows a list of political issues. <input type="checkbox" checked>
    - Each item will have a title <input type="checkbox" checked>
    - Each item will have a description <input type="checkbox" checked>
    - Each item can be upvoted or downvoted. <input type="checkbox" checked>
        - User's should only be able to upvote/downvote once per issue. <input type="checkbox" checked>
    - Items will be ordered by upvotes (the most being at the top). <input type="checkbox" checked>
    - Each item should show the total number of votes <input type="checkbox" checked>
- Include a page that will allow logged in users to add new posts. <input type="checkbox" checked>
- Include a page that will allow logged in users to view all posts they personally made. <input type="checkbox" checked>
- Users can comment on posts (unlimited number of comments per post) <input type="checkbox" checked>
- You will create a back end with the needed 'models' and 'routes' so that all topics, comments, and votes are persistent. <input type="checkbox" checked>
- Use React for the front-end <input type="checkbox" checked>
- Use Node/Express for the back-end <input type="checkbox" checked>
- Use MongoDB and Mongoose for your database and models <input type="checkbox" checked>
- Use dotenv, jsonwebtoken & expressJwt to manage user authentication. <input type="checkbox" checked>
- Clearly you will need the ability to GET, POST, PUT, and DELETE. <input type="checkbox" checked>

You will want to approach this project in 3 parts while following the Module 6 vidoes and associated git repository. After implementing the user authentication code with the videos using the git repository provided, replicate that code again for this project.

After Part 3 of the video series you should have user authentication and basic routing set up so that you can continue to develop the rest of this application.

### Suggestions
- Consider making the following models:

    - User.js
    - Issue.js ( related to the user that created it )
    - Comment.js ( related to the issue it was commented on, and related to the user that created the comment )
    - Due to the amount of functionality, consider using 2 context providers. One that manages the authentication/user functionality of the app, and another that manages the issues and comments.

- Due to the amount of state and state update operations you made need, consider using useReducer to manage context state. Using useState will work as well.

- You will need to manage one to many & many to many database relationships. The one to many relationships will be relating the user to issues, and relating the comments to users and to issues. The many to many relationships will be part of the upvote/downvote process as issues can be upvoted/downvoted by many users, and many users can upvote/downvote many issues. This will be needed to make sure that a "issue" can only be upvoted/downvoted once per user.

This is a fully functional front-end and back-end application including a persistent database and user authentication. It will push you to create a fully responsive user driven application and help you brainstorm what you may want to make for your personal full stack application final project.