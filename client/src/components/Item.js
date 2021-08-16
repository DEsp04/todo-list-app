import React from 'react'

function Item() {
  return (
       <div>
            <div className="flex mb-4 items-center">
                <p className="w-full text-grey-500">Add another component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white-500 hover:bg-red-500">Remove</button>
            </div>
          	<div className="flex mb-4 items-center">
                <p className="w-full line-through text-green-500">Submit Todo App Component to Tailwind Components</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey-500 hover:bg-grey-500">Not Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white-500 hover:bg-red-500">Remove</button>
            </div>
        </div>
  )
}

export default Item
