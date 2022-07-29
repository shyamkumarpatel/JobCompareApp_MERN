const mongoose = require("mongoose");

const PetSchema  = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Job title is requried"],
        minlength : [3, "Job title must be at least 3 characters long"],
    },
    companyName : {
        type : String,
        required : [true, "Company Name is requried"],
        minlength : [3, "Company Name must be at least 3 characters long"],
    },
    description : {
        type : String,
        required : [true, "Job description is requried"],
        minlength : [3, "Job description must be at least 3 characters long"]
    },
    location : {
        type : String,
        required : [true, "Location is requried"],
        minlength : [3, "Job Location must be at least 3 characters long"]
    },
    source : {
        type : String,
        required : [true, "Job source is requried"],
        minlength : [3, "Job source must be at least 3 characters long"],
    },
    additionalAttributes : [],
    applicationStatus : {type : String},
    applicationNotes : {type : String},
},{timestamps: true});

const Jobs = mongoose.model("Jobs", PetSchema );

module.exports = Jobs;