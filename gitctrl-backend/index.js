const express = require("express");
const dbConnection = require("./utils/DBConfiguration");
const authRoute = require("./routes/auth");
const countryRoute = require("./routes/base_tables/country");
const departmentRoute = require("./routes/department");
const classroomRoute = require("./routes/classroom");
const batchRoute = require("./routes/batch");
const studentRoute = require("./routes/student");
const noticeRoute = require("./routes/notice");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(require("cors")());

const routePrefix = "api";
app.use(`/${routePrefix}`, authRoute);
app.use(`/${routePrefix}/student`, authRoute);
app.use(`/${routePrefix}/country`, countryRoute);
app.use(`/${routePrefix}/department`, departmentRoute);
app.use(`/${routePrefix}/classroom`, classroomRoute);
app.use(`/${routePrefix}/batch`, batchRoute);
app.use(`/${routePrefix}/student`, studentRoute);
app.use(`/${routePrefix}/notice`, noticeRoute);

app.listen(5000, async() => {
    try {
        await dbConnection(process.env.MONGO_URI);
        console.log("dbConnected at", process.env.MONGO_URI);
      } catch (error) {
        console.log("Db not connected");
      }
});