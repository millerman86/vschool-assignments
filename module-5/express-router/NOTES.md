# Express Router


You have now experienced the beauty and simplicity of Node and Express - and you have created a few simple back-end servers and enabled your client to talk to it. How cool!

So far we've been putting all of our routes on the app object that was created with the line const app = express(). (app.get(...), app.post(...), etc.) Although this does work, it isn't a very good way to organize our code. If you were to create an application that required 5 different routes, each with its own GET, PUT, POST, and DELETE operations, you would already have 25 routes being handled inside your main server file. We can do better much than that!

Beginning code
The following is the code we'll start out with. To focus on the routing portion of this, we won't be connecting a database or saving any data, but instead just returning a string response so we know our endpoints are working.

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// Routes for 'fruits'
app.get("/fruit", (req, res) => {
    res.send("GET on /fruit endpoint");
});

app.post("/fruit", (req, res) => {
    res.send("POST on /fruit endpoint");
});

app.get("/fruit/:fruitId", (req, res) => {
    res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
});

app.put("/fruit/:fruitId", (req, res) => {
    res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
});

app.delete("/fruit/:fruitId", (req, res) => {
    res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
});


// Routes for 'vegetables'
app.get("/vegetable", (req, res) => {
    res.send("GET on /vegetable endpoint");
});

app.post("/vegetable", (req, res) => {
    res.send("POST on /vegetable endpoint");
});

app.get("/vegetable/:vegetableId", (req, res) => {
    res.send(`GET on /vegetable/${req.params.vegetableId} endpoint`);
});

app.put("/vegetable/:vegetableId", (req, res) => {
    res.send(`PUT on /vegetable/${req.params.vegetableId} endpoint`);
});

app.delete("/vegetables/:vegetableId", (req, res) => {
    res.send(`DELETE on /vegetable/${req.params.vegetableId} endpoint`);
});

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
As you can already see, this would be pretty hard to maintain. There's no separation of concerns, since everything is shoved into one place, and there's tons of repeated code. Fortunately we've learned about Node Modules here and here, and have learned all about different module patterns as well, so now we can use this power to help our cluttered application!

Before we move on, we need to learn about express Routers.

Express Routers
Express comes with a built-in Router that helps us organize our code better, and fortunately it's really easy to use.

const fruitRouter = express.Router();
This line creates an instance of an express Router that allows us to modularize our routes. We can now put our shortcut .get(), .post() etc. methods on this Router instead of directly on the app instance. Then we mount that router as middleware on a specific mount path in server.js:

// Routes for 'fruits'
const fruitRouter = express.Router();

fruitRouter.get("/fruit", (req, res) => {
    res.send("GET on /fruit endpoint");
});

fruitRouter.post("/fruit", (req, res) => {
    res.send("POST on /fruit endpoint");
});

fruitRouter.get("/fruit/:fruitId", (req, res) => {
    res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
});

fruitRouter.put("/fruit/:fruitId", (req, res) => {
    res.send(`PUT on /fruits/${req.params.fruitId} endpoint`);
});

fruitsRouter.delete("/fruit/:fruitId", (req, res) => {
    res.send(`DELETE on /fruits/${req.params.fruitId} endpoint`);
});


// Routes for 'vegetables'
const veggieRouter = express.Router();

veggieRouter.get("/vegetable", (req, res) => {
    res.send("GET on /vegetable endpoint");
});

veggieRouter.post("/vegetable", (req, res) => {
    res.send("POST on /vegetable endpoint");
});

veggieRouter.get("/vegetable/:vegetableId", (req, res) => {
    res.send(`GET  on /vegetable/${req.params.vegetableId} endpoint`);
});

veggiesRouter.put("/vegetable/:vegetableId", (req, res) => {
    res.send(`PUT  on /vegetable/${req.params.vegetableId} endpoint`);
});

veggieRouter.delete("/vegetables/:vegetableId", (req, res) => {
    res.send(`DELETE  on /vegetable/${req.params.vegetableId} endpoint`);
});

// Mount the routers as middleware (we will be making a change here next)
app.use("/", fruitRouter);
app.use("/", veggieRouter);
I know what you're probably thinking - "this is actually a bit MORE cluttered than before, how is this helpful?" It's a legitimate question, to which the answer is "It isn't!" Not yet. We need to put these routes in another file entirely to actually modularize it. But first we need to make a small change before moving on.

