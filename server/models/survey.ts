import mongoose = require('mongoose');
import passportLocalMongoose = require('passport-local-mongoose');

var surveySchema = new mongoose.Schema({
	surveyTitle: String,
	SurveyType: String,
	shortQuest1: String,
	shortQuest2: String,
	shortQuest3: String,
	shortQuest4: String,
	shortQuest5: String,
	activeTill: Date,
	isActive: Boolean,
	dateCreated: { type: Date, default: Date.now },
	dateUpdated: { type: Date, default: Date.now },
	displayName: String
},
{ collection: 'surveyCollection' });

export var Survey = mongoose.model('Survey', surveySchema);