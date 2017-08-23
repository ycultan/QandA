
var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {
    getAll: function(req, res){
        Question.findOne({_id: req.params.q_id})
        .populate('_answers')
        .exec(function(errors, question){
            if(errors){
                res.status(500).json(errors);
            } else {
                res.json(question)
            }
        })
    },
    create: function(req, res){
        Question.findOne({_id: req.params.q_id}, function(errors, question){
            var answer = new Answer(req.body);
            answer._question = question._id;
            answer.save(function(errors){
                question._answers.push(answer);
                question.save(function(errors){
                    if(errors){
                        res.status(500).json(errors);
                    } else {
                        res.json(true);
                    }
                })
            })
        })
    },
    updateLikes: function(req, res){
        console.log(req.params.a_id);
        Answer.findOneAndUpdate({_id: req.params.a_id}, {$inc: {likes: 1}},
        function(err, response){
            if (err) {
                res.json(0);
            } else {
                res.json(response);
            }
        })
    }
}