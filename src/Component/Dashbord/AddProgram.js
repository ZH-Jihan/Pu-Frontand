import React from 'react';
import { toast } from 'react-hot-toast';
import useDepartment from '../../Hooks/useDepartment';

const AddProgram = () => {
    const [dipartments] = useDepartment();
    const handleProgram = (event) => {
        event.preventDefault();
        const program = {
          name: event.target.name?.value,
          id: event.target.programId?.value,
          dipartment: event.target.departmentname?.value,
          description: event.target.description?.value,
        };
        fetch("https://pu-server-side-xf9f.onrender.com/api/v1/program", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify(program),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.insertedId) {
              event.target.reset();
              // Navigate("/product");
              toast.success("Program Added");
            }
          });
      };
    return (
        <div>
            <form onSubmit={handleProgram}>
      <div class="w-full relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
        <div class="absolute opacity-60 inset-0 z-0"></div>
        <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div class="grid  gap-8 grid-cols-1">
            <div class="flex flex-col ">
              <div class="flex flex-col sm:flex-row items-center">
                <h2 class="font-semibold text-3xl mr-auto">Add Program List</h2>
                <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div class="mt-5">
                <div class="form">
                  
                  <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div class="form-control  mb-3 space-y-2 w-full text-base">
                      <label class="font-semibold text-gray-600 text-xl py-2">
                      Program Name<span title="required" className='text-red-500'>*</span>
                      </label>
                      <input
                        placeholder="Program Name"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div class="form-control  mb-3 space-y-2 w-full text-base">
                      <label class="font-semibold text-gray-600 text-xl py-2">
                      Program ID<span title="required" className='text-red-500'>*</span>
                      </label>
                      <input
                        placeholder="Program ID"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="programId"
                      />
                    </div>
                    <div class="form-control  mb-3 space-y-2 w-full text-base">
                      <label class="font-semibold text-gray-600 text-xl py-2">
                        Department<span title="required" className='text-red-500'>*</span>
                      </label>
                      <select
                        placeholder="Department"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="departmentname"
                      >
                        <option>--Select Option--</option>
                        {
                            dipartments.map((dipartment) =>(<option>{dipartment.name}</option>))
                        }
                      </select>
                    </div>
                  </div>
                  
                  
                  <div class="form-control flex-auto w-full mb-1 text-xl space-y-2">
                    <label class="font-semibold text-gray-600 py-2">
                      Description/Remark
                    </label>
                    <textarea
                      required
                      name="description"
                      class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg text-base  py-4 px-4"
                      placeholder="Enter your Program Activity"
                      spellcheck= {true}
                    ></textarea>
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

export default AddProgram;