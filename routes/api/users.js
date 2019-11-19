const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');


// ROUTES: register

// router.post('/register', (req, res) => {
//     // Check to make sure nobody has already registered with a duplicate email
//     User.findOne({ username: req.body.username })
//         .then(user => {
//             if (user) {
//                 // Throw a 400 error if the username address already exists
//                 return res.status(400).json({ username: "A user has already registered with this username" })
//             } else {
//                 // Otherwise create a new user
//                 const newUser = new User({
//                     username: req.body.username,
//                     password: req.body.password
//                 })

//                 bcrypt.genSalt(10, (err, salt) => {
//                     bcrypt.hash(newUser.password, salt, (err, hash) => {
//                         if (err) throw err;
//                         newUser.password = hash;
//                         newUser.save()
//                             .then(user => res.json(user))
//                             .catch(err => console.log(err));
//                     })
//                 })
//             }
//         })
// })


module.exports = router;