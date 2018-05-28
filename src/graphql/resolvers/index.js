import TweetResolvers from './tweet-resolvers';
import GraphQLDate from 'graphql-date';

export default 
{  Date: GraphQLDate,
  Query: 
  {   getTweet: TweetResolvers.getTweet,
      getTweets: TweetResolvers.getTweets 
  },
 Mutation: 
  { createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
     deleteTweet: TweetResolvers.deleteTweet,
   }
}