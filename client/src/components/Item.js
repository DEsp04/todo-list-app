import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../redux/itemsSlice";




function Item() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state?.getItems?.items)
  console.log(items)
  // const [strikeThrough, setStrikeThrough] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(fetchItems());
  }, [])

  // console.log(reduxState);
  console.log(toggle);

  const crossLine = (e) => {
    e.preventDefault();
    const element = e.target
    element.classList.toggle("line-through");
  }


  return (
       <div>
            {/* <div className="flex mb-4 items-center">
                <p className="w-full text-grey-500">Add another component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white-500 hover:bg-red-500">Remove</button>
            </div>

          	<div className="flex mb-4 items-center">
                <p className="w-full line-through text-green-500">Submit Todo App Component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey-500 hover:bg-grey-500">Not Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white-500 hover:bg-red-500">Remove</button>
            </div> */}

            {
              items?.map((item, index) => {
                return <div className="flex mb-4 items-center" key={index}>
                  <div>
                    <p onClick={(e) => crossLine(e)} className={"w-full text-grey-500 cursor-pointer"}>{item.task}</p>
                    <p className="text-vin-rouge-500 font-bold text-sm">{item.category}</p>
                  </div>
                  <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white-500 hover:bg-red-500" onClick={() => setToggle(!toggle)}>Remove</button>
                  <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white-500 hover:bg-blue-500" onClick={() => setToggle(!toggle)}>Edit</button>
                </div>
              })
            }
        </div>
  )
}

export default Item
