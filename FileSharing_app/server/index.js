import express from "express"
import router from "./routes/routes.js";
import dbConnection from "./database/db.js";
const app = express();
const PORT = 5000;

app.use('/',router);

app.use(cors(
  {
    origin:["https://file-share-ruddy.vercel.app/"],
    methods:["POST","GET"],
    credentials:true
  }
))

dbConnection();
app.listen(PORT,()=>{
  console.log(`Server is listening to port ${PORT}... `);
})
