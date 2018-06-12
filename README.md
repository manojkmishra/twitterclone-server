# twitterclone-server
Twitter mobile app clone server side using nodeJS, Express,mongoose, graphql, jsonwebtoken etc (on Windows)

#Steps during Development

PS C:\RNTWITTER\server> yarn init
yarn init v1.3.2
question name (server):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url:
question author: manojkmishra
question license (MIT):
question private:
success Saved package.json
Done in 18.89s.

PS C:\RNTWITTER\server> git init
Initialized empty Git repository in C:/RNTWITTER/server/.git/
PS C:\RNTWITTER\server> git add .
PS C:\RNTWITTER\server> git commit -m "Initial commit"
[master (root-commit) 8c93a13] Initial commit
 2 files changed, 8 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 package.json

PS C:\RNTWITTER\server> git remote add origin https://github.com/manojkmishra/twitterclone-server.git
PS C:\RNTWITTER\server> git push -u --force origin master
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': manojkmishra
Password for 'https://manojkmishra@github.com':
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 366 bytes | 183.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0)
To https://github.com/manojkmishra/twitterclone-server.git
 + 7c2fdd9...8c93a13 master -> master (forced update)
Branch master set up to track remote branch master from origin.
PS C:\RNTWITTER\server>
PS C:\RNTWITTER\server> yarn add express body-parser cross-env
PS C:\RNTWITTER\server> yarn add babel-plugin-transform-object-rest-spread babel-cli babel-preset-env

-----------create folder----------------/src-------inside create------------------index.js
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json()); //midleware
app.listen(PORT, err => 
{ if (err) { console.error(err); } 
else { console.log(`App listen to port: ${PORT}`); }
});

--------create/.babelrc--------------because nodejs--does not know es6---so now tell babel--that node 6.10 is used
{
"presets": [ [ "env", { "targets": { "node": "6.10" } } ] ],
"plugins": [ [ "transform-object-rest-spread", { "useBuiltIns": true } ] ]
}
--------------------in package.json------------add script-----to tell node that babel-node will handle if----yarn dev 
{
"name": "server",
"version": "1.0.0",
"main": "index.js",
"author": "manojkmishra",
"license": "MIT",
"scripts": {
"dev": "cross-env NODE_ENV=dev babel-node src/index.js"
},
"dependencies": {
"babel-cli": "^6.26.0",
"babel-plugin-transform-object-rest-spread": "^6.26.0",
"babel-preset-env": "^1.7.0",
"body-parser": "^1.18.3",
"cross-env": "^5.1.6",
"express": "^4.16.3"
}
}
---------------------yarn dev----
PS C:\RNTWITTER\server> yarn dev
yarn run v1.3.2
$ cross-env NODE_ENV=dev babel-node src/index.js
App listen to port: 3000
-----------------------------------PS C:\RNTWITTER\server> yarn add -D nodemon-----------------------------
"scripts": {
"dev": "cross-env NODE_ENV=dev nodemon --exec babel-node src/index.js"
},

---so now---------nodemon----handles the server and changes happens on runtime--if we change even the port in /src/index.js
PS C:\RNTWITTER\server> yarn dev
yarn run v1.3.2
$ cross-env NODE_ENV=dev nodemon --exec babel-node src/index.js
[nodemon] 1.17.5
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `babel-node src/index.js`
App listen to port: 3000
[nodemon] restarting due to changes...
[nodemon] starting `babel-node src/index.js`
App listen to port: 3001
----------------install mongo------------create--folder /src/config-----inside-------constants.js----------db.js---------------
PS C:\RNTWITTER\server> yarn add mongoose--------------api---to talk to mongodb
-----------/src/config/constatns.js
export default
{ PORT: process.env.PORT || 3000,
DB_URL: 'mongodb://localhost/tweet-development',
};
<table>
  <tr>
    <td><img src="./screenshots/1-mongo.png" width="200"></td>
</tr>
</table>
-----------/src/config/db.js

