# Thing Finder

Choose a thing/noun of any kind, then write an express server with a GET route that sends back an array of that thing. <input type="checkbox" checked>
My noun is= notebook, just like in Evernote

Your GET endpoint should be able to check for any query parameters that may have been passed into the url of the request and filter the results based on those query parameters. (Such as id, name)

For example, let's say I chose "fruit" as my noun. A GET request to http://localhost:8000/fruit would return an array with all fruits on my server (use an array to store the fruits, and you may want to hard code a few in there so you have some data to work with when the server restarts itself.).

However, a GET request to http://localhost:8000/fruit?type=banana should filter out any fruits in the array that don't have a type of banana and return an array to me (in Postman, Angular, or whatever front end I'm using) with only the objects with a type of banana.

For the purposes of this exercise, you can write your server code with the assumption that there is only one query parameter option available. So in the above example, I can write my server's GET route to only filter if req.query.type isn't undefined.

Feel free to use the inventory array below.

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

EXTRA CREDIT:

Write another route where an API user can filter by a maxium price AND a minium price. You can make the maxium default to 1000000 and the minimum defualt to 0

Consolidate the two end points you've already written.

If you are stuck:

USE THE LINES OF CODE BELOW AFTER ATTEMPTING TO WRITE THE CODE YOURSELF.

This doesn't give you all the answers, but may help you on your way.

app.get("/", (req, res)=>{
    console.log(req.query);
});
A really good method to filter out all of the items you need is the filter method.

MORE SPOILERS BELOW!! If you scroll down, you agree that a bit of struggle is good for the learning process.
Attempting problems on your own helps you with:

Confidence in your ability when you get it on you own
Getting feedback from your code for the part that you understand yourself, and then seeing what you might on done wrong when you see how you could have done it
Increasing your understanding of the different parts of the problem if all you were able to do on your own was think about what the exercise was asking for, and think through how you might do it
const filteredItems = __________.______(_____ => {
    ______ ____.____ === ___.____.___
})
There's a lot of blanks there, fill them in with AT LEAST educated guesses, and then compare your version

const filteredItems = inventoryItems.filter(___ => {
    ______ item.type === req.query.type
})
If this is challenging to you, you may want to consider redoing the array iterator methods .map(), .find(), .filter(), .some(), .every(), and any others.

These methods have a lot in common. If you're getting better at one, you're getting better at them all.