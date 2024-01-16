import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useFatchData from '../../../../Hooks/useFatchData';

const EditFaculty = () => {
    const {id} = useParams();
  // const navigate = useNavigate();
  const {data:faculty} = useFatchData(`https://pu-server-1.onrender.com/faculty/${id}`);
    
    const handleOrder = (event) => {
      event.preventDefault();
      const facultyinfo = {
        image: event.target.image?.files[0],
        name: event.target.name?.value,
        initialname: event.target.initialname?.value,
        id: event.target.fId?.value,
        pnumber: event.target.pnumber?.value,
        furlimg: event.target.furlimg?.value,
        designation: event.target.designation?.value,
        dipartment: event.target.dipartment?.value,
        email: event.target.email?.value,
        university: event.target.university?.value,
        doj: event.target.doj?.value,
        dob: event.target.dob?.value,
        jobtype: event.target.jobtype?.value,
        sex: event.target.sex?.value,
        status: event.target.status?.value,
        description: event.target.description?.value,
      };
      console.log(facultyinfo);
      // if (facultyinfo.dipartment || facultyinfo.designation || facultyinfo.university === "--Select Department--") {
      //   toast.error("Please Select Option")
      // } else {
      fetch("https://pu-server-1.onrender.com/faculty", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
  
        body: JSON.stringify(facultyinfo),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            event.target.reset();
            // Navigate("/product");
            toast.success("Facultu Added");
          }
        });
      // }
    };
    return (
      <form onSubmit={handleOrder}>
        <div class="w-full relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">Add Faculty Info</h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:space-y-2 mb-3">
                      <label class="text-xs font-semibold text-gray-600 py-2">
                        Faculty Img
                        <abbr class="hidden" title="required">
                          *
                        </abbr>
                      </label>
                      <div class="flex items-center py-6">
                        <div class="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                          <img
                            class="w-12 h-12 mr-4 object-cover"
                            src="{URL.createObjectURL(image)}"
                            alt="Faculty Img"
                          />
                        </div>
                        <label class="cursor-pointer ">
                          <input
                            name="image"
                            type="file"
                            className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg"
                          />
                          {/* <input type="file" class="hidden" /> */}
                        </label>
                      </div>
                    </div>
                    <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-lg">
                        <label class="font-semibold text-gray-600 py-2">
                          Faculty Name <abbr title="required">*</abbr>
                        </label>
                        <input
                          placeholder="Full Name"
                          class="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="name"
                        />
                        <p class="text-red text-xs hidden">
                          Please Fill Up This Field.
                        </p>
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-lg">
                        <label class="font-semibold text-gray-600 py-2">
                          Faculty Initial <abbr title="required">*</abbr>
                        </label>
                        <input
                          placeholder="Initial Name"
                          class="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="initialname"
                        />
                        <p class="text-red text-xs hidden">
                          Please Fill Up This Field.
                        </p>
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-lg">
                        <label class="font-semibold text-gray-600 py-2">
                          Faculty ID<abbr title="required">*</abbr>
                        </label>
                        <input
                          placeholder="Faculty ID"
                          class="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="fId"
                        />
                        <p class="text-red text-xs hidden">
                          Please Fill Up This Field.
                        </p>
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-lg">
                        <label class="font-semibold text-gray-600 py-2">
                          Phone Number
                        </label>
                        <input
                          placeholder="Number"
                          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="pnumber"
                        />
                      </div>
                    </div>
                    <div class="form-control md:flex md:flex-row md:space-x-4 w-full text-lg">
                      <div class="  mb-3 space-y-2 w-full text-lg">
                        <label class=" font-semibold text-gray-600 py-2">
                          Faculty Image URL
                        </label>
                        <div class="  flex flex-wrap items-stretch w-full mb-4 relative">
                          <div class="flex">
                            <span class="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <input
                            type="text"
                            name="furlimg"
                            class="flex-shrink flex-grow text-sm flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                            placeholder="https://"
                          />
                        </div>
                      </div>
                      {/* Email */}
                      <div class="form-control  mb-3 space-y-2 w-full text-lg">
                        <label class="font-semibold text-gray-600 ">
                          Email
                        </label>
                        <input
                          placeholder="Email Address"
                          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="form-control md:flex md:flex-row md:space-x-4 w-full text-lg">
                      <div class="form-control  w-full flex flex-col mb-3">
                        <label class="font-semibold text-gray-600 py-2">
                          Designation
                        </label>
                        <select
                          placeholder="Designation"
                          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="designation"
                          id="integration_street_address"
                        >
                          <option>--Select Designation</option>
                          <option>Professor</option>
                          <option>Associate Professor</option>
                          <option>Assistant Professor</option>
                          <option>Lecturer</option>
                        </select>
                      </div>
                      <div class="form-control  w-full flex flex-col mb-3">
                        <label class="font-semibold text-gray-600 py-2">
                          Department
                        </label>
                        
                      </div>
                      <div class="form-control  w-full flex flex-col mb-3">
                        <label class="font-semibold text-gray-600 py-2">
                          University
                        </label>
                      </div>
                    </div>
                    <div class="form-control py-2 md:flex md:flex-row md:space-x-4 lg:w-full text-lg">
                      {/* Date Of Join */}
                      <div class="form-control  w-2/4 flex flex-col mb-3">
                        <label class="font-semibold text-gray-600 py-2">
                          Date Of Join
                        </label>
                        <input
                          placeholder="Date Of Join"
                          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="date"
                          name="doj"
                        />
                      </div>
                      {/* Date Of Birth */}
                      <div class="form-control  w-2/4 flex flex-col mb-3">
                        <label class="font-semibold text-gray-600 py-2">
                          Date Of Birth
                        </label>
                        <input
                          placeholder="Date Of Join"
                          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="date"
                          name="dob"
                        />
                      </div>
                      {/* Job Type */}
                      <div class="form-control  w-2/4 flex flex-col mb-3">
                        <label class="font-semibold text-gray-600 py-2">
                          Job Type<abbr title="required">*</abbr>
                        </label>
                        <select
                          placeholder="Faculty Job type"
                          class="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="jobtype"
                        >
                          <option>Full Time</option>
                          <option>Part Time</option>
                        </select>
                        <p class="text-red text-xs hidden">
                          Please Fill Up This Field.
                        </p>
                      </div>
                      {/* Gender */}
                      <div class="form-control  w-2/4 flex flex-col mb-3">
                        <label class="font-semibold text-gray-600 py-2">
                          Gender<abbr title="required">*</abbr>
                        </label>
                        <select
                          placeholder="Faculty Job type"
                          class="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="sex"
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <p class="text-red text-xs hidden">
                          Please Fill Up This Field.
                        </p>
                      </div>
                      {/* Status */}
                      <div class="form-control  w-2/4 flex flex-col mb-3">
                        <label class="font-semibold text-gray-600 py-2">
                          Status<abbr title="required">*</abbr>
                        </label>
                        <select
                          class="appearance-none block text-base w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required="required"
                          type="text"
                          name="status"
                        >
                          <option>Active</option>
                          <option>Close</option>
                        </select>
                        <p class="text-red text-xs hidden">
                          Please Fill Up This Field.
                        </p>
                      </div>
                    </div>
                    {/* Description */}
                    <div class="form-control flex-auto w-full mb-1 text-lg space-y-2">
                      <label class="font-semibold text-gray-600 py-2">
                        Description
                      </label>
                      <textarea
                        name="description"
                        class="w-full min-h-[100px] text-base max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                        placeholder="Enter your Faculty info"
                        spellcheck="true"
                      ></textarea>
                    </div>
                    <div class="form-control mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button
                        type="submit"
                        class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-lg shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
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
    );

                          }

export default EditFaculty;