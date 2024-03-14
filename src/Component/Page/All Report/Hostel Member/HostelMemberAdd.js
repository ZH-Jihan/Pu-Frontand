import React, { useState } from "react";
import toast from "react-hot-toast";
import CustomAxiosPost from "../../../Hooks/CustomAxiosPost";
import useLocalDataFatch from "../../../Hooks/localDataFatch";
const HostelMemberAdd = () => {
  const { data: totalReg } = useLocalDataFatch("allregStudent.json");
  const { data: admission } = useLocalDataFatch("admissionStuInfo.json");
  const [id, setId] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };

  let student = totalReg.find((el) => el.ar === id);
  if (student === undefined) {
    student = admission.find((el)=> el.AR === id)
  }

  if (id.length === 6 && student === undefined) {
    alert("Please Provied a valide Id")
  }
  const memberAdd = async (event) => {
    event.preventDefault();
    let name;
    if (student?.name === "") {
      name = event.target.name.value;
    } else {
      name = student?.name || student?.Name;
    }
    const studentInfo = {
      name: name,
      id: student?.ar || student?.AR,
      number: `0${student?.contactNum}`,
      batch: student?.programType,
      semester: student?.semesterName || student?.semester,
      flate: event.target.flat.value,
      room: event.target.room.value,
      seat: event.target.seat.value,
      joinDate: event.target.joindate.value,
      department: student?.mainProgramName || student?.programName,
    };
    console.log(studentInfo);
    try {
      const result = await CustomAxiosPost("/hostelmember", studentInfo);

      // Handle the result (e.g., show a success message)
      console.log('Post successful:', result);
      if (result.status === "Success") {
        toast.success("Successfully Add Member");
        setId("")
      event.target.reset()
      }
      
  } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Post failed:', error);
  }
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
                  <h2 class="font-semibold text-3xl mr-auto">
                    Add Hostel Member{" "}
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:grid grid lg:grid-cols-4 gap-4 w-full text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Student Id
                          <span title="required" className="text-red-500">
                            *
                          </span>
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
                          Student Name
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                        placeholder={!student?.name || !student?.Name ? "Plese Input Name" : ""}
                          value ={
                            student?.name || student?.Name || ""
                          }
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="name"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Flat Number
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Input Flat Number"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="flat"
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
                          Seat Number
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder="Seat Number"
                          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          required
                          type="text"
                          name="seat"
                        />
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Join Date
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input
                          placeholder=""
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
