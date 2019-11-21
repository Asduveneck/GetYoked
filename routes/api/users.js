const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');
const validateUpdateUserInput = require('../../validations/update_user')

// ROUTES: register

router.post('/register', (req, res) => {
    console.log(req.body)
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check to make sure nobody has already registered with a duplicate username
    User.findOne({ username: req.body.username })
        .then(user => {
            if (user) {
                // Throw a 400 error if the username address already exists
                return res.status(400).json({ username: "A user has already registered with this username" })
            } else {
                // Otherwise create a new user
                const newUser = new User({
                    username: req.body.username,
                    password: req.body.password,
                    age: req.body.age,
                    height: req.body.height,
                    weight: req.body.weight,
                    activity: req.body.activity,
                    goals: req.body.goals,
                    achievement: 0
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})

// ROUTES: login

router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username})
        .then(user => {
            if (!user) {
                errors.username = 'User not found'
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = { id: user.id }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    } else {
                        errors.password = 'Incorrectt password'
                        return res.status(400).json(errors);
                    }
                })
        })
})

//ROUTES: user show
router.get('/:id', (req, res) => {
    console.log(req.body)
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err =>
            res.status(404).json({ nouserfound: "No user found"})
        )
})


//ROUTES: user udpate
router.patch('/:id', (req, res) => {

    const { errors, isValid } = validateUpdateUserInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findById(req.params.id, (err, user) => {
        if (req.body._id) {
            delete req.body._id;
        }
        for (let attr in req.body) {
            user[attr] = req.body[attr];
        }
        user.save();
        res.json(user);
    })
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ nouserfound: "No user found" }))
        
})

module.exports = router;