import React, { useState } from "react";
import useFatchData from "../../Hooks/useFatchData";

const RegistrationFrom = () => {
  const {data:districts} = useFatchData('https://pu-server-1.onrender.com/api/v1/district');
  const {data:upazilas} = useFatchData('https://pu-server-1.onrender.com/api/v1/upazila');
  const [selecteditem, setSelecteditem] = useState('');
  const handleInputChange = (e) => {
    setSelecteditem(e.target.value);
  };
  const filterUpazila = (upazilas=[]) => {
    let data = upazilas;
    if (selecteditem) {
      data = data.filter((el) => el.district_id === selecteditem);
    }
    return data;
  };
  // filterUpazila(upazilas)
  
  return (
    <div class="flex items-center justify-center mt-4">
      <div class="mx-auto w-full max-w-[700px] border rounded-xl shadow-xl p-8">
        <h1 className="font-bold text-3xl text-center mb-8">
          Registration From
        </h1>
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="fName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  required
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="lName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Collage Name
                </label>
                <input
                  type="text"
                  name="department"
                  required
                  placeholder="Collage Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/3">
              <div class="mb-2">
                <label
                  for="lName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  District
                </label>
                <select
                  onChange={handleInputChange}
                  type="text"
                  name="district"
                  placeholder="District"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value={''}>--Select District--</option>
                  {districts.map((district) => (
                    <option value={district.id}>{district.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/3">
              <div class="mb-2">
                <label
                  for="lName"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Upazilla
                </label>
                <select
                  type="text"
                  name="upazila"
                  placeholder="Upazilla"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  {filterUpazila(upazilas).map((upazila) => (
                    <option>{upazila.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/3">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Contact Number
              </label>
              <input
                type="text"
                name="guest"
                placeholder="Number"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          <div class="-mx-3 mt-2 flex flex-wrap ">
            <div class="w-full px-3 sm:w-1/3">
              <div class="">
                <label
                  for="date"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date Of Birth
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/3">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Topic
              </label>
              <select
                type="text"
                name="guest"
                placeholder="Number"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option className="text-base font-medium text-[#6B7280]">
                  --Select Topic--
                </option>
                <option className="text-base font-medium text-[#6B7280]">
                  Eassy Competition
                </option>
                <option className="text-base font-medium text-[#6B7280]">
                  Photo Competition
                </option>
              </select>
            </div>
          </div>

          <div class="form-control flex-auto w-full  text-lg space-y-2">
            <label class="font-semibold text-gray-600 py-2">Address</label>
            <textarea
              required
              name="address"
              class="w-full min-h-[100px] text-base max-h-[100px] h-24 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
              placeholder="Enter Your Address"
              spellcheck="true"
            ></textarea>
          </div>

          <div class="my-5">
            <label class="mb-3 block text-base font-medium text-[#07074D]">
              Are you coming to the event?
            </label>
            <div class="flex items-center space-x-6">
              <div class="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton1"
                  class="h-5 w-5"
                />
                <label
                  for="radioButton1"
                  class="pl-3 text-base font-medium text-[#07074D]"
                >
                  Yes
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  name="radio1"
                  id="radioButton2"
                  class="h-5 w-5"
                />
                <label
                  for="radioButton2"
                  class="pl-3 text-base font-medium text-[#07074D]"
                >
                  No
                </label>
              </div>
            </div>
          </div>

          <div>
            <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFrom;
