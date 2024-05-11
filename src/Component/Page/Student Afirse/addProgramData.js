import React from 'react';
import toast from 'react-hot-toast';
import CustomAxiosPost from '../../Hooks/CustomAxiosPost';

const AddProgramData = () => {
    const programdetails = async (e)=>{
        e.preventDefault();
        const data = {
            programName: e.target.name.value,
            date: e.target.prgDate.value,
            roomNumber: e.target.room.value,
            trainerName: e.target.trainer.value,
            present: e.target.present.value,
            costing: e.target.cost.value,
        }

        try {
            const result = await CustomAxiosPost("/stdnaffprogram", data);
    
          // Handle the result (e.g., show a success message)
          console.log("Post successful:", result);
          if (result.status === "Success") {
            toast.success("Successfully Add Member");
            e.target.reset();
          }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
        <form onSubmit={programdetails}>
          <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
            <div class="absolute opacity-60 inset-0 z-0"></div>
            <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
              <div class="grid  gap-8 grid-cols-1">
                <div class="flex flex-col ">
                  <div class="flex flex-col sm:flex-row items-center">
                    <h2 class="font-semibold text-3xl mr-auto">
                      Entry Student Affairs Program Data{" "}
                    </h2>
                    <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                  </div>
                  <div class="mt-5">
                    <div class="form">
                      <div class="md:grid grid lg:grid-cols-4 gap-4 w-full text-xs">
                        
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            Program Name
                            <span title="required" className="text-red-500">
                              *
                            </span>
                          </label>
                          <input
                            placeholder="Name"
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required="required"
                            type="text"
                            name="name"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            Program Date
                            <span title="required" className="text-red-500">
                              *
                            </span>
                          </label>
                          <input
                            placeholder=""
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required
                            type="date"
                            name="prgDate"
                          />
                        </div>
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
                            required
                            type="text"
                            name="room"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                          Trainer Name
                            <span title="required" className="text-red-500">
                              *
                            </span>
                          </label>
                          <input
                            placeholder="Name"
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required
                            type="text"
                            name="trainer"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                          Present Student
                            <span title="required" className="text-red-500">
                              *
                            </span>
                          </label>
                          <input
                            placeholder="Student quantity"
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required
                            type="text"
                            name="present"
                          />
                        </div>
                        <div class="form-control  mb-3 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                          Program Cost
                            <span title="required" className="text-red-500">
                              *
                            </span>
                          </label>
                          <input
                            placeholder="Price"
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required
                            type="text"
                            name="cost"
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

export default AddProgramData;