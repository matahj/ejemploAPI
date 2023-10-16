const User = require('./models/user');
const Task = require('./models/task');
const { connect, sync } = require('./models/sequelize');

exports.initDatabase = async function () {
    User.hasMany(Task);
    Task.belongsTo(User);

    await connect();
    await sync();
}