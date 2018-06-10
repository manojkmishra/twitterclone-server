import mongoose, { Schema } from 'mongoose';
import Tweet from './Tweet';
import { TWEET_FAVORITED } from '../graphql/resolvers/tweet-resolvers';

const FavoriteTweetSchema = new Schema(
{  userId: { type: Schema.Types.ObjectId,  ref: 'User',  },    //userId is object
  tweets: [{  type: Schema.Types.ObjectId,  ref: 'Tweet',},],  //tweets is an array
});

FavoriteTweetSchema.methods = 
{  async userFavoritedTweet(tweetId) 
    {   if (this.tweets.some(t => t.equals(tweetId))) 
         {   this.tweets.pull(tweetId);
             await this.save();
             const tweet = await Tweet.decFavoriteCount(tweetId);
             const t = tweet.toJSON();
             return {   isFavorited: false,   ...t,  };
         }
    const tweet = await Tweet.incFavoriteCount(tweetId);
    const t = tweet.toJSON();
    this.tweets.push(tweetId);
    await this.save();
    return { isFavorited: true,  ...t, };
  },
};

FavoriteTweetSchema.index({ userId: 1 }, { unique: true });

export default mongoose.model('FavoriteTweet', FavoriteTweetSchema);
