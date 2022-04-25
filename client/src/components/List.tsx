import React, { useEffect, useState } from 'react';
import Item from "./Item";
import { useSelector, useDispatch } from "react-redux";
import { createNewItem } from "../redux/addNewItemSlice";
import { fetchItems } from "../redux/itemsSlice";





function List() {
  const dispatch = useDispatch();
  const [taskField, setTaskField] = useState("");
  const [categoryField, setCategoryField] = useState("");

  interface RootState {
    addItem: { status: string },
    deleteItem: { status: string },
    editItem: { status: string },
    getItems: { items: [] }
  }
  
  const newItemStatus = useSelector((state: RootState) => state.addItem.status)
  const deleteItemstatus = useSelector((state: RootState) => state.deleteItem.status);
  const editStatus = useSelector((state: RootState) => state.editItem.status);
  const items = useSelector((state: RootState) => state?.getItems?.items);

  
  const addItem = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault()
    if (taskField.length > 0 && categoryField.length > 0) {
      dispatch(createNewItem({ categoryField, taskField }))
    }
    setCategoryField("");
    setTaskField("");
  }

  const showItems = () => {
    return items?.map((item: any, index:number) => {
      return <Item {...item} key={index} />
    })
  }

   useEffect(() => {
    dispatch(fetchItems());
   }, [dispatch])
  
   useEffect(() => {
    dispatch(fetchItems());
   }, [newItemStatus, dispatch])
  
   useEffect(() => {
    dispatch(fetchItems());
   }, [deleteItemstatus, dispatch])

   useEffect(() => {
    dispatch(fetchItems());
   }, [editStatus, dispatch])

  
  return (
    <div className="h-100 w-full  items-center justify-center font-sans">
      <div className="flex flex-col justify-center items-center bg-white-500 rounded shadow w-full mt-6">
        
        <form className="mb-4" action="#" method="POST">
          <div className="mt-4">
            <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="mt-1">  
                        <select
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={(e) => setCategoryField(e.target.value)}
                          id="category"
                          name="category"
                          // type={"category"}
                          value={categoryField}
                        >
                        <option value="" disabled>--Category--</option>
                        <option value="Chores">Chores</option>
                        <option value="Study">Study</option>
                        <option value="Learning">Learning</option>
                        <option value="Health">Health</option>
                        <option value="Care">Care</option>
                        <option value="Meeting">Meeting</option>
                      </select>
                    </div>  
                  </div>
            
            <div className="mt-1">
              <textarea
                id="instruction"
                name="instruction"
                placeholder="Add Todo"
                rows={3}
                cols={40}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setTaskField(e.target.value)
                }
                value={taskField}
                        ></textarea>
                    </div>
            <button
              className="flex-no-shrink mt-2 p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white-500 hover:bg-teal-500"
              onClick={ addItem }
            >Add</button>
          </div>
        </form>
        <div className="w-full">
          {showItems()}
        </div>
      </div>
    </div>
  )
}

export default List
