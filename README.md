# twitterclone-server

**Twitter mobile app clone (server side) using nodeJS, Express,mongoose, graphql, apollo-server-express, jsonwebtoken etc (on Windows)**

**#Steps: Installation**
1. git clone https://github.com/manojkmishra/twitterclone-server.git
2. npm install 
3. start mongoDB server on your PC
4. yarn dev  (yarn can be downloaded from https://yarnpkg.com/latest.msi)
![enter image description here](https://github.com/manojkmishra/twitterclone-server/blob/master/screenshots/Server%20Running.PNG)
5. Uncomment line number 39 and 46 from /src/index.js and run the server again using yarn dev. MongoDB  will be updated with fake tweets. Then comment these lines again.
![enter image description here](https://github.com/manojkmishra/twitterclone-server/blob/master/screenshots/Run%20Faker.PNG)
![enter image description here](https://github.com/manojkmishra/twitterclone-server/blob/master/screenshots/MongoDB-faker.PNG)
6. Download and install GraphiQL from https://github.com/skevy/graphiql-app/releases
 Create a new user as shown using mutation ( signup), then add the jwt in HTTP headers and access the Tweets as shown ![enter image description here](https://github.com/manojkmishra/twitterclone-server/blob/master/screenshots/GraphiQL-%20Signup.PNG)
![enter image description here](https://github.com/manojkmishra/twitterclone-server/blob/master/screenshots/GraphiQL-%20AddJwtinHTTPheader.PNG)
![enter image description here](https://github.com/manojkmishra/twitterclone-server/blob/master/screenshots/GraphiQL-%20getTweets.PNG)


