//user: HasanShanto pass: hcl0ozMdIS1clpg7

const express = require('express');
const mongoose = require('mongoose');

const app = express();



mongoose.connect("mongodb+srv://HasanShanto:hcl0ozMdIS1clpg7@cluster0.fpeawhd.mongodb.net/?retryWrites=true&w=majority").then(() => app.listen(9000)).then(() => console.log('Connected To The MongoDB')).catch((err) => console.log(err));
;