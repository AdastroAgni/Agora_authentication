const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./utils/databaseConnection");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/user.router"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
