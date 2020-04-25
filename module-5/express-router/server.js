const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const fruitRouter = require('./routes/fruitRouter')
const veggieRouter = require('./routes/veggieRouter')

app.use("/fruit", fruitRouter);
app.use("/vegetable", veggieRouter);


// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});