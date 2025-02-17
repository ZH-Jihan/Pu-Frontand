import React, { useState } from "react";
import useFatchData from "../../../Hooks/useFatchData";
import FacultyBtn from "../../../Utilits/All Buttons/FacultyBtn";
import Button from "../../../Utilits/Button";
import Loading from "../../Sheared Page/Loading";
import Faculty from "./Faculty";

const AllFacultys = () => {
  const { data: faculty, error } = useFatchData("/faculty");
  const [chake, setchake] = useState(false);
  const [selecteditem, setSelecteditem] = useState({
    department: "",
    designation: "",
    jobtype: "",
    university: "",
    marrited: "",
  });

  //**** Filter & Set Only Active Faculty For Showing ****//
  const activeFaculty = (datas = []) => {
    let faculty = datas;
    if (faculty) {
      faculty = faculty?.filter((el) => el.status === "Active");
    }
    return faculty;
  };
  const facultys = activeFaculty(faculty);

  const onChange = (e) => {
    const { name, value } = e.target;
    setSelecteditem((prev) => ({ ...prev, [name]: value }));
  };

  //*****.. Load All Filter btn ..*****//
  const btnData = FacultyBtn({ onChange, selecteditem });

  //*****.. This condetion work from University table ..*****//
  if (chake) {
    selecteditem.university = "";
  }

  //*****.. Funtion For Match & Sort Faculty Married Date Wise ..*****//
  const sortDataMonthWise = (data) => {
    const today = new Date();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayData = [];
    // const thisMonthData = [];
    const otherData = [];
    const dataShort = (data) => {
      data.sort((a, b) => {
        let dateA;
        let dateB;
        if (a.marritStatus === "Unmarried" && b.marritStatus === "Unmarried") {
          dateA = new Date(a.dob);
          dateB = new Date(b.dob);
        } else {
          dateA = new Date(a.marritStatus);
          dateB = new Date(b.marritStatus);
        }
        // Sort by month first
        const monthComparison = dateA.getMonth() - dateB.getMonth();
        if (monthComparison !== 0) {
          return monthComparison;
        }
        // If the month is the same, sort by day
        const dayComparison = dateA.getDate() - dateB.getDate();
        if (dayComparison !== 0) {
          return dayComparison;
        }
        return a.name.localeCompare(b.name);
      });
    };
    data.forEach((person) => {
      let dob;
      if (person.marritStatus === "Unmarried") {
        dob = new Date(person.dob);
      } else {
        dob = new Date(person.marritStatus);
      }
      if (dob.getMonth() === todayMonth && dob.getDate() > todayDay) {
        if (dob.getMonth() === todayMonth && dob.getDate() === todayDay) {
          todayData.push(person);
        }
        todayData.push(person);
      } else {
        otherData.push(person);
      }
    });
    dataShort(todayData);
    dataShort(otherData);
    const sortedData = todayData.concat(otherData);
    return sortedData;
  };
  
  //**** Collect Select Btn Data From Faculty Array ****//
  const universitys = Array.from(
    new Set(facultys.map((el) => el.university).filter((uni) => uni !== ""))
  );
  const department = Array.from(
    new Set(facultys.map((el) => el.dipartment).filter((uni) => uni !== ""))
  );

  //*****.. Filtering faculty Selected Value Wise ..*****//
  const filterFaculty = (facultys = []) => {
    let data = facultys;
    if (selecteditem.department) {
      data = data.filter((el) => el.dipartment === selecteditem.department);
    }
    if (selecteditem.marrited) {
      if (selecteditem.marrited === "Married") {
        data = data.filter(
          (el) =>
            el.marritStatus !== "" &&
            el.marritStatus !== "Unmarried" &&
            el.marritStatus !== "Seperated"
        );
        return sortDataMonthWise(data);
      }
      if (selecteditem.marrited === "Unmarried") {
        data = data.filter((el) => el.marritStatus === "Unmarried");
        return sortDataMonthWise(data);
      }

      data = data.filter((el) => el.marritStatus === selecteditem.marrited);
    }
    if (selecteditem.designation) {
      data = data.filter((el) => el.designation === selecteditem.designation);
    }
    if (selecteditem.jobtype) {
      data = data.filter((el) => el.jobtype === selecteditem.jobtype);
    }
    if (selecteditem.university) {
      data = data.filter((el) => el.university === selecteditem.university);
    }
    return data;
  };

  //*****..Filtering faculty Designation for show number..*****//
  const professor = facultys.filter((el) => el.designation === "Professor");
  const associateProf = facultys.filter((el) => el.designation === "Associate Professor");
  const assistantProf = facultys.filter((el) => el.designation === "Assistant Professor");
  const lecturer = facultys.filter((el) => el.designation === "Lecturer");

  const changeTable = (name) => {
    setSelecteditem({ university: name });
    setchake(false);
  };

  const universitycount = () => {
    const filters = (university) => {
      let data;
      if (university) {
        data = facultys.filter((el) => el.university === university);
      }
      return data;
    };
    return (
      <div>
        <div className="mt-4 mb-4 lg:w-3/6 m-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
          <Button details={btnData.jobTypeBtn} />
          <Button details={btnData.departmentBtn} />
        </div>
        <table class="w-2/4 m-auto">
          <thead class="bg-amber-200 border-b">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                University Name
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Number Of Faculty
              </th>
            </tr>
          </thead>
          <tbody>
            {universitys?.map((university) => (
              <tr class=" border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {/* <p>{routin.sldate?.find((el)=>el===date)}</p> */}
                  <p>{university}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {/* <p>{routin.sldate?.find((el)=>el===date)}</p> */}
                  <button onClick={() => changeTable(university)}>
                    <u>
                      {filterFaculty(filters(university)).length > 0 ? (
                        <>{filterFaculty(filters(university)).length}</>
                      ) : (
                        <></>
                      )}
                    </u>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  if (!facultys.length) {
    return <Loading />;
  } else {
    return (
      <div className="w-auto p-4">
        <>
          <div>
            <h1 className="font-bold text-5xl mt-8 mb-4 text-center">
              Faculty List
            </h1>
            <p className="text-center mb-4 text-red-800">
              <span className="text-base p-2">
                Professor : {filterFaculty(professor).length}
              </span>
              <span className="text-base p-2">
                Associate Professor :{" "}
                {filterFaculty(associateProf).length}
              </span>
              <br></br>
              <span className="text-base p-2">
                Assistant Professor :{" "}
                {filterFaculty(assistantProf).length}
              </span>
              <span className="text-base p-2">
                Lecturer :{" "}
                {filterFaculty(lecturer).length}
              </span>
            </p>
            <p className="font-bold text-xl mt-2 mb-4 text-red-500 text-center">
              Total Faculty : {filterFaculty(facultys).length}
            </p>
          </div>
          <div class="w-3/4 lg:w-1/4 m-auto flex flex-col mb-8">
            <label className="font-semibold text-gray-600 ">Click To See</label>
            {chake === false ? (
              <button
                style={{ "background-color": "#b5e8eb" }}
                onClick={() => setchake(true)}
                class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              >
                University Wise Faculty At A Glance
              </button>
            ) : (
              <button
                style={{ "background-color": "#b5e8eb" }}
                onClick={() => setchake(false)}
                class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              >
                View Faculty Details Info
              </button>
            )}
          </div>

          {chake === true ? (
            universitycount()
          ) : (
            <>
              <div className="mt-4 lg:w-5/6 m-auto grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
                <Button details={btnData.jobTypeBtn} />
                <Button details={btnData.designationdBtn} />
                <div class="w-3/4  m-auto flex flex-col mb-2">
                  <label class="font-semibold text-gray-600 py-2">
                    Department
                  </label>
                  <select
                    class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    value={selecteditem.department}
                    onChange={onChange}
                    name="department"
                  >
                    <option value="">--- Select ---</option>
                    {department.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="w-3/4  m-auto flex flex-col mb-2">
                  <label class="font-semibold text-gray-600 py-2">
                    University
                  </label>
                  <select
                    class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    value={selecteditem.university}
                    onChange={onChange}
                    name="university"
                  >
                    <option value="">--- Select ---</option>
                    {universitys.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <Button details={btnData.marritedBtn} />
              </div>
              <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 justify-items-center">
                {filterFaculty(facultys).map((faculty) => (
                  <Faculty key={faculty.id} faculty={faculty} />
                ))}
              </div>
            </>
          )}
        </>
      </div>
    );
  }
};

export default AllFacultys;
