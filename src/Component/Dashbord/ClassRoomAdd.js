import React from "react";
import { toast } from "react-hot-toast";

const ClassRoomAdd = () => {
  const handleClassRoom = (event) => {
    event.preventDefault();
    const classroom = {
      roomnum: event.target.roomnum?.value,
      roomname: event.target.roomname?.value,
      roominitial: event.target.roominitial?.value,
      capacity: event.target.capacity?.value,
    };
    fetch("https://pu-server-1.onrender.com/api/v1/classroom", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(classroom),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          event.target.reset();
          // Navigate("/product");
          toast.success("classroom Added Successfully");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleClassRoom}>
        <div class="w-full relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">
                    Add Class Room List
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Room Number
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Room Number"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="roomnum"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Class Room Name
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Full Name"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="roomname"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Class Room Initial
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Room Initial"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="roominitial"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Room Capacity
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Capacity"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
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
                        Save
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

export default ClassRoomAdd;
