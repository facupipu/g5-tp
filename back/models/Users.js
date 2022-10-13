import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const StatsSchema = new Schema({
  victories: Number,
  favoriteSubject : String,
  record : Number
}, { _id : false});

const UserSchema = new Schema({
  userName : String,
  pasword : String,
  stast : [StatsSchema]
});

const User = mongoose.model('User', UserSchema);

export default User;
