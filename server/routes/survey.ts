import express = require('express');
import passport = require('passport');
var router = express.Router();

// db references
import mongoose = require('mongoose');

import surveyModel = require('../models/survey');
import Survey = surveyModel.Survey;

// Authenticate user
function requireAuth(req:express.Request, res:express.Response, next: any) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

// GET - show main survey page
router.get('/',requireAuth, (req: express.Request, res: express.Response, next: any) => {
  Survey.find(function(error, survey) {
    if (error) {
      console.log(error);
      res.end(error);
    } 
    else {
      res.render('survey/index', {
        title: 'Survey',
        survey: survey,
        displayName: req.user ? req.user.displayName : ''
      });
    }
  });
});

// Choose type of survey you want to create
router.get('/add', requireAuth, function(req: express.Request, res: express.Response, next: any) {
  res.render('survey/add', {
    title: 'Choose your type of survey',
    displayName: req.user ? req.user.displayName : ''
  });
});

// show add short questions page
router.get('/shortquestions-add', requireAuth, function(req: express.Request, res: express.Response, next: any) {
  res.render('survey/shortquestions-add', {
    title: 'Add Short Questions',
    displayName: req.user ? req.user.displayName : ''
  });
});

// save short questions
router.post('/shortquestions-add', function(req: express.Request, res: express.Response, next: any) {
  Survey.create({
    surveyTitle: req.body.surveyTitle,
    surveyType: req.body.surveyType,
    shortQuest1: req.body.shortQuest1,
    shortQuest2: req.body.shortQuest2,
    shortQuest3: req.body.shortQuest3,
    shortQuest4: req.body.shortQuest4,
    shortQuest5: req.body.shortQuest5,
    isActive: req.body.isActive,
    activeTill: req.body.activeTill,
    displayName: req.body.displayName
  }, function(error, Survey) {
    // did we get back an error or valid Survey object?
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.redirect('/dashboard');
    }
  })
});

// Display Edit Page - Short Questions
router.get('/edit-shortquestions/:id', (req: express.Request, res: express.Response, next: any) => {
  var id = req.params.id;
  Survey.findById(id, (error, survey) => {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.render('survey/edit-shortquestions', {
        title: 'Edit Short Questions',
        survey: survey,
        displayName: req.user ? req.user.displayName : ''
      });
    }
  });
});

// Post Edits - Short Questions
router.post('/edit-shortquestions/:id', (req: express.Request, res: express.Response, next: any) => {
  // grab the id from the url parameter
  var id = req.params.id;
  // create and populate an survey object
  var survey = new Survey({
    _id: id,
    surveyTitle: req.body.surveyTitle,
    surveyType: req.body.surveyType,
    shortQuest1: req.body.shortQuest1,
    shortQuest2: req.body.shortQuest2,
    shortQuest3: req.body.shortQuest3,
    shortQuest4: req.body.shortQuest4,
    shortQuest5: req.body.shortQuest5,
    isActive: req.body.isActive,
    activeTill: req.body.activeTill,
    displayName: req.body.displayName
  });
  // run the update using mongoose and our model
  Survey.update({ _id: id }, survey, (error) => {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.redirect('/survey');
    }
  });
});

// Multiple Choice Questions

// Multiple choice questions page
router.get('/multiplechoice-add', requireAuth, function(req: express.Request, res: express.Response, next: any) {
  res.render('survey/multiplechoice-add', {
    title: 'Add Multiple Choice Questions',
    displayName: req.user ? req.user.displayName : ''
  });
});

// Save multiple choice questions
router.post('/multiplechoice-add', function(req: express.Request, res: express.Response, next: any) {
  Survey.create({
    surveyTitle: req.body.surveyTitle,
    surveyType: req.body.surveyType,
    shortQuest1: req.body.shortQuest1,
    shortQuest2: req.body.shortQuest2,
    shortQuest3: req.body.shortQuest3,
    shortQuest4: req.body.shortQuest4,
    shortQuest5: req.body.shortQuest5,
    quest1Opt1: req.body.quest1Opt1,
    quest1Opt2: req.body.quest1Opt2,
    quest1Opt3: req.body.quest1Opt3,
    quest1Opt4: req.body.quest1Opt4,
    quest2Opt1: req.body.quest2Opt1,
    quest2Opt2: req.body.quest2Opt2,
    quest2Opt3: req.body.quest2Opt3,
    quest2Opt4: req.body.quest2Opt4,
    quest3Opt1: req.body.quest3Opt1,
    quest3Opt2: req.body.quest3Opt2,
    quest3Opt3: req.body.quest3Opt3,
    quest3Opt4: req.body.quest3Opt4,
    quest4Opt1: req.body.quest4Opt1,
    quest4Opt2: req.body.quest4Opt2,
    quest4Opt3: req.body.quest4Opt3,
    quest4Opt4: req.body.quest4Opt4,
    quest5Opt1: req.body.quest5Opt1,
    quest5Opt2: req.body.quest5Opt2,
    quest5Opt3: req.body.quest5Opt3,
    quest5Opt4: req.body.quest5Opt4,
    displayName: req.body.displayName
  }, function(error, Survey) {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.redirect('/dashboard');
    }
  })
});

// Display Edit Page - Short Questions
router.get('/edit-multiplechoice/:id', (req: express.Request, res: express.Response, next: any) => {
  var id = req.params.id;
  Survey.findById(id, (error, survey) => {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.render('survey/edit-multiplechoice', {
        title: 'Edit Multiple Choice Questions',
        survey: survey,
        displayName: req.user ? req.user.displayName : ''
      });
    }
  });
});

// Post Edits - Short Questions
router.post('/edit-multiplechoice/:id', (req: express.Request, res: express.Response, next: any) => {
  // grab the id from the url parameter
  var id = req.params.id;
  // create and populate an survey object
  var survey = new Survey({
    _id: id,
    surveyTitle: req.body.surveyTitle,
    surveyContent: req.body.surveyContent,
    idName: req.body.idName
  });
  // run the update using mongoose and our model
  Survey.update({ _id: id }, survey, (error) => {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.redirect('/survey');
    }
  });
});

// GET delete survey
router.get('/delete/:id', (req: express.Request, res: express.Response, next: any) => {
  // get the id from the url
  var id = req.params.id;

  // use the model and delete this record
  Survey.remove({ _id: id }, (error) => {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.redirect('/survey');
    }
  });
});

// make this public
module.exports = router;