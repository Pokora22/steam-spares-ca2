import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: String,
    title: String,
    content: String,
    comments: [],
    updated: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('Comment', CommentSchema);