const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const {
  Sequelize
} = require('sequelize');
dotenv.config();

const userTestRoute = require('./routes/user.route');

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize('movieRecommend', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, () => {
  console.log('MongoDB is connected.');
});

app.use('/test', userTestRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`)
})