const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://foodie:mern123@cluster0.tkrehx0.mongodb.net/foodmern?retryWrites=true&w=majority";
// "mongodb://foodie:mern123@ac-rbqt3dj-shard-00-00.tkrehx0.mongodb.net:27017,ac-rbqt3dj-shard-00-01.tkrehx0.mongodb.net:27017,ac-rbqt3dj-shard-00-02.tkrehx0.mongodb.net:27017/foodmern?ssl=true&replicaSet=atlas-56pdb9-shard-0&authSource=admin&retryWrites=true&w=majority"
const database = async() => {
    try {
        const connect = await mongoose.connect(mongoURI);
        if (connect) {
            console.log("Connection Successful");
            let data1 =mongoose.connection.db.collection("food_items");
            let data = await data1.find({}).toArray();
            let food_Category = mongoose.connection.db.collection("food_Category");
            let data2 = await food_Category.find({}).toArray(); 
            global.food_items = data;
            global.food_Category = data2;
            // console.log(global.food_items);
        }
    } catch (error) {
            console.log("Error while connecting", error.message);
      }
}


module.exports = database();