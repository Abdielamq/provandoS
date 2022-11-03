'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = Schema({
    nombres: {type: String , default:'Abdiel Jomar' ,required: true},
    apellidos: {type: String, default:'Meza Quinto' , required: true},
    email: {type: String, default:'amq@gmail.com' , required: true},
    password: {type: String, default:'123456' ,required: true},
    rol: {type: String, default:'admin' ,required: true},
});

module.exports =  mongoose.model('admin',AdminSchema);