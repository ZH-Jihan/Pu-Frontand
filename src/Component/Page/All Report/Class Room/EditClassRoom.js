import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import PutCustomAxios from '../../../Hooks/PutCustomAxios';
import useFatchData from '../../../Hooks/useFatchData';

const EditClassRoom = () => {
  const { id } = useParams();
  const { data: room, error } = useFatchData(`/classroom/${id}`); 
  
  const [update, setUpdate] = useState({});
  const navigate = useNavigate();
  if (room.status) {
    if (!update.roomname) {
      setUpdate(room?.data[0]);
    }
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    setUpdate((prev) => ({ ...prev, [name]: value }));
  };
 
    const hendelRoom = async (e) => {
        e.preventDefault();
        
        const response = await PutCustomAxios(`/classroom/${id}`, update)
       
    if (response) {
        toast.success("Successfully updated classroom")
        setUpdate({})
        navigate("/classroom")
    }
      };

      
    return (
        <div>
            <form onSubmit={hendelRoom}>
        <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">
                    Entry Class Room Info{" "}
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:grid grid lg:grid-cols-4 gap-4 w-full text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Room Number
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Room Number"
                          value={update.roomnum || ""}
                          onChange={onChange}
                          disabled
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="roomnum"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Room Name
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Room Number"
                          value={update.roomname || ""}
                          onChange={onChange}
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="roomname"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Initial Name
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Initial Name"
                          value={update.roominitial || ""}
                          onChange={onChange}
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="roominitial"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Capacity
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Capacity"
                          onChange={onChange}
                          value={update.capacity || ""}
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="capacity"
                        />
                      </div>
                    </div>
                    <div class="form-control mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button
                        type="submit"
                        class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                      >
                        Update Room
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
        </div>
    );
};

export default EditClassRoom;