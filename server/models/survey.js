"use strict";
var mongoose = require('mongoose');
var surveySchema = new mongoose.Schema({
    surveyTitle: String,
    SurveyType: String,
    shortQuest1: String,
    shortQuest2: String,
    shortQuest3: String,
    shortQuest4: String,
    shortQuest5: String,
    lifeTime: Date,
    isActive: Boolean,
    dateCreated: Date,
    dateUpdated: Date,
    displayName: String
}, { collection: 'surveySchema' });
exports.Survey = mongoose.model('Survey', surveySchema);

//# sourceMappingURL=survey.js.map
