var popDB = require('../model/model');
exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    popDB.find()
        .then(data => {
            res.render('index', { 
                yawn : data[0]['count']
            });
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
        })
    
}
