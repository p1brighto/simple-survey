import express = require('express');
import passport = require('passport');
var router = express.Router();

// db references
import mongoose = require('mongoose');

import answerModel = require('../models/answer');
import Answer = answerModel.Answer;

import surveyModel = require('../models/survey');
import Survey = surveyModel.Survey;

// GET - show main survey page
router.get('/', (req: express.Request, res: express.Response, next: any) => {
  // use the Survey model to query the Surveys collection
  Answer.find(function(error, survey) {
    if (error) {
      console.log(error);
      res.end(error);
    } 
    else {
      // no error, we found a list of surveys
      res.render('survey/index', {
        title: 'Survey',
        survey: survey,
        displayName: req.user ? req.user.displayName : ''
      });
    }
  });
});

// Show page with survey options to create
router.get('/add', function(req: express.Request, res: express.Response, next: any) {
  res.render('survey/add', {
    title: 'Choose your type of survey',
    displayName: req.user ? req.user.displayName : ''
  });
});


router.get('/:id', (req: express.Request, res: express.Response, next: any) => {
  
  var id = req.params.id;
  Survey.findById(id, (error, survey) => {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      //show the edit view
      res.render('answer/participate', {
        title: 'Participate',
        survey: survey,
        displayName: req.user ? req.user.displayName : ''
      });
    }
  });

});

// Post answer
router.post('/:id', function(req: express.Request, res: express.Response, next: any) {
  Answer.create({
    surveyTitle: req.body.surveyTitle,
    SurveyType: req.body.surveyType,
    shortQuest1: req.body.shortAnswer1,
    shortQuest2: req.body.shortAnswer2,
    shortQuest3: req.body.shortAnswer3,
    shortQuest4: req.body.shortAnswer4,
    shortQuest5: req.body.shortAnswer5,
    displayName: req.body.displayName
  }, function(error, Answer) {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.redirect('/browse-surveys');
    }
  })
});


// GET add page - show the blank form
/*router.get('/participate', function(req: express.Request, res: express.Response, next: any) {
  res.render('answer/participate', {
    title: 'Add Short Questions',
    displayName: req.user ? req.user.displayName : ''
  });
});*/

// POST add page - save the new survey
router.post('/shortquestions-add', function(req: express.Request, res: express.Response, next: any) {
  Answer.create({
    surveyTitle: req.body.surveyTitle,
    SurveyType: req.body.surveyType,
    shortQuest1: req.body.shortQuest1,
    shortQuest2: req.body.shortQuest2,
    shortQuest3: req.body.shortQuest3,
    shortQuest4: req.body.shortQuest4,
    shortQuest5: req.body.shortQuest5,
    displayName: req.body.displayName       
  }, function(error, Answer) {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      res.redirect('/');
    }
  })
});

// make this public
module.exports = router;