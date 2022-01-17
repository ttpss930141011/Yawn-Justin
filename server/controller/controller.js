var popDB = require('../model/model');

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{
    popDB.find()
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
        })
    

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    popDB.findByIdAndUpdate('61b20d08ba03f4815c1f2a4b', {$inc: { 'count': 1}})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data['count'].toString())
            }
        })
        .catch(err =>{
            res.status(500).send({ message : `Error Update user information ${err}`})
        })
}

