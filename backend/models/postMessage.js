import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// const account = mongoose.Schema({
//     username: String,
//     password: String,
//     email: String,
//     websites: [String],
//     startTime: String,
//     endTime: String,
//     daysActive: [Boolean],
//     intervalMinutes: Number
// });

const PostMessage = mongoose.model('PostMessge', postSchema);

export default PostMessage;