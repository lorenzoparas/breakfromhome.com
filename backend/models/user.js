import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    // email: String,
    // favouriteWebsites: [String],
    // workingDays: [String],
    // startTime: Number,
    // endTime: Number,
    // minuteInterval: Number
})

var User = mongoose.model('User', userSchema);

export default User;
