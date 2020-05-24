const MongoClient = require("mongodb").MongoClient;
const URI = "mongodb://localhost:27017/";

try {
    MongoClient.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    },
        (err, db) => {
            if (err) throw err;
            //creates a db name myDatabase
            const mydb = db.db("myDatabase");
            //creates a collection customer

            mydb.collection("customers").insertMany([
                { firstName: "Steven", lastName: "Smith" },
                { firstName: "Joan", lastName: "Johnson", gender: "female" },
                { firstName: "Clark", lastName: "Kent" },
                { firstName: "Joan", lastName: "Johnson", gender: "female" },
                { firstName: "Adam", lastName: "Smith" },
                { firstName: "Michael", lastName: "Bloomberg", gender: "male" }],
                () => console.log("Created customers"));
            /**Search in the database, Remove the comment to test the code **/
            // mydb.collection("customers").findOne({firstName: "Clark"}, (err, data) => {console.log(data)}); // search by first name is Clark
            mydb.collection("customers").find({}).toArray((err, mydata) => console.log(mydata)); //search all
            // mydb.collection("customers").find().sort({lastName: 1}).toArray((err, mysorteddata) => console.log(mysorteddata)); //sort by lastname

            //Update a customer
            mydb.collection("customers").updateOne({ firstName: "Adam" }, { $set: { gender: "male" } }, (err, updatedData) => {
                if (err) throw err;
                console.log("updated 1 customer");
            });


            /* Delete Customer */
            //mydb.collection("customers").deleteOne({firstName: "Steven"}, (err, mydeletedData) => console.log("deleted 1")); // deleted Steven Smith
            //mydb.collection("customers").remove({}); //removes all data from customer collection
            /**mydb.collection("customers").drop((err, deleteCollection) => {
                if(deleteCollection) console.log("deleted collection")
            });**/
            console.log("Connected to MongoDB");
        })
} catch (eror) {
    handleError(error);
}
