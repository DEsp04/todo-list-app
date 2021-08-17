import React, { useState } from 'react';
import { useDispatch } from "react-redux";
// import { deleteCurrentItem } from "../redux/deleteItemSlice";


function Edit() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white-500 hover:bg-blue-500"
    onClick={
      () => {
        setShowModal(true)
      }
    }
    >
    Edit
      </button>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-md bg-white-500 rounded-md w-full xxs:mx-2 xs:mx-2">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pt-4 mr-3  rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-xxxl bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none text-red-500">
                      ×
                    </span>
                  </button>
                </div>
                
                <form className="space-y-6" action="#" method="POST">
                  <h3 className="text-xxxl font-extrabold text-red-500 text-center">
                    Edit Item
                  </h3>
                
                {/*body*/}
                <div className="relative px-6 pb-2 flex-auto">

                    <div className="mt-1">  
                        <select
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="instruction" id="instruction"
                          // onChange={handleChange}
                          id="content"
                          name="content"
                          type="content"
                          defaultValue=""
                        >
                        <option value="" disabled>--Category--</option>
                        <option value="Alcoholic">Chores</option>
                        <option value="Non-alcoholic">Study</option>
                          <option value="Non-alcoholic">Learning</option>
                          <option value="Non-alcoholic">Health</option>
                          <option value="Non-alcoholic">Care</option>
                          <option value="Non-alcoholic">Meeting</option>
                      </select>
                    </div>  
                    
                    <div className="mt-1">
                      <textarea id="instruction" name="instruction" placeholder="Add Todo" rows="3" cols="40" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        // onChange={(e) => setTaskField(e.target.value)
                        // }
                        // value={taskField}
                                ></textarea>
                    </div>

                </div>
                  
                {/*footer*/}
                  <div className="flex items-center justify-center p-6 pt-2 rounded-b">
                    <button
                      className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xl font-bold font-medium text-blue-500 hover:text-white-500 bg-white-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-indigo-500 border-blue-500"
                      type="submit"
                      onClick={
                        () => {
                          setShowModal(false)
                          // update()
                        }
                      }
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} 

  </>
  )
}

export default Edit
