const db = require("../db");
const Item = require("../models/item");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  
  const items = [
    {
      username: "David",
      category: "House Chores",
      task: "Must do laundry today at 12pm",
    }
  ];
  await Item.insertMany(items);
  console.log("Created many items");
};

const run = async () => {
  await main();
  db.close();
};

run();
