import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFatchData from "../../../Hooks/useFatchData";

const AllProgram = () => {
  const {data:programs} = useFatchData('/program');
  const {data:studentsinfo} = useFatchData('/regstudent');
  const {data:courses} = useFatchData('/course');
  const [selecteditem, setSelecteditem] = useState({
    department: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelecteditem((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const courseDetail = (name) => {
    const id = name;
    navigate(`/courses/${id}`);
  };
  const studentDetail = (name) => {
    const id = name;
    navigate(`/regstudetails/${id}`)
  };
  const filterProgram = (program = []) => {
    let data = program;
    if (selecteditem.department) {
      data = data.filter((el) => el.dipartment === selecteditem.department);
    }
    return data;
  };
  const filtercourse = (name) => {
    let data;
    if (name) {
      data = courses.filter((el) => el.drogram === name);
    }
    return data;
  };
  const filterStudent = (name) => {
    let data;
    if (name) {
      if (name === "BA IN ENGLISH") {
        data = studentsinfo.filter((el) => el.programName === "ENG")
      }
      else if(name === "MA IN ELT") {
        data = studentsinfo.filter((el) => el.programName === "MAELT")
      }else(
        data = studentsinfo.filter((el) => el.programName === name)
      )
    }
    return data;
  };
  return (
    <div className="mx-2 mt-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold py-2">Program List</h1>
      </div>
      <p className="text-xl text-red-500 text-center font-bold pt-4">
        Total Program : {filterProgram(programs).length}
      </p>
      <div class="lg:w-1/4  m-auto flex flex-col mb-8">
        <label class="font-semibold text-gray-600 py-2">Department</label>
        <select
          value={selecteditem.department}
          onChange={handleInputChange}
          autocomplete="None"
          placeholder="Department"
          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
          type="text"
          name="department"
        >
          <option value={""}>--Select Department--</option>
            <option>DEPARTMENT OF BUSINESS</option>
            <option>DEPARTMENT OF ENGLISH</option>
            <option>DEPARTMENT OF CIVIL ENGINEERING</option>
            <option>DEPARTMENT OF ELECTRICAL & COMPUTER ENGINEERING</option>
        </select>
      </div>
      <table class="min-w-full border-collapse block md:table">
        <thead style={{ color: "#042488" }} class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name Of Program
            </th>
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Number Of Course
            </th>
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Number Of Student
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Program ID
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Dipartment
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Status
            </th>
            {/* {admin && (
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            )} */}
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          {filterProgram(programs).map((program) => (
            <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td class="p-2 md:border md:border-grey-500 text-left font-bold block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Program Name
                </span>
                {program.name}
              </td>
              <td class="text-blue-800 p-2 md:border md:border-grey-500 text-left font-bold block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Number Of Course
                </span>
                <button
                onClick={()=>{courseDetail(program.name)}}
                >
                <u>{filtercourse(program.name).length}</u>
                </button>
              </td>
              <td class="text-blue-800 p-2 md:border md:border-grey-500 text-left font-bold block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Number Of Student
                </span>
                <button
                onClick={()=>{studentDetail(program.name)}}
                >
                <u>{filterStudent(program.name).length}</u>
                </button>
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Program ID
                </span>
                {program.id}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Dipartment
                </span>
                {program.dipartment}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Status
                </span>
                {program.description}
              </td>
              {/* {admin && (
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                    Edit
                  </button>
                  <button class="ml-8 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                    Delete
                  </button>
                </td>
              )} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProgram;
