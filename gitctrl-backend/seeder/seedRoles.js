const mongoose = require('mongoose')
require("dotenv").config();
const dbConnection = require("../utils/DBConfiguration");
const connecTOMongo = async () => {
    await dbConnection(process.env.MONGO_URI);
}
connecTOMongo();

const roleModel = require('../schema/roles');

const seedRole = [
    {
        "name":"student",
    },
    {
        "name":"teacher",
    },
    {
        "name":"admin",
    },
]

const importData = async () => {
    try {
        await roleModel.deleteMany({})
        await roleModel.insertMany(seedRole)
        console.log("Data imported successfully");
        process.exit()
    }catch(error){
        console.log(error);
        res.status(500).json({ error });
    }
}

importData().then(() => {
    mongoose.connection.close()
})  