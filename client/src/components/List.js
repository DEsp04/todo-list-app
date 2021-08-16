import React from 'react';
import Item from "../components/Item.js";

function List() {
  return (
    <div className="h-100 w-full  items-center justify-center bg-teal-500 font-sans">
      <div className="flex flex-col justify-center items-center bg-white-500 rounded shadow p-6 m-4 w-full">
        
        
        <form className="mb-4">
          <h1 className="text-grey-500">Todo List</h1>
          <div className="mt-4">
            <input className="shadow rounded-md shadow-sm border-gray-300 appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-500 sm:text-sm" placeholder="Name" />
           
            <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <div className="mt-1">  
                        <select
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="category" id="category"
                          // onChange={handleChange}
                          id="category"
                          name="category"
                          type="category"
                          defaultValue=""
                        >
                        <option value="" disabled>--Category--</option>
                        <option value="juice drink">Chores</option>
                        <option value="spirits">Study</option>
                        <option value="fronzen drink">Learning</option>
                        <option value="cocktail">Health</option>
                        <option value="hard soda">Care</option>
                        <option value="mixed drink">Meeting</option>
                      </select>
                    </div>  
                  </div>
            
            <div className="mt-1">
                        <textarea id="instruction" name="instruction" placeholder="Add Todo" rows="3" cols="40" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          // onChange={handleChange}
                        ></textarea>
                    </div>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white-500 hover:bg-teal-500">Add</button>
          </div>
        </form>

        <Item />
      </div>
    </div>
  )
}

export default List
