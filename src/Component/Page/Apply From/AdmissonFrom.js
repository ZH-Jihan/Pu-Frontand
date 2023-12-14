import React from "react";

const AdmissonFrom = () => {
  return (
    <div class="flex items-center justify-center mt-4">
      <div class="mx-auto w-full max-w-[700px] border rounded-xl shadow-xl p-8">
        <h1 className="font-bold text-3xl text-center mb-8">Admisson From</h1>
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
                  Desired Department
                </label>
                <input
                  type="text"
                  name="department"
                  required
                  placeholder="Desired Department"
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
                  SSC Result
                </label>
                <input
                  type="text"
                  name="ssc "
                  placeholder="Point/Rank"
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
                  HSC/Diploma Result
                </label>
                <input
                  type="text"
                  name="hsc"
                  placeholder="Point/Rank"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/3">
              <div class="mb-5">
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
          </div>

          <div class="-mx-3 flex flex-wrap mb-5">
            <div class="w-full px-3 sm:w-1/3">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Parsonal Number
              </label>
              <input
                type="text"
                name="guest"
                placeholder="Number"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="w-full px-3 sm:w-1/3">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Guardian Number
              </label>
              <input
                type="text"
                name="guest"
                placeholder="Number"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="w-full px-3 sm:w-1/3">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Reference
              </label>
              <select
                class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="text"
                name="reference"
              >
                <option>--Select Reference--</option>
                <option>FaceBook</option>
                <option>Website</option>
                <option>Paper Add</option>
                <option>Relativs</option>
                <option>PU Teacher</option>
                <option>PU Staf</option>
                <option>Admisson Office</option>
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

export default AdmissonFrom;
