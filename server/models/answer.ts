import mongoose = require('mongoose');
import passportLocalMongoose = require('passport-local-mongoose');

var answerSchema = new mongoose.Schema({
    surveyTitle: String,
    surveyType: String,
    surveyId: String,
    shortAnswer1: String,
    shortAnswer2: String,
    shortAnswer3: String,
    shortAnswer4: String,
    shortAnswer5: String,
    answer1Opt1: String,
    answer1Opt2: String,
    answer1Opt3: String,
    answer1Opt4: String,
    answer2Opt1: String,
    answer2Opt2: String,
    answer2Opt3: String,
    answer2Opt4: String,
    answer3Opt1: String,
    answer3Opt2: String,
    answer3Opt3: String,
    answer3Opt4: String,
    answer4Opt1: String,
    answer4Opt2: String,
    answer4Opt3: String,
    answer4Opt4: String,
    answer5Opt1: String,
    answer5Opt2: String,
    answer5Opt3: String,
    answer5Opt4: String,
    dateSubmitted: Date,
    displayName: String
},
{ collection: 'answerCollection' });

export var Answer = mongoose.model('Answer', answerSchema);