const mongoose = require('mongoose');
const UserTasks = require('./userTask');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const connectDB = () =>
  mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/bunny-task',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

const models = {
  UserTasks,
};

module.exports = { connectDB, models };
