require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/dbConfig");
const userRoutes = require("./routes/userRoute");
const questionRoutes = require("./routes/questionRoute");
const answerRoutes = require("./routes/answerRoute");
const authMiddleware = require("./middleware/authMiddlewares");

const port = 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", authMiddleware, answerRoutes);

async function start() {
  try {
    const [result] = await dbConnection.execute("SELECT 'test' as test");
    console.log("Database test result:", result);

    app.listen(port, () => {
      console.log(`Database connection is established`);
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connecting to the database:", error.message);
  }
}

start();
