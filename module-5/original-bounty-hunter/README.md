
The Original Bounty Hunter
Robert Williams
Read more posts by this author.

* This assignment url can be found here: https://coursework.vschool.io/the-original-bounty-hunter/

You are a bounty hunter of the Old Republic. Your parents were killed by a Sith Lord as a child and your goal in life is to kill all the Sith and Jedi.

In order to help you in your quest, and since you are a do-it-yourself kind of bounty hunter, you have learned programming so you can keep track of your bounties and kills!

Objective
Using Express, create an API on the /bounty route that:

GETs a list of all bounties
POSTs new bounties,
DELETEs a bounty
PUTs (updates) a bounty
Since we haven't started connecting to MongoDB quite yet, you can just save your bounties in a bounties array in your server code. Keep in mind that since it isn't being persisted anywhere, anytime you make a change to your server code and restart the server, you'll lose all your bounties.

A bounty object should have:

First Name
Last Name
Living (Boolean)
Bounty Amount (number)
Type (‘Sith’ or ‘Jedi’)
ID (a unique identifier. Use the uuid package to generate unique ids. - npm install uuid and check the docs to see how to use it. It's as simple as requiring the package and running uuid.v4())
Since there isn't a front end set up yet, you'll just use Postman to interact with the server and update the data.

Part 1 - Server Setup and GET & POST routes.
Since we don't have a good way to tell the server which item we want to PUT and DELETE yet, we'll start out just by writing the GET and POST endpoints.

Write a GET endpoint that gets all bounties from the array and sends them to the client.
Write a POST endpoint that adds a new bounty object to the array of bounties.
Remember, you'll have to play the part of the database and add an id property to the incoming bounty before saving it to the array of bounties. This way you'll be able to easily look it up by its id property in order to update and delete it later.
Part 2 - Adding PUT & DELETE
After learning about req.params, now add endpoints that allow you to:

DELETE a bounty from the bounties array, and
PUT (update) an existing bounty.
You'll need to pass the uuid you added when POSTing new bounties as a URL Parameter to the endpoint in order to have a reference to the object you want to update or delete.

Part 3 - Client Setup
For this part you will have to set up a full stack React application. Since you do not have a database yet, ignore the /models folder contained in the example. You instead will have something like bountyData.js which contains your data.

You will now build a client-side React interface for the server you created!

Your app should be a CRUD application - it should be able to Create (POST) new bounties, Read (GET) existing bounties and show them to the user of your site, Update (PUT) existing bounties (e.g. if you wanted to up the price for a bounty), and Delete (DELETE) bounties from the list of all bounties.

You will need to use everything you've learned about state management, HTTP, and forms!

The design is up to you, so have fun with it!