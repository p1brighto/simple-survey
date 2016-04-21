"use strict";
var mongoose = require('mongoose');
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
}, { collection: 'answerCollection' });
exports.Answer = mongoose.model('Answer', answerSchema);

//# sourceMappingURL=answer.js.map
