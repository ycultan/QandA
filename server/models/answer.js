var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
    user: String,
    a_text: String,
    detail: String,
    likes: Number,
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
})
mongoose.model('Answer', AnswerSchema);