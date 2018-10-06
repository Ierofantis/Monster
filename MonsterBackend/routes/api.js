var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Article = require("../models/Articles");
var Comment = require("../models/Comments");

router.post('/signup', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: 'Username already exists.' });
      }
      res.json({ success: true, msg: 'Successful created new user.' });
    });
  }
});

router.post('/signin', function (req, res) {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);

          // return the information including token as JSON
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});

router.post('/article', function (req, res) {

  var newArticle = new Article({
    loop: req.body.loop,
    username: req.body.username,
    title: req.body.title
  });
  newArticle['id'] = newArticle._id;

  // save the article
  newArticle.save(function (err) {
    if (err) {
      return res.json({ success: false, msg: err });
    }
    res.json({ success: true, msg: 'Successful created new article' });
  });
});

router.post('/comment', function (req, res) {

  var comment = new Comment({
    ArticleId: req.body.ArticleId,
    comment: req.body.comment
  });

  comment.save(function (err) {
    if (err) {
      return res.json({ success: false, msg: err });
    }
    res.json({ success: true, msg: 'Successful created a comment' });

  });
});

router.post('/destroy', function (req, res) {
  var id = req.body.id;
  Article.findByIdAndRemove(id, req.body, function (err) {
    if (err) {
      return res.json({ success: false, msg: err });
    }
    res.json({ success: true, msg: 'Successful deleted Article' });
  })
})

router.get('/getComments', function (req, res) {
  Comment.find({}, (err, posts) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});

router.get('/mainLoop', function (req, res) {
  Article.find({}, (err, posts) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(posts);
    }
  }).sort({ '_id': -1 });
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;