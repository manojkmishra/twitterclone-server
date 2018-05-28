import Tweet from '../../models/Tweet';
export default 
{ getTweet: async (_, { _id }) =>  Tweet.findById(_id),  //first param empty--second is of type _id from schema
  getTweets: () => Tweet.find({})  //give me everything coming in from collection tweet
}