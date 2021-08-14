const Item = require("../models/item");

const createItem = async (req, res) => {
  const {
    username,
    category,
    task,
  } = req.body;

  try {
    const newItem = new Item({
      username,
      category,
      task,
    });
    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

const getAllItems = async (req, res) => {
  try {
    // console.log(req)
    const items = await Item.find().sort({
      date: -1,
    })

    res.json(items);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

const getItemByID = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    res.json(item)
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    // console.log("From updateItem-->", item)

    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }
    
    res.json(item);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }
    await item.remove();
    res.json({ msg: "Item remove" });
  } catch (error) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};


module.exports = {
  createItem,
  getAllItems,
  getItemByID,
  updateItem,
  deleteItem
}