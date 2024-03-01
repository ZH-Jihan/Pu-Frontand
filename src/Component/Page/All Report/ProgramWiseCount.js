import React, { useState } from "react";
import useFatchData from "../../Hooks/useFatchData";

const ProgramWiseCount = () => {
  const {data:routindetail} = useFatchData('https://pu-server-1.onrender.com/api/v1/routin');
  const {data:programs} = useFatchData('https://pu-server-1.onrender.com/api/v1/program');
  const [selecteditem, setSelecteditem] = useState({
    department: "",
    jobtype: "",
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
  //   const f = facultys.map((el) => `( ${el.initialname} )_${el.name}`);

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
  // const result = [];
  // f.forEach((item2) => {
  //   routindetail.forEach((item1) => {
  //     if (item1.teacher === item2) {
  //       result.push({ name: item1.teacher, id: item1.course });
  //     }
  //   });
  // });
  const fName = (teacherNameToCount) => {
    let classCount = 0;
    for (let i = 0; i < routindetail.length; i++) {
      if (routindetail[i].program === teacherNameToCount) {
        classCount++;
      }
    }
    return classCount;
  };

  const dayName = (num) => {
    if (num === "0") {
      return <>Sunday</>;
    }
    if (num === "1") {
      return <>Monday</>;
    }
    if (num === "2") {
      return <>Tuesday</>;
    }
    if (num === "3") {
      return <>Wednesday</>;
    }
    if (num === "4") {
      return <>Thursday</>;
    }
    if (num === "5") {
      return <>Friday</>;
    }
    if (num === "6") {
      return <>Saturday</>;
    }
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
        <h1 className="text-2xl font-bold py-2">Program Wise Class List</h1>
      </div>
      <div>
        {/* <h1 className="text-xl text-center py-4">
          <span className="text-cyan-500 font-bold">Faculty Name :</span>{" "}
          {selecteditem.faculty}
        </h1> */}
        <p className="text-xl text-red-400 text-center font-bold ">
          Total Class Taken In The Week : {filterdata(routindetail).length}
        </p>
      </div>

      <table class="min-w-full border-collapse block md:table ">
        <thead style={{ color: "#042488" }} class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Department
            </th>
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Program Name
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Total Class In Week
            </th>
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          {filterdata(programs).map((program) => (
            <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Department
                </span>
                {program.dipartment}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Program Name
                </span>
                {program.name}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  No OF Class In Week
                </span>
                <button>{fName(program.name)}</button>
                {/* {fName("MBA")} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramWiseCount;
