import axios from "axios";


export async function addItem({ categoryField, taskField }) {
  const results = axios({
    method: "POST",
    data: {
      username: "unknown",
      category: categoryField,
      task: taskField
    },
    
    url: "https://todolistproje.herokuapp.com/api/",
  }).then((res) => {
    // console.log(res)
    return res.data
  })
  
  return results;
};