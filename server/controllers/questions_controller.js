var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = {
    getAll: function(req, res){
        Question.find({})
        .then(question => {
            res.json(question);
        }) 
        .catch(errors => {
            res.status(500).json(errors)
        })
    },
    getOne: function(req, res){
        Question.findOne({_id: req.params.id})
        .then(question => {
            res.json(question);
        })
        .catch(errors => {
            res.status(500).json(errors);
        })
    },
    create: function(req, res){
        var question = new Question(req.body);
        question.save()
        .then( () => {
            res.json(true);
        })
        .catch(errors => {
            res.status(500).json(errors)
        })
    }
}