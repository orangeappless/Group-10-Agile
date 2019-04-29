const MongoClient = require('mongodb').MongoClient;

let _dbUser = null;

getDb = () => {
    return _dbUser;
};

getObjectId = () => {
    return require('mongodb').ObjectID;
};

init = (callback) => {
    MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/forumdb', (err, client) => {
        if (err) {
            return console.log('Unable to connect to DB');
        }
        _dbUser = client.db('forumdb');
        console.log('Successfully connected to MongoDB server');
    });
};

module.exports = {
    getDb: getDb,
    getObjectId: getObjectId,
    init: init
};