const express = require("express");
const app = express();
const port = process.env.PORT_ENV || 9000;
const notebookRouter = require("./routers/notebookRouter");


app.use("/notebook", notebookRouter);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
