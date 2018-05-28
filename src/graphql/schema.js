export default `
  type Tweet { _id: ID! text: String!  }
  type Query 
  { getTweet(_id: ID!): Tweet
    getTweets: [Tweet]  
  }
  schema {  query: Query  }
`;
