import axios from "axios";


export async function editCurrentItem({ categoryField, taskField, id }: { categoryField: string, taskField: string, id: string }) {
  type Data = {
    data: {
      id: string,
      title: string,
      description: string,
      completed: boolean
    }
  }

  const results = axios({
    method: "PUT",
    data: {
      category: categoryField,
      task: taskField
    },
    
    url: `https://todolistproje.herokuapp.com/api/items/${id}`,
  }).then((res: Data) => {
    return res.data
  })
  
  return results;
}