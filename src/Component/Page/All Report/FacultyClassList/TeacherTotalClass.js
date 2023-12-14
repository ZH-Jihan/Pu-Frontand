import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFatchData from "../../../Hooks/useFatchData";
import Loading from "../../Sheared Page/Loading";

const TeacherTotalClass = () => {
  const {data:facultys,loading} = useFatchData('https://pu-server-1.onrender.com/faculty');
  const {data:routindetail} = useFatchData('https://pu-server-1.onrender.com/routin');
  const [selecteditem, setSelecteditem] = useState({
    department: "",
    jobtype: "",
    faculty: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelecteditem((prev) => ({ ...prev, [name]: value }));
  };

  const date1 = new Date("2022-01-10");
  const date2 = new Date("2022-01-20");
  const dates = [];

  for (let date = date1; date <= date2; date.setDate(date.getDate() + 1)) {
    dates.push(date);
  }
  // const commonData = array1.filter(element => dates.includes(element));

  // console.log(commonData);

  const filterdata = (course = []) => {
    let data = course;
    if (selecteditem.department) {
      data = data.filter((el) => el.dipartment === selecteditem.department);
    }
    if (selecteditem.jobtype) {
      data = data.filter((el) => el.jobtype === selecteditem.jobtype);
    }
    return data;
  };

  const navigate = useNavigate();
  const classDetail = (name) => {
    const id = name;
    // setName(name);
    navigate(`/mis/teacherclass/${id}`);
  };
  // const result = [];
  // f.forEach((item2) => {
  //   routindetail.forEach((item1) => {
  //     if (item1.teacher === item2) {
  //       result.push({ name: item1.teacher, id: item1.course });
  //     }
  //   });
  // });
  const fName = (teacherNameToCount) => {
    let classCount;
    if (teacherNameToCount) {
      classCount = routindetail.filter(
        (el) => el.teacher === teacherNameToCount
      );
    }

    const uniqueDays = new Set();

// Iterate over each object and add the day to the set
for (let i = 0; i < classCount.length; i++) {
  uniqueDays.add(classCount[i].day);
}

// Get the count of unique days
const count = uniqueDays.size;
    // for (let i = 0; i < routindetail.length; i++) {
    //   if (routindetail[i].teacher === teacherNameToCount) {
    //     classCount++;
    //   }
    // }
    // console.log(count);
    return {classCount,count};
  };

  //   const handleProgram = (course) => {
  //     if (course.drogram === "--Select Option--") {
  //       return <span>Not mentioned</span>;
  //     } else {
  //       return <span>{course.drogram}</span>;
  //     }
  //   };
  return (
    <div className="mx-2 mt-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold py-2">Faculty Class List</h1>
      </div>
      <div>
        {/* <h1 className="text-xl text-center py-4">
          <span className="text-cyan-500 font-bold">Faculty Name :</span>{" "}
          {selecteditem.faculty}
        </h1> */}
        <p className="text-xl text-red-400 text-center font-bold ">
          Total Class In This Week : {filterdata(routindetail).length}
        </p>
      </div>

      <div className="mt-4 gap-4 lg:w-2/4 m-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
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
            <option value={"DEPARTMENT OF BUSINESS"}>Business</option>
            <option value={"DEPARTMENT OF ENGLISH"}>English</option>
            <option value={"DEPARTMENT OF CIVIL ENGINEERING"}>
              Civil Engineering
            </option>
            <option value={"DEPARTMENT OF ELECTRICAL & COMPUTER ENGINEERING"}>
              Electrical & Computer Engineering
            </option>
          </select>
        </div>
        <div class="w-full  m-auto flex flex-col mb-8">
          <label class="font-semibold text-gray-600 py-2">Job Type</label>
          <select
            value={selecteditem.jobtype}
            onChange={handleInputChange}
            autocomplete="None"
            placeholder="Department"
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="jobtype"
          >
            <option value={""}>--All Job Type--</option>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
        </div>
        {/* <div class="w-full  m-auto flex flex-col mb-8">
          <label class="font-semibold text-gray-600 py-2">Faculty</label>
          <select
            value={selecteditem.faculty}
            onChange={handleInputChange}
            autocomplete="None"
            placeholder="Department"
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="faculty"
          >
            <option value={""}>--All Teacher--</option>
            {facultys.map((faculty) => (
              <option>
                ( {faculty.initialname} )_{faculty.name}
              </option>
            ))}
          </select>
        </div> */}
      </div>
      {
        loading?(<Loading/>):(<table class="m-auto lg:w-full border-collapse block md:table ">
        <thead style={{ color: "#042488" }} class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Faculty Name
            </th>
            
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Total Class In Week
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Weekly Class
            </th>
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Designation
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Department
            </th>
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Job Type
            </th>

            
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          {filterdata(facultys).map((faculty) => (
            <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Faculty Name
                </span>
                {`( ${faculty.initialname} )_${faculty.name}`}
              </td>
              
              <td class="text-blue-800 p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Total Class
                </span>
                <button
                  onClick={() => {
                    classDetail(`( ${faculty.initialname} )_${faculty.name}`);
                  }}
                >
                  <u>
                    {fName(`( ${faculty.initialname} )_${faculty.name}`).classCount.length}
                  </u>
                </button>
                {/* {fName("MBA")} */}
              </td>

              <td class="text-red-400 p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Weekly Class
                </span>
                {fName(`( ${faculty.initialname} )_${faculty.name}`).count} Day
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Designation
                </span>
                {faculty.designation}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Department
                </span>
                {faculty.dipartment}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Job Type
                </span>
                {faculty.jobtype}
              </td>

              
            </tr>
          ))}
        </tbody>
      </table>)
      }
      
    </div>
  );
};

export default TeacherTotalClass;
