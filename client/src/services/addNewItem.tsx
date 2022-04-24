import axios from "axios";


export async function addItem({ categoryField, taskField }: { categoryField: string, taskField: string }): Promise<{
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
    method: "POST",
    data: {
      username: "unknown",
      category: categoryField,
      task: taskField
    },
    url: "https://todolistproje.herokuapp.com/api/",
  }).then((res: Data) => {
    return res.data
  })
  
  return results;
}