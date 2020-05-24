//get mongoose module
const mongoose = require("mongoose");
//uri link
const URI = "mongodb://localhost:27017/";

//connects to mongodb
try {
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //handles unexpected longer queries
            serverSelectionTimeoutMS: 500
        })
            .then(() => console.log("DB is running"))
            .catch(err => err);

} catch (error) {
    console.log(error);
}

