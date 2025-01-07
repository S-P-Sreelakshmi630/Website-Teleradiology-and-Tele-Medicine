const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');


module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, username, password, done) {
        process.nextTick(function() {
            User.findOne({ 'username': username }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {
                    return done(null, false, { message: 'That username is already taken.' });
                } else {
                    const newUser = new User();
                    newUser.username = username;
                    newUser.password = password;
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }));


    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, username, password, done) {
        User.findOne({ 'username': username }, function(err, user) {
            if (err)
                return done(err);

            if (!user)
                return done(null, false, { message: 'No user found.' });

            if (!user.verifyPassword(password))
                return done(null, false, { message: 'Oops! Wrong password.' });

            return done(null, user);
        });
    }));
};