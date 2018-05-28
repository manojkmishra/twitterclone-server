import Tweet from '../../models/Tweet';
export default 
{   getTweets: () => Tweet.find({})  //give me everything coming in from collection tweet
}