import axios from "axios";


export async function editCurrentItem({ categoryField, taskField, id }) {
  const results = axios({
    method: "PUT",
    data: {
      category: categoryField,
      task: taskField
    },
    
    url: `https://todolistproje.herokuapp.com/api/items/${id}`,
  }).then((res) => {
    // console.log(res)
    return res.data
  })
  
  return results;
};