import React, { useState } from "react";
import useFatchData from "../../Hooks/useFatchData";

const ViewAbsentReport = () => {
  const {data:apsentDatas} = useFatchData('https://pu-server-1.onrender.com/facultyabsent');
  const {data:facultys} = useFatchData('https://pu-server-1.onrender.com/faculty');
  const [chake, setchake] = useState(true);
  const [filterselect, setFilterselect] = useState({
    date: "",
    department: "",
    timeslot: "",
    teacher: "",
    room: "",
    regon: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFilterselect((prev) => ({ ...prev, [name]: value }));
  };
  const teacherFilter = (teacher = []) => {
    let data = teacher;
    if (filterselect.department) {
      data = data.filter((el) => el.dipartment === filterselect.department);
    }
    return data;
  };
  const dataFilter = (rutin = []) => {
    let data = rutin;
    if (filterselect.teacher) {
      data = data.filter(
        (el) => `( ${el.initial} )_${el.fullName}` === filterselect.teacher
      );
    }
    return data;
  };
  const changeTable = (name) => {
    setFilterselect({ teacher: name });
    setchake(true);
  };
  const atAGlance = () => {
    
    const filters = (times) => {
      let data;
      if (times) {
        data = apsentDatas.filter(
          (el) => `( ${el.initial} )_${el.fullName}` === times
        );
      }
      return data;
    };
    return (
      <table class="w-2/4 m-auto">
        <thead class="bg-amber-200 border-b">
          <tr>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Time Slot
            </th>
            <th
              scope="col"
              class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Total Class
            </th>
          </tr>
        </thead>
        <tbody>
          {teacherFilter(facultys).map((faculty) => (
            
            <tr class=" border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {/* <p>{routin.sldate?.find((el)=>el===date)}</p> */}
                <p>
                  ( {faculty.initialname} )_{faculty.name}
                </p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {/* <p>{routin.sldate?.find((el)=>el===date)}</p> */}
                <button onClick={()=>{changeTable(`( ${faculty.initialname} )_${faculty.name}`)}}><u>
                  {filters(`( ${faculty.initialname} )_${faculty.name}`)
                    .length > 0 ? (
                    filters(`( ${faculty.initialname} )_${faculty.name}`).length
                  ) : (
                    <></>
                  )}</u>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  console.log(facultys);
  return (
    <div>
      <p className="text-center font-bold text-3xl my-4">
        Class Cancelled List
      </p>
      <p className="text-3xl font-bold text-red-400 text-center">
        Total : {dataFilter(apsentDatas).length}
      </p>
      <div className="mt-4 gap-4 lg:w-2/4 m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        <div class=" w-full m-auto flex flex-col mb-8">
          <label class="font-semibold text-gray-600 py-2">Department</label>
          <select
            value={filterselect.department}
            onChange={onChange}
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
          <label class="font-semibold text-gray-600 py-2">Teacher</label>
          <select
            value={filterselect.teacher}
            onChange={onChange}
            placeholder="Designation"
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="teacher"
          >
            <option value={""}>--All Teacher--</option>
            {teacherFilter(facultys).map((faculty) => (
              <option>
                ( {faculty.initialname} )_{faculty.name}
              </option>
            ))}
          </select>
        </div>
        <div class="w-full m-auto flex flex-col mb-8">
          <label className="font-semibold text-gray-600 ">Click To See</label>
          {chake === false ? (
            <button
              style={{ "background-color": "#b5e8eb" }}
              onClick={() => setchake(true)}
              class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            >
              View Details
            </button>
          ) : (
            <button
              style={{ "background-color": "#b5e8eb" }}
              onClick={() => {setchake(false); setFilterselect({ teacher:""})}}
              class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            >
              At A Glance
            </button>
          )}
        </div>
      </div>
      {chake === false ? (
        atAGlance()
      ) : (
        <table class="min-w-full border-collapse block md:table">
          <thead
            style={{ color: "#042488" }}
            class="block md:table-header-group"
          >
            <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Room Number
              </th>
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Course Code
              </th>
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Day
              </th>
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Date
              </th>
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Time
              </th>
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Faculty
              </th>
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Job Type
              </th>
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Program
              </th>
              <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Reason
              </th>
            </tr>
          </thead>
          <tbody class="block md:table-row-group">
            {dataFilter(apsentDatas).map((apsentData) => (
              <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Room Number
                  </span>
                  {apsentData.Room}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Course Code
                  </span>
                  {apsentData.CourseCode}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Day
                  </span>
                  {apsentData.Day}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Date
                  </span>
                  {apsentData.Date}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Time
                  </span>
                  {`${apsentData.Start}-${apsentData.End}`}
                </td>

                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Faculty
                  </span>
                  {`( ${apsentData.initial} )_${apsentData.fullName}`}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Job Type
                  </span>
                  {apsentData.type}
                </td>

                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Program
                  </span>
                  {apsentData.Program}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                    Regon
                  </span>
                  {apsentData.regon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAbsentReport;
