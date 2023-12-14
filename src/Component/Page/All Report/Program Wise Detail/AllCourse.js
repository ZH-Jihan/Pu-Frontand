import React from "react";
import { useParams } from "react-router-dom";
import useFatchData from "../../../Hooks/useFatchData";

const AllCourse = () => {
  const {data:courses} = useFatchData('https://pu-server-1.onrender.com/course');
  // const [selecteditem, setSelecteditem] = useState({
  //   department: "",
  //   program: "",
  // });
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setSelecteditem((prev) => ({ ...prev, [name]: value }));
  // };
  const { id } = useParams();
  const filterdata = (courses=[]) => {
    let data = courses ;
    if (id) {
      data = data.filter((el) => el.drogram === id);
    }
    return data;
  };
  const handleProgram = (course) => {
    if (course.drogram === "--Select Option--") {
      return <span>Not mentioned</span>;
    } else {
      return <span>{course.drogram}</span>;
    }
  };
  return (
    <div className="mx-2 mt-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold py-2">Course List</h1>
      </div>
      <p className="text-xl text-red-500 text-center font-bold py-4">
        {id} Total Course : {filterdata(courses).length}
      </p>
      {/* <div className="mt-4 gap-4 lg:w-2/4 m-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        <div class=" w-full m-auto flex flex-col mb-8">
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
            <option value={""}>--All Department--</option>
            <option value={"BUSINESS"}>Business</option>
            <option value={"ENGLISH"}>English</option>
            <option value={"CIVIL ENGINEERING"}>Civil Engineering</option>
            <option value={"ELECTRICAL & COMPUTER ENGINEERING"}>
              Electrical & Computer Engineering
            </option>
          </select>
        </div>
        <div class="w-full  m-auto flex flex-col mb-8">
          <label class="font-semibold text-gray-600 py-2">Program</label>
          <select
            value={selecteditem.program}
            onChange={handleInputChange}
            autocomplete="None"
            placeholder="Department"
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="program"
          >
            <option value={""}>--All Program--</option>
            <option value={"BBA"}>BBA</option>
            <option value={"MBA"}>MBA</option>
            <option value={"EMBA"}>EMBA</option>
            <option value={"BA IN ENGLISH"}>BA IN ENGLISH</option>
            <option value={"MA IN ELT"}>MA IN ELT</option>
            <option value={"CE"}>CE</option>
            <option value={"CSE"}>CSE</option>
            <option value={"EEE"}>EEE</option>
          </select>
        </div>
      </div> */}

      <table class="min-w-full border-collapse block md:table">
        <thead style={{ color: "#042488" }} class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name Of Program
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Program ID
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Dipartment
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Program
            </th>
            {/* {admin && (
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Actions
              </th>
            )} */}
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          {filterdata(courses).map((course) => (
            <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Course Initial
                </span>
                {course.cInitial}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Course Name
                </span>
                {course.courseName}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Dipartment
                </span>
                {course.department}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Program
                </span>
                {handleProgram(course)}
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

export default AllCourse;
