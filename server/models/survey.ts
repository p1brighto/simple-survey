import mongoose = require('mongoose');
import passportLocalMongoose = require('passport-local-mongoose');

var surveySchema = new mongoose.Schema({
	surveyTitle: String,
	surveyType: String,
	shortQuest1: String,
	shortQuest2: String,
	shortQuest3: String,
	shortQuest4: String,
	shortQuest5: String,
	quest1Opt1: String,
	quest1Opt2: String,
	quest1Opt3: String,
	quest1Opt4: String,
	quest2Opt1: String,
	quest2Opt2: String,
	quest2Opt3: String,
	quest2Opt4: String,
	quest3Opt1: String,
	quest3Opt2: String,
	quest3Opt3: String,
	quest3Opt4: String,
	quest4Opt1: String,
	quest4Opt2: String,
	quest4Opt3: String,
	quest4Opt4: String,
	quest5Opt1: String,
	quest5Opt2: String,
	quest5Opt3: String,
	quest5Opt4: String,
	activeTill: Date,
	isActive: Boolean,
	dateCreated: { type: Date, default: Date.now },
	dateUpdated: { type: Date, default: Date.now },
	displayName: String
},
{ collection: 'surveyCollection' });

export var Survey = mongoose.model('Survey', surveySchema);