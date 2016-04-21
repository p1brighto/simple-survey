import mongoose = require('mongoose');
import passportLocalMongoose = require('passport-local-mongoose');

var answerSchema = new mongoose.Schema({
    surveyTitle: String,
    SurveyType: String,
    shortAnswer1: String,
    shortAnswer2: String,
    shortAnswer3: String,
    shortAnswer4: String,
    shortAnswer5: String,
    dateSubmitted: Date,
    displayName: String
},
{ collection: 'answerCollection' });

export var Answer = mongoose.model('Answer', answerSchema);