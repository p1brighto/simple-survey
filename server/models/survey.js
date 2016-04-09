"use strict";
var mongoose = require('mongoose');
// DEFINE THE OBJECT SCHEMA
var userSchema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'title is required'
    },
    questions: {
        type: String,
        default: '',
        trim: true,
        required: 'questions is required'
    },
    answers: {
        type: String,
        default: '',
        trim: true,
        required: 'questions is required'
    }
}, { collection: 'surveyInfo' });
// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
exports.User = mongoose.model('User', userSchema);

//# sourceMappingURL=survey.js.map
