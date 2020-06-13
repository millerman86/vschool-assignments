module.exports = function(app){
  app.route('/checking').post((req, res) => {
    console.log(req.body);
    // res.status(200).send({"name": "amren"});
    res.send("this is a response")
  });

  app.route('/card').post((req, res) => {
    console.log(req.body);
    res.send({"status": "200"})
  });

  app.route('/cash').post((req, res) => {
    console.log(req.body);
    res.send({"status": "200"})
  });

  app.route('/ach').post((req, res) => {
    console.log(req.body);
    res.send({"status": "200"})
  });
};

// res.status(200).send({"name": "amren"})