export default `
  scalar Date
  type Status {  message: String! }
  type Auth1 { token: String! }
  type Tweet { _id: ID! text: String! createdAt: Date!  updatedAt: Date!  }
  type User { _id: ID! username: String email: String! firstName: String lastName: String avatar: String createdAt: Date! updatedAt: Date!  }

  type Query 
  { getTweet(_id: ID!): Tweet
    getTweets: [Tweet]  
  }

  type Mutation 
  { createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth1
    login(email: String!, password: String!): Auth1
  }

  schema {  query: Query  
            mutation: Mutation
         }
`;
