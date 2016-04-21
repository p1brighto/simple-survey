import express = require('express');
import passport = require('passport');
var router = express.Router();

// db references
import mongoose = require('mongoose');

import answerModel = require('../models/answer');
import Answer = answerModel.Answer;

import surveyModel = require('../models/survey');
import Survey = surveyModel.Survey;


router.get('/participate-shortquestions/:id', (req: express.Request, res: express.Response, next: any) => {
  var id = req.params.id;
  Survey.findById(id, (error, survey) => {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      //show the edit view
      res.render('answer/participate-shortquestions', {
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

router.get('/participate-multiplechoice/:id', (req: express.Request, res: express.Response, next: any) => {
  var id = req.params.id;
  Survey.findById(id, (error, survey) => {
    if (error) {
      console.log(error);
      res.end(error);
    }
    else {
      //show the edit view
      res.render('answer/participate-multiplechoice', {
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


// make this public
module.exports = router;