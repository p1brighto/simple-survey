"use strict";
var express = require('express');
var router = express.Router();
var answerModel = require('../models/answer');
var Answer = answerModel.Answer;
var surveyModel = require('../models/survey');
var Survey = surveyModel.Survey;
router.get('/participate-shortquestions/:id', function (req, res, next) {
    var id = req.params.id;
    Survey.findById(id, function (error, survey) {
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
router.post('/participate-shortquestions/:id', function (req, res, next) {
    var id = req.params.id;
    Answer.create({
        surveyTitle: req.body.surveyTitle,
        surveyType: req.body.surveyType,
        surveyId: id,
        shortAnswer1: req.body.shortAnswer1,
        shortAnswer2: req.body.shortAnswer2,
        shortAnswer3: req.body.shortAnswer3,
        shortAnswer4: req.body.shortAnswer4,
        shortAnswer5: req.body.shortAnswer5,
        displayName: req.body.displayName
    }, function (error, Answer) {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            res.redirect('/browse-surveys');
        }
    });
});
router.get('/participate-multiplechoice/:id', function (req, res, next) {
    var id = req.params.id;
    Survey.findById(id, function (error, survey) {
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
router.post('/participate-multiplechoice/:id', function (req, res, next) {
    var id = req.params.id;
    Answer.create({
        surveyTitle: req.body.surveyTitle,
        surveyType: req.body.surveyType,
        surveyId: id,
        answer1Opt1: req.body.answer1Opt1,
        answer1Opt2: req.body.answer1Opt2,
        answer1Opt3: req.body.answer1Opt3,
        answer1Opt4: req.body.answer1Opt4,
        answer2Opt1: req.body.answer2Opt1,
        answer2Opt2: req.body.answer2Opt2,
        answer2Opt3: req.body.answer2Opt3,
        answer2Opt4: req.body.answer2Opt4,
        answer3Opt1: req.body.answer3Opt1,
        answer3Opt2: req.body.answer3Opt2,
        answer3Opt3: req.body.answer3Opt3,
        answer3Opt4: req.body.answer3Opt4,
        answer4Opt1: req.body.answer4Opt1,
        answer4Opt2: req.body.answer4Opt2,
        answer4Opt3: req.body.answer4Opt3,
        answer4Opt4: req.body.answer4Opt4,
        answer5Opt1: req.body.answer5Opt1,
        answer5Opt2: req.body.answer5Opt2,
        answer5Opt3: req.body.answer5Opt3,
        answer5Opt4: req.body.answer5Opt4,
    }, function (error, Answer) {
        if (error) {
            console.log(error);
            res.end(error);
        }
        else {
            res.redirect('/browse-surveys');
        }
    });
});
// make this public
module.exports = router;

//# sourceMappingURL=answer.js.map
