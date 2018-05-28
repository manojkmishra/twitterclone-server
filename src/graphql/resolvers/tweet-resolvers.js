import Tweet from '../../models/Tweet';
export default 
{ getTweet:  (_, { _id }) =>  Tweet.findById(_id),  //first param empty--second is of type _id from schema
  getTweets: () => Tweet.find({}),  //give me everything coming in from collection tweet
  createTweet: (_, args) =>Tweet.create(args), //all the args from schema required
  updateTweet: (_, { _id, ...rest }) => Tweet.findByIdAndUpdate(_id,rest, {new:true}),
  deleteTweet: async (_, { _id }) => 
      { try {  await Tweet.findByIdAndRemove( _id);
              //if (!tweet) {  throw new Error('Not found!');  }
             // else
               return {  message: 'Delete Success!'  }
            } catch (error) { throw error; }
      },
};