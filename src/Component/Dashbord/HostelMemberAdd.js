import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useFatchData from '../Hooks/useFatchData';

const HostelMemberAdd = () => {
    const { data: totalReg } = useFatchData("allregStudent.json");
    const [id,setId] = useState("")
    const onChange = (e) => {
        e.preventDefault();
        setId(e.target.value);
      };
      console.log(id);
    const student = totalReg.find((el)=> el.ar === id)
    console.log(student);
    const memberAdd = (event) => {
        event.preventDefault();
        const studentInfo = {
          name: student?.name,
          id: student?.ar,
          number: `0${student?.contactNum}`,
          batch: student?.programType,
          semester: student?.semesterName,
          joinDate: event.target.joindate.value,
          department: student?.mainProgramName
        };
        fetch("https://pu-server-1.onrender.com/hostelmember", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify(studentInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.insertedId) {
              event.target.reset();
              setId("")
              // Navigate("/product");
              toast.success("Member Added Successfully");
            }
          });
      };
    return (
        <div>
            <form onSubmit={memberAdd}>
      <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
        <div class="absolute opacity-60 inset-0 z-0"></div>
        <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div class="grid  gap-8 grid-cols-1">
            <div class="flex flex-col ">
              <div class="flex flex-col sm:flex-row items-center">
                <h2 class="font-semibold text-3xl mr-auto">Add Hostel Member </h2>
                <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div class="mt-5">
                <div class="form">
                  
                  <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div class="form-control  mb-3 space-y-2 w-full text-base">
                      <label class="font-semibold text-gray-600 text-xl py-2">
                      Student Id<span title="required" className='text-red-500'>*</span>
                      </label>
                      <input
                        placeholder="Student Id"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        onChange={onChange}
                        value={id}
                        type="text"
                        name="id"
                      />
                    </div>
                    <div class="form-control  mb-3 space-y-2 w-full text-base">
                      <label class="font-semibold text-gray-600 text-xl py-2">
                      Student Name<span title="required" className='text-red-500'>*</span>
                      </label>
                      <input
                        placeholder="University ID"
                        value={student?.name}
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        disabled
                        type="text"
                        name="name"
                      />
                    </div>
                    <div class="form-control  mb-3 space-y-2 w-full text-base">
                      <label class="font-semibold text-gray-600 text-xl py-2">
                      Join Date<span title="required" className='text-red-500'>*</span>
                      </label>
                      <input
                        placeholder="University ID"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        type="date"
                        name="joindate"
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

export default HostelMemberAdd;