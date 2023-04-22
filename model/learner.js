const mongoose= require('mongoose')
const Schema = mongoose.Schema

const learner = new Schema({
   
    learnerid:{
       type: String,
      required:true},
    name:{
    type:  String,
    required:true},
    course:{
    type:String,
    required:true},
    project:{
    type:String,
    required:true},
    batch:{
    type:String,
    required:true},
    coursestatus:{
    type:String,
    required:true},
    placementstatus:{
        type:String,
        required:true}
    


})
const LearnerData = mongoose.model('learner',learner);
module.exports = LearnerData