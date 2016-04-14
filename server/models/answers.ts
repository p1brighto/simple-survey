import mongoose = require('mongoose');
import passportLocalMongoose = require('passport-local-mongoose');


var answerSchema = new mongoose.Schema({
    surveyTitle: {
        type: String,
        default: '',
        trim: true,
        required: 'Survey Title is required'
    },
    isActive: {
            type: Boolean,
            default: true
    },
    Ans1: {
        type: String,
        default: '',
        trim: true,
        required: 'Please enter your Question.'
    },
    Ans1Opt1: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans1Opt2: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans1Opt3: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans1Opt4: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans2: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your Question.'
    },
    Ans2Opt1: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans2Opt2: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans2Opt3: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans2Opt4: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans3: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your Question.'
    },
    Ans3Opt1: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans3Opt2: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans3Opt3: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans3Opt4: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans4: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your Question.'
    },
    Ans4Opt1: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans4Opt2: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans4Opt3: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans4Opt4: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans5: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your Question.'
    },
    Ans5Opt1: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans5Opt2: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans5Opt3: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    Ans5Opt4: {
            type: String,
            default: '',
            trim: true,
            required: 'Please enter your option.'
    },
    idName:{
        type: String,
        default: '',
        trim: true,
        required: 'Display name is required'
    }
},
{ collection: 'surveyInfo' });


export var Survey = mongoose.model('Survey', answerSchema);