Notice all the repetition in the routers? We're re-typing fruitRouter and veggieRouter over and over, AND we're re-typing /fruit and /vegetable over and over inside the route. This is a bad practice, because we may mistype something and cause an unnecessary error. In fact, you might have noticed that there are a few typos in the above code (a few extra pluralized words that shouldn't be pluralized - /fruits, veggiesRouter, etc.)

We can avoid this by doing two things:

Using the Router.route method and chaining our get, post, put, and delete methods together, and
Mounting the middleware at a more specific mount path.
Let's do these things:

1) Refactor to use the Router.route() method:
// Routes for 'fruits'
const fruitRouter = express.Router();

// Here we set the route once with .route("/routeName"), then
// chain the other methods together without repeating the routeName again and again.
fruitRouter.route("/fruit")
    .get((req, res) => {
        res.send("GET on /fruit endpoint");
    })
    .post((req, res) => {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/fruit/:fruitId")
    .get((req, res) => {
        res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
    });


// Routes for 'vegetables'
const veggieRouter = express.Router();

veggieRouter.route("/vegetable")
    .get((req, res) => {
        res.send("GET on /vegetable endpoint");
    })
    .post((req, res) => {
        res.send("POST on /vegetable endpoint");
    });

veggieRouter.route("/vegetable/:vegetableId")
    .get((req, res) => {
        res.send(`GET  on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT  on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE  on /vegetable/${req.params.vegetableId} endpoint`);
    });

app.use("/", fruitRouter);
app.use("/", veggieRouter);
Now I'm only typing the route once, thereby reducing the chance of having a hidden typo. By chaining the HTTP method handlers (.get(), etc.), I remove their first parameter and only have to specify the function to run when that route is reached.

2) Refactor by mounting router to a more specific mount path
// Routes for 'fruits'
const fruitRouter = express.Router();

// We remove the "/fruit" here and put it below in app.use("/fruit", fruitRouter).
// Same goes for the "/fruit/:fruitId" and the "/vegetable" routes as well
fruitRouter.route("/")
    .get((req, res) => {
        res.send("GET on /fruit endpoint");
    })
    .post((req, res) => {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/:fruitId")
    .get((req, res) => {
        res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
    });


// Routes for 'vegetables'
const veggieRouter = express.Router();

veggieRouter.route("/")
    .get((req, res) => {
        res.send("GET on /vegetable endpoint");
    })
    .post((req, res) => {
        res.send("POST on /vegetable endpoint");
    });

veggieRouter.route("/:vegetableId")
    .get((req, res) => {
        res.send(`GET on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /vegetable/${req.params.vegetableId} endpoint`);
    });

// Mount the specified router to be used only on the specified base (mount) path
app.use("/fruit", fruitRouter);
app.use("/vegetable", veggieRouter);
Okay, we've refactored these to be less repetitive, let's modularize!

First we create a new folder called routes in our project, then we'll create 2 new files, fruitRoutes.js and vegetableRoutes.js. In those files we'll need to copy/paste the respective code, and add a reference to express so we can still use the express.Router() line:

// fruitRoutes.js

const express = require("express");
const fruitRouter = express.Router();

fruitRouter.route("/")
    .get((req, res) => {
        res.send("GET on /fruit endpoint");
    })
    .post((req, res) => {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/:fruitId")
    .get((req, res) => {
        res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
    });

// export the entire router so we can require() it in server.js
module.exports = fruitRouter;
// vegetableRoutes.js

const express = require("express");
const veggieRouter = express.Router();

veggieRouter.route("/")
    .get((req, res) => {
        res.send("GET on /vegetable endpoint");
    })
    .post((req, res) => {
        res.send("POST on /vegetable endpoint");
    });

veggieRouter.route("/:vegetableId")
    .get((req, res) => {
        res.send(`GET on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /vegetable/${req.params.vegetableId} endpoint`);
    });

module.exports = veggieRouter;
//server.js

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// You can skip a step by requiring the modules inline like so.
// It works to do the require on its own line as well, it's up to you.
app.use("/fruit", require("./routes/fruitRoutes"));
app.use("/vegetable", require("./routes/vegetableRoutes"));

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
And now we have much more reliable, better-organized, and less error-prone code!

Conclusion
When you're first spinning up your server and just testing a route or two, it's fine to put your routes directly on the app instance. But that should really only be used for testing. It is much safer and a much better practice to modularize your code this way. You can see above how much cleaner the server.js file became after we put the routes in their own folders.