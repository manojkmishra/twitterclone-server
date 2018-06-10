import mongoose, { Schema } from 'mongoose';

const FavoriteTweetSchema = new Schema(
{  userId: { type: Schema.Types.ObjectId,  ref: 'User',  },    //userId is object
  tweets: [{  type: Schema.Types.ObjectId,  ref: 'Tweet',},],  //tweets is an array
});

FavoriteTweetSchema.index({ userId: 1 }, { unique: true });

export default mongoose.model('FavoriteTweet', FavoriteTweetSchema);
