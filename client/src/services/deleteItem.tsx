import axios from "axios";


export async function removeItem(id: string): Promise<{
  id: string;
  title: string;
  description: string;
  completed: boolean;
}> {
  
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