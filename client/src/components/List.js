import React from 'react'

function List() {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-500 font-sans">
      <div className="bg-white-500 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-500">Todo List</h1>
          <div className="flex mt-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-500" placeholder="Add Todo" />
            <button className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white-500 hover:bg-teal-500">Add</button>
          </div>
        </div>
        <div>
            <div className="flex mb-4 items-center">
                <p className="w-full text-grey-500">Add another component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
            </div>
          	<div className="flex mb-4 items-center">
                <p className="w-full line-through text-green-500">Submit Todo App Component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey-500 hover:bg-grey-500">Not Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white-500 hover:bg-red-500">Remove</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default List
