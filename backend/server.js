const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();

const userTestRoute = require('./routes/user.route');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology:true, useNewUrlParser:true }, () => {
    console.log('MongoDB is connected.');
});

app.use('/test', userTestRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at ${process.env.PORT}`)
})