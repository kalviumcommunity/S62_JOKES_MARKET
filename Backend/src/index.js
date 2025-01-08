if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "./config/.env",
    });
  }
  
  const app = require("./server.js");
  const connectDatabase = require("./DataBase/database.js");
  const { connectDB, getDB } = require("./DataBase/db.js");
  
  const PORT = process.env.PORT;
  
  connectDB();
  
  app.get("/", async (req, res) => {
    try {
      const db = getDB();
      const users = await db.collection("Users").find().toArray();
      res.status(200).json(users);
    } catch (error) {
      console.log("Error fetching users", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  const server = app.listen(PORT, () => {
    connectDatabase();
    console.log(
      `Server is running in port: ${PORT}, link: http://localhost:${PORT}`
    );
  });