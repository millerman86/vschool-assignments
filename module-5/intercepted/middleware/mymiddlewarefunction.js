const middlewareFunction = (req, res, next) => {
    console.log(req);
    res.send('blah')
    next()
}

module.exports = middlewareFunction