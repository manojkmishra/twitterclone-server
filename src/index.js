import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json()); //midleware
app.listen(PORT, err => 
{   if (err) {   console.error(err);   } 
    else {  console.log(`App listen to port: ${PORT}`);  }
});