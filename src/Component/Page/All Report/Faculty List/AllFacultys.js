import React, { useState } from "react";
import useFatchData from "../../../Hooks/useFatchData";
import FacultyBtn from "../../../Utilits/All Buttons/FacultyBtn";
import Button from "../../../Utilits/Button";
import Loading from "../../Sheared Page/Loading";
import Faculty from "./Faculty";
const universitys = [
  { id: "1", name: "University of Dhaka" },
  { id: "2", name: "BUET" },
  { id: "3", name: "RUET" },
  { id: "4", name: "Rajshahi University" },
  { id: "5", name: "Jahangirnagar University" },
  { id: "6", name: "North South University" },
  { id: "7", name: "Jagannath University" },
  { id: "8", name: "University of Chittagong" },
  { id: "9", name: "Ahsanullah University" },
  { id: "10", name: "University of Oklahoma" },
  { id: "11", name: "Brac University" },
  { id: "12", name: "Anglia Ruskin University" },
  { id: "13", name: "Asian Institute of Technology" },
  { id: "14", name: "Cardiff University" },
  { id: "15", name: "Daffodil University" },
  { id: "16", name: "Indian Institute of Technology" },
  { id: "17", name: "IUBAT" },
  { id: "18", name: "Shahjalal University" },
  { id: "19", name: "University of East London" },
];

const AllFacultys = () => {
  const { data: facultys, loading } = useFatchData(
    "https://pu-server-1.onrender.com/faculty"
  );
  const [chake, setchake] = useState(false);
  const [selecteditem, setSelecteditem] = useState({
    department: "",
    designation: "",
    jobtype: "",
    university: "",
    marrited: "",
  });
  const [countFaculty] = useState({
    professor: "Professor",
    associateProf: "Associate Professor",
    assistantProf: "Assistant Professor",
    lecturer: "Lecturer",
  });
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

  //*****.. Funtion Work From filtering faculty ..*****//
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
        )
        const today = new Date();
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();
        
        const todayData = [];
        const otherData = [];
        
        data.forEach(person => {
            const dob = new Date(person.marritStatus);
            if (dob.getMonth() === todayMonth && dob.getDate() === todayDay) {
                todayData.push(person);
            } else {
                otherData.push(person);
            }
        });
        
        todayData.sort((a, b) => a.name.localeCompare(b.name));

        otherData.sort((a, b) => {
          const dateA = new Date(a.marritStatus);
          const dateB = new Date(b.marritStatus);
      
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
      const sortedData = todayData.concat(otherData);
      return sortedData
      }
      data = data.filter((el) => el.marritStatus == selecteditem.marrited);
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

  //*****.. This Funtion filtering faculty Designation..*****//
  const designationFilter = (facultys = []) => {
    let data = facultys;
    let professor;
    let associateProf;
    let assistantProf;
    let lecturer;
    if (countFaculty.professor) {
      professor = data.filter(
        (el) => el.designation === countFaculty.professor
      );
    }
    if (countFaculty.associateProf) {
      associateProf = data.filter(
        (el) => el.designation === countFaculty.associateProf
      );
    }
    if (countFaculty.assistantProf) {
      assistantProf = data.filter(
        (el) => el.designation === countFaculty.assistantProf
      );
    }
    if (countFaculty.lecturer) {
      lecturer = data.filter((el) => el.designation === countFaculty.lecturer);
    }
    return { professor, associateProf, assistantProf, lecturer };
  };

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
                  <p>{university.name}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {/* <p>{routin.sldate?.find((el)=>el===date)}</p> */}
                  <button onClick={() => changeTable(university.name)}>
                    <u>
                      {filterFaculty(filters(university.name)).length > 0 ? (
                        <>{filterFaculty(filters(university.name)).length}</>
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
      <div className="w-auto">
        <>
          <div>
            <h1 className="font-bold text-5xl mt-8 mb-4 text-center">
              Faculty List
            </h1>
            <p className="text-center mb-4 text-red-800">
              <span className="text-base p-2">
                Professor :{" "}
                {filterFaculty(designationFilter(facultys).professor).length}
              </span>
              <span className="text-base p-2">
                Associate Professor :{" "}
                {
                  filterFaculty(designationFilter(facultys).associateProf)
                    .length
                }
              </span>
              <br></br>
              <span className="text-base p-2">
                Assistant Professor :{" "}
                {
                  filterFaculty(designationFilter(facultys).assistantProf)
                    .length
                }
              </span>
              <span className="text-base p-2">
                Lecturer :{" "}
                {filterFaculty(designationFilter(facultys).lecturer).length}
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
                <Button details={btnData.marritedBtn} />
                <Button details={btnData.designationdBtn} />
                <Button details={btnData.departmentBtn} />
                <Button details={btnData.universityBtn} other={universitys} />
              </div>
              <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
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
