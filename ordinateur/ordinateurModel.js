var mongoose = require('mongoose')
const { boolean } = require('yup')
var Schema = mongoose.Schema
var Ordinateur = new Schema({
    modele : String,
    categorie : String,
    date_fabrication : Date,
    prix : Number
})
module.exports = mongoose.model('ordinateurs', Ordinateur)