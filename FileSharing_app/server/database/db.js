import mongoose from "mongoose";



const MONGODB_URI = `mongodb://yogesh:yogesh@ac-suenyin-shard-00-00.rc9j49d.mongodb.net:27017,ac-suenyin-shard-00-01.rc9j49d.mongodb.net:27017,ac-suenyin-shard-00-02.rc9j49d.mongodb.net:27017/?ssl=true&replicaSet=atlas-jfku9h-shard-0&authSource=admin&retryWrites=true&w=majority`;


const dbConnection = async() =>{
    try{
   await mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
   console.log("database connected sucsessfully");
    }catch(error){
       console.error("error while connecting with the databse",error.message);
    }
}

export default dbConnection;