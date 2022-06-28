const path= require('path');
const express= require('express');
const bodyParser= require('body-parser');
const app= express();

app.use(bodyParser.urlencoded({ extended:false }));

const errorcontroller= require('./controllers/error');

app.use(express.static(path.join(__dirname,'public')));
const loginroutes= require('./routes/login');
const signuproutes= require('./routes/signup');
const musicroutes= require('./routes/music');
const homeaftersignroutes= require('./routes/homeaftersign');


app.use(loginroutes);
app.use(signuproutes);
app.use(musicroutes);
app.use(homeaftersignroutes);

app.use(errorcontroller.get404);

app.listen(9000);
