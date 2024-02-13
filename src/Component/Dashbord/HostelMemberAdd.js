import React, { useState } from 'react';
import useFatchData from '../Hooks/useFatchData';

const HostelMemberAdd = () => {
    const { data: totalReg } = useFatchData("allregStudent.json");
    const [id,setId] = useState("")
    const onChange = (e) => {
        e.preventDefault();
        console.log(e );
        setId(e.target.id.value);
      };
      console.log(id);
    const student = totalReg.find((el)=> el.ar === id)
    console.log(student);
    const memberAdd = (event) => {
        event.preventDefault();
        const studentInfo = {
          name: student?.name,
          id: student?.ar,
          number: student?.contactNum,
          batch: student?.programType,
          semester: student?.semesterName,
          department: student?.mainProgramName
        };
        console.log(studentInfo);
        // fetch("https://pu-server-1.onrender.com/university", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
    
        //   body: JSON.stringify(university),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     // console.log(data);
        //     if (data.insertedId) {
        //       event.target.reset();
        //       // Navigate("/product");
        //       toast.success("University Added Successfully");
        //     }
        //   });
      };
    return (
        <div>
            <div class="form-control  mb-3 space-y-2 w-full text-base">
                      <label class="font-semibold text-gray-600 text-xl py-2">
                      Student Id<span title="required" className='text-red-500'>*</span>
                      </label>
                      <input
                        placeholder="Student Id"
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        onFocusCapture={onChange}
                        type="text"
                        name="id"
                      />
                    </div>
            <form onSubmit={memberAdd}>
      <div class="w-full relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
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
                      Student Name<span title="required" className='text-red-500'>*</span>
                      </label>
                      <input
                        placeholder="University ID"
                        value={student?.name}
                        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        disabled
                        type="text"
                        name="versityId"
                      />
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

export default HostelMemberAdd;