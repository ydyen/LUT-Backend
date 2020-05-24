# **Mongo Database Material**
___

## **Background**
This tutorial provides a basic overview of read, write, delete and update for MongoDB.
The code along learning for the tutorial is here.
In addition, two files were created to test the connection for mongodb via local and cloud.
Material.js file provides the code for connecting in the local drive.
App.js file provides a connection with mongoose to the MongoDB Atlas account.
___
## Install
Create a config.js file and export app.js. 

Install mongodb to your local drive
- [MongoDB for windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [MongoDB For macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
    - [Additional Info for macOS](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)

Install the node module
- `npm install mongodb`
- `npm install mongoose`

Run the command
- `node app.js`

Coding along commands
```
/** 
This is the coding along notes:
show dbs - list all the databases
use <database name> - switch to the particular database
db - list the current database directory name

** to create a collection use {}, below is an example **
{
    first_name: "John",
    last_name: "Smith",
    memberships: ["mem1", "mem2"],
    address: {
        street: "4 Main Street",
        city: "Los Angeles"
    },
    contacts: [
        {
            name: "Brad",
            relationship: "friend"
        }
    ]

** Create User **
db.createUser({
    user: "brad",
    pwd: "1234",
    roles:["readWrite", "dbAdmin"]
    });

** Create Collections **
db.createCollection("customers");
db.customers.insert({ firstName: "John", lastName: "Doe" });
db.customers.insert([
    {firstName: "Steven", lastName: "Smith"},
    {firstName: "Joan", lastName: "Johnson", gender: "female"},
    {firstName: "Clark", lastName: "Kent"},
    {firstName: "Joan", lastName: "Johnson", gender: "female"},
    {firstName: "Adam", lastName: "Smith"},
    {firstName: "Michael", lastName: "Bloomberg", gender: "male"}

])

** Search in the database **
db.customers.find(); - list all the collections in customers
db.customers.find().pretty() - list all the collections in customer in formatted space
db.customers.find({$or:[{firstName: "John"}, {firstName: "Joan"}]}) - search by all firstname is John and Joan
db.customers.find({gender: "female"}) -- search by where gender is female
db.customers.find({age:{$lt:40}}) -- search where age is below 40
db.customers.find({"address.city":"Boston"}) -- search from address where city is Boston
db.customers.find().sort({lastName: 1}) -- sort where last name is ascending order
db.customers.find().sort({lastName: -1}) -- sort where last name is in descending order
db.customers.find({gender: "male"}).count() -- count how many male
db.customers.find().limit(2) -- search for the first 2
db.customers.find().limit(4).sort({lastName: 1}) -- search for first four where last name is in ascending order

** update the field **
db.customers.update({firstName: "John"}, {firstName: "John", lastName: "Doe", gender: "male"}); - update gender to male
db.customers.update({firstName: "Steven"}, {$set:{gender: "male"}}) - add gender and leaving everything else the same
db.customers.update({age: 26}, {$inc:{age: 5}}); - increment age by 5 years
db.customers.update({age: 31}, {$unset:{age:1}}) - remove age
db.customers.update({firstName: "Adam"}, {firstName: "Adam", lastName: "Smith", age: 30}, {upsert: true}) - add if not in the database
db.customers.update({lastName: "Johnson"}, {$rename:{"gender":"sex"}}) - update a field 

** remove a field **
db.customers.remove({lastName: "Johnson"}) - removed all fields by a matching lastname
db.customers.remove({lastName: "Smith"}, {justOne: true}) - remove 1 by lastname of Smith only the the first Smith.

** For Loop **
db.customers.find().forEach(function(data){print("Customer Name: " + data.firstName + " " + data.lastName)}) 
Customer Name: Adam Smith
Customer Name: Steven Smith
Customer Name: Joan Johnson
Customer Name: Clark Kent
Customer Name: Joan Johnson
Customer Name: Adam Smith
Customer Name: Michael Bloomberg

 * **/
```