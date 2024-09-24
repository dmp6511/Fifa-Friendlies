// Schema for Account Model

// use bcrypt and mongoose for encrypting passwords and acessing the MongoDB
const bcrypt = require('bcrypt');

const saltRounds = 10;
let AccountModel = {};

// schema
const AcountSchema = new mongoose.Schema({

    // first name
    firstname: {
        type: String,
        required: true,
        trim: true,
    },

    // username
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true, // to avoid duplicate usernames in the DB
        match: /^[A-Za-z0-9_\-.]{1,16}$/,
    },

    // password
    password: {
        type: String,
        required: true,
    },

    // createdDate
    createdDate: {
        type: Date,
        default: Date.now,
    }


})