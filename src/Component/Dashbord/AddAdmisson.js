import React from "react";
import { toast } from "react-hot-toast";
import useProgram from "../../Hooks/useProgram";
import useSemester from "../../Hooks/useSemester";

const AddAdmisson = () => {
  const [semesters] = useSemester();
  const [programs] = useProgram();
  const handleAdmisson = (event) => {
    event.preventDefault();
    const program = {
      name: event.target.name?.value,
      id: event.target.programId?.value,
      description: event.target.description?.value,
    };
    fetch("https://pu-server-1.onrender.com/program", {
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
      <form onSubmit={handleAdmisson}>
        <div class="w-full relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">
                    Add Admisson List
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:flex flex-row md:space-x-4 w-3/4 sm:w-1/4 text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Date
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Program Name"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="date"
                          name="name"
                        />
                      </div>
                    </div>
                    <div class="md:flex flex-row md:space-x-4 w-3/4 sm:w-1/4 text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Semester
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <select
                          placeholder="Department"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="departmentname"
                        >
                          <option>--Select Semester--</option>
                          {semesters.map((semester) => (
                            <option>{semester.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* <div class="md:flex flex-row md:space-x-4 w-3/4 sm:w-1/4 text-xs mb-4">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Semester
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <select
                        placeholder="Designation"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="designation"
                        id="integration_street_address"
                      >
                        <option>--Select Option--</option>
                        <option>Day</option>
                        <option>Evening</option>
                        <option>Weekend</option>
                      </select>
                      </div>
                    </div> */}

                    <table class="min-w-full border-collapse block md:table">
                      <thead
                        style={{ color: "#042488" }}
                        class="block md:table-header-group"
                      >
                        <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                          <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
                            Name Of Program & ID
                          </th>
                          <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
                            Day
                          </th>
                          <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
                            Evening
                          </th>
                          <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
                            Weekend
                          </th>
                          <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                            Total Admission
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody class="block md:table-row-group">
                        {programs.map((Program) => (
                          <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                            <td name="name" class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                              <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                                Department Name & ID
                              </span>
                              {Program.id} |/ {Program.name}
                            </td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                              <input 
                              type='text'
                              placeholder="Number Of Student"
                              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-8 px-4"></input>
                            </td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                              <input 
                              type='text'
                              placeholder="Number Of Student"
                              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-8 px-4"></input>
                            </td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                              <input 
                              type='text'
                              placeholder="Number Of Student"
                              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-8 px-4"></input>
                            </td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                              <input 
                              type='text'
                              placeholder="Number Of Student"
                              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-8 px-4"></input>
                            </td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </table>

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

export default AddAdmisson;
