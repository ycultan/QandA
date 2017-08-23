var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    q_text: String,
    description: String,
    _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})
mongoose.model('Question', QuestionSchema);