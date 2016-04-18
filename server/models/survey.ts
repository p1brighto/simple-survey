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
	lifeTime: Date,
	isActive: Boolean,
	dateCreated: Date,
	dateUpdated: Date,
	displayName: String
},
{ collection: 'surveySchema' });


export var Survey = mongoose.model('Survey', surveySchema);
