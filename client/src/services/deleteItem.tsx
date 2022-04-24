import axios from "axios";


export async function removeItem(id: string) {
  
  type Data = {
    data: {
      id: string,
      title: string,
      description: string,
      completed: boolean
    }
  }

  const results = axios({
    method: "DELETE",  
    url: `https://todolistproje.herokuapp.com/api/items/${id}`,
  }).then((res: Data) => {
    // console.log(res)
    return res.data
  })
  
  return results;
}