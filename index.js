const { MongoClient } = require('mongodb');
const mongoString = "mongodb+srv://sebaskiba11:1234@pierwszadbmongo.kywosci.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(mongoString);
async function main() {
await client.connect();



await client.close();
}


main();
