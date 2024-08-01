import React from "react";
import toast from "react-hot-toast";
import CustomAxiosPost from "../../../Hooks/CustomAxiosPost";

const EntryAlumni = () => {
  const memberAdd = async (event) => {
    event.preventDefault();

    const alumniInfo = {
      country: event.target.country.value,
      name: event.target.name.value,
      department: event.target.department.value,
      session: event.target.session.value,
      idNo: event.target.id.value,
      about: event.target.description.value,
    };

    try {
      const result = await CustomAxiosPost("/alumni", alumniInfo);

      // Handle the result (e.g., show a success message)

      if (result.status === "Success") {
        toast.success("Successfully Add Member");

        event.target.reset();
      }
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Post failed:", error);
    }
  };
  const inputList = [
    {
      lable: "Country",
      placholder: "Country Nmae",
      type: "text",
      name: "country",
    },
    { lable: "Alumni Name", placholder: "Name", type: "text", name: "name" },
    {
      lable: "Department",
      placholder: "Edu. Department",
      type: "text",
      name: "department",
    },
    {
      lable: "Session No",
      placholder: "Session",
      type: "text",
      name: "session",
    },
    {
      lable: "Id/Reg. No",
      placholder: "Id Number",
      type: "number",
      name: "id",
    },
  ];
  return (
    <div>
      <form onSubmit={memberAdd}>
        <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">
                    Entry Global Alumni{" "}
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:grid grid lg:grid-cols-3 gap-4 w-full text-xs">
                      {inputList.map((item) => (
                        <div class="form-control  mb-2 space-y-2 w-full text-base">
                          <label class="font-semibold text-gray-600 text-xl py-2">
                            {item.lable}
                            <span title="required" className="text-red-500">
                              *
                            </span>
                          </label>
                          <input
                            placeholder={item.placholder}
                            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                            required
                            type={item.type}
                            name={item.name}
                          />
                        </div>
                      ))}
                    </div>
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

export default EntryAlumni;
