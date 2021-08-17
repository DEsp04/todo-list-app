import axios from "axios";


export async function getItems () {
  const results = await axios.get("https://todolistproje.herokuapp.com/api/items").then((res) => {
    return res.data;
  });
  
  return results;
};