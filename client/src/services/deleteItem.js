import axios from "axios";


export async function removeItem(id) {
  const results = axios({
    method: "DELETE",  
    url: `https://todolistproje.herokuapp.com/api/items/${id}`,
  }).then((res) => {
    // console.log(res)
    return res.data
  })
  
  return results;
};