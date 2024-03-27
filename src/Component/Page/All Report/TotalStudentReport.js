import React, { useState } from "react";
import useLocalDataFatch from "../../Hooks/localDataFatch";
import useStuAnalyzeBtn from "../../Utilits/All Buttons/StuAnalyzeBtn";
import Button from "../../Utilits/Button";
import TableHead from "../../Utilits/Table/TableHead";
const tableHead = [
  { field: "", header: "Total" },
  { field: "", header: "BBA" },
  { field: "", header: "CE" },
  { field: "", header: "CSE" },
  { field: "", header: "ECO" },
  { field: "", header: "EEE" },
  { field: "", header: "MBA" },
  { field: "", header: "EMBA" },
  { field: "", header: "ENG" },
  { field: "", header: "MAELT" },
  { field: "", header: "ETE" },
  { field: "", header: "IBUS" },
  { field: "", header: "IENG" },
  { field: "", header: "PMBA" },
];
const years = [
  { year: "2024" },
  { year: "2023" },
  { year: "2022" },
  { year: "2021" },
  { year: "2020" },
  { year: "2019" },
  { year: "2018" },
  { year: "2017" },
  { year: "2016" },
  { year: "2015" },
  { year: "2014" },
  { year: "2013" },
  { year: "2012" },
  { year: "2011" },
  { year: "2010" },
  { year: "2009" },
  { year: "2008" },
  { year: "2007" },
  { year: "2006" },
  { year: "2005" },
  { year: "2004" },
  { year: "2003" },
];
const TotalStudentReport = () => {
  const { data: totalReg } = useLocalDataFatch("allregStudent.json");
  const { data: semesters } = useLocalDataFatch("semester.json");
  const { data: studentsinfo } = useLocalDataFatch("admissionStuInfo.json");

  const [filterselect, setFilterselect] = useState({
    mainReport: "",
    addSubReport: "",
    regSubReport: "",
    programtype: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFilterselect((prev) => ({ ...prev, [name]: value }));
  };
  const btn = useStuAnalyzeBtn({ onChange, filterselect });

  const filterSem = (totaldata, name) => {
    let datas;
    let bba, ce, cse, eco, eee, emba, eng, ete, ibus, ieng, maelt, mba, pmba;
    if (name) {
      datas = totaldata.filter(
        (el) => el.semester === name || el.semesterName === name
      );
    } else {
      datas = totaldata;
    }
    if (filterselect.programtype) {
      if (name) {
        datas = datas.filter(
          (el) => el.programType === filterselect.programtype
        );
      } else {
        datas = totaldata.filter(
          (el) => el.programType === filterselect.programtype
        );
      }
    }

    if (datas) {
      bba = datas.filter(
        (el) => el.programName === "BBA" || el.mainProgramName === "BBA"
      );
    }
    if (datas) {
      ce = datas.filter(
        (el) => el.programName === "CE" || el.mainProgramName === "CE"
      );
    }
    if (datas) {
      cse = datas.filter(
        (el) => el.programName === "CSE" || el.mainProgramName === "CSE"
      );
    }
    if (datas) {
      eco = datas.filter(
        (el) => el.programName === "ECO" || el.mainProgramName === "ECO"
      );
    }
    if (datas) {
      eee = datas.filter(
        (el) => el.programName === "EEE" || el.mainProgramName === "EEE"
      );
    }
    if (datas) {
      emba = datas.filter(
        (el) => el.programName === "EMBA" || el.mainProgramName === "EMBA"
      );
    }
    if (datas) {
      eng = datas.filter(
        (el) => el.programName === "ENG" || el.mainProgramName === "ENG"
      );
    }
    if (datas) {
      ete = datas.filter(
        (el) => el.programName === "ETE" || el.mainProgramName === "ETE"
      );
    }
    if (datas) {
      ibus = datas.filter(
        (el) => el.programName === "IBUS" || el.mainProgramName === "IBUS"
      );
    }
    if (datas) {
      ieng = datas.filter(
        (el) => el.programName === "IENG" || el.mainProgramName === "IENG"
      );
    }
    if (datas) {
      maelt = datas.filter(
        (el) => el.programName === "MAELT" || el.mainProgramName === "MAELT"
      );
    }
    if (datas) {
      mba = datas.filter(
        (el) => el.programName === "MBA" || el.mainProgramName === "MBA"
      );
    }
    if (datas) {
      pmba = datas.filter(
        (el) => el.programName === "PMBA" || el.mainProgramName === "PMBA"
      );
    }

    return {
      datas,
      bba,
      ce,
      cse,
      eco,
      eee,
      emba,
      eng,
      ete,
      ibus,
      ieng,
      maelt,
      mba,
      pmba,
    };
  };

  const droppedStudent = () => {
    
    const filterStudent = (sem) => {
      let fRegStudent;
      let fAddmiStudent;
      const matchedObjects = [];
      if (sem) {
        fRegStudent = totalReg.filter((el) => el.semesterName === sem);
      }
      if (sem) {
        fAddmiStudent = studentsinfo.filter((el) => el.semester === sem);
      }
      if (sem) {
        // Iterate through objects in array1
        for (const obj1 of fRegStudent) {
          const propertyToCompare = obj1.ar;

          // Iterate through objects in array2
          for (const obj2 of fAddmiStudent) {
            if (obj2.AR === propertyToCompare) {
              matchedObjects.push({ obj1, obj2 }); // Store matched objects or their properties
              break; // Break the loop once a match is found
            }
          }
        }
      }
      console.log(matchedObjects);
      return { fRegStudent, fAddmiStudent, matchedObjects };
    };
    return (
      <div>
        <table class="w-2/4 m-auto">
        <TableHead data={[
          {field: "", header: "Semester"},
          {field: "", header: "Regester"},
          {field: "", header: "Admission"},
          {field: "", header: "Dropped"}
          ]}/>
          <tbody>
            {semesters.map((semester) => (
              <tr class=" border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {semester.name}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {filterStudent(semester.name).fRegStudent.length}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {filterStudent(semester.name).fAddmiStudent.length}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {filterStudent(semester.name).fAddmiStudent.length -
                    filterStudent(semester.name).matchedObjects.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const addmisonTableBody = (arry, name) => {
    // tableHead = [
    //   { field: "", header: "Total" },
    //   { field: filterSem(arry, name).ce.length, header: "CE" },
    //   { field: filterSem(arry, name).cse.length, header: "CSE" },
    //   { field: filterSem(arry, name).eee.length, header: "EEE" },
    //   { field: filterSem(arry, name).eng.length, header: "ENG" },
    //   { field: filterSem(arry, name).maelt.length, header: "MAELT" },
    //   { field: filterSem(arry, name).ete.length, header: "ETE" },
    //   { field: filterSem(arry, name).ieng.length, header: "IENG" },
    //   { field: filterSem(arry, name).bba.length, header: "BBA" },
    //   { field: filterSem(arry, name).mba.length, header: "MBA" },
    //   { field: filterSem(arry, name).emba.length, header: "EMBA" },
    //   { field: filterSem(arry, name).eco.length, header: "ECO" },
    //   { field: filterSem(arry, name).ibus.length, header: "IBUS" },
    //   { field: filterSem(arry, name).pmba.length, header: "PMBA" },
    // ];
    return (
      <>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).bba.length}
        </td>
          <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).ce.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).cse.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).eco.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).eee.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).mba.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).emba.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).eng.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).maelt.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).ete.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).ibus.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).ieng.length}
        </td>
        <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {filterSem(arry, name).pmba.length}
        </td>
      </>
    );
  };

  // Yearly total student info funtion
  
  const programTypeTableWyear = (data = []) => {
    const finddata = (parms) => {
      const data = totalReg.filter((el) => el.semesterName === parms);
      return data;
    };
    const findyear = (parms) => {
      let data;
      if (parms) {
        data = semesters.filter((el) => el.year === parms);
      }
      let fall = finddata(data[0]?.name);
      let summer = finddata(data[1]?.name);
      let spring = finddata(data[2]?.name);
      const arr = [].concat(fall, summer, spring);

      const day = arr.filter((el) => el.programType === "Day");
      const evening = arr.filter((el) => el.programType === "Evening");
      const weekend = arr.filter((el) => el.programType === "Weekend");
      return { arr, day, evening, weekend ,fall,spring,summer};
    };
    console.log(findyear("2021"));
    return (
      <table class="lg:w-1/4 m-auto">
        <TableHead data={[
          {field: "", header: "Semester"},
          {field: "", header: "Total"},
          {field: "", header: "Spring"},
          {field: "", header: "Summer"},
          {field: "", header: "Fall"},
          {field: "", header: "Day"},
          {field: "", header: "Evening"},
          {field: "", header: "Weekend"},
          ]}/>
        <tbody>
          {/* <tr class=" border-b"> */}
          {years.map((year) => (
            <tr class=" border-b">
              <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                <p>{year.year}</p>
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-base font-bold text-green-600">
                <p>{findyear(year.year).arr.length}</p>
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-base font-bold text-blue-600">
                <p>{findyear(year.year).spring.length}</p>
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-base font-bold text-blue-600">
                <p>{findyear(year.year).summer.length}</p>
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-base font-bold text-blue-600">
                <p>{findyear(year.year).fall.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                <p>{findyear(year.year).day.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                <p>{findyear(year.year).evening.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                <p>{findyear(year.year).weekend.length}</p>
              </td>
            </tr>
          ))}
          {/* </tr> */}
        </tbody>
      </table>
    );
  };
  const semesterTypeTable = (data = []) => {
    const finddata = (parms) => {
      const data = totalReg.filter((el) => el.semesterName === parms);
      return data;
    };
    const filterData = (data) => {
      const day = data.filter((el) => el.programType === "Day");
      const evening = data.filter((el) => el.programType === "Evening");
      const weekend = data.filter((el) => el.programType === "Weekend");
      return { day, evening, weekend };
    };
    return (
      <table class="lg:w-1/4 m-auto">
        <TableHead data={[
          {field: "", header: "Semester"},
          {field: "", header: "Total"},
          {field: "", header: "Day"},
          {field: "", header: "Evening"},
          {field: "", header: "Weekend"},
          ]}/>
        <tbody>
          {/* <tr class=" border-b"> */}
          {semesters.map((sem) => (
            <tr class=" border-b">
              <td class="px-2 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                <p>{sem.name}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-base font-bold text-green-600">
                <p>{finddata(sem.name).length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                <p>{filterData(finddata(sem.name)).day.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                <p>{filterData(finddata(sem.name)).evening.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                <p>{filterData(finddata(sem.name)).weekend.length}</p>
              </td>
            </tr>
          ))}
          {/* </tr> */}
        </tbody>
      </table>
    );
  };
  const yearTotal = () => {
    const finddata = (parms) => {
      const data = studentsinfo.filter((el) => el.semester === parms);
      return data;
    };
    const findyear = (parms) => {
      let data;
      if (parms) {
        data = semesters.filter((el) => el.year === parms);
      }
      let fall = finddata(data[0]?.name);
      let summer = finddata(data[1]?.name);
      let spring = finddata(data[2]?.name);
      const arr = [].concat(fall, summer, spring);

      return { arr, data, spring, summer, fall };
    };
    return (
      <div>
        <table class="lg:w-1/4 m-auto">
        <TableHead data={[
          {field: "", header: "Year"},
          {field: "", header: "Total"},
          {field: "", header: "Spring"},
          {field: "", header: "Summer"},
          {field: "", header: "Fall"},
          ]}/>
          <tbody>
            {/* <tr class=" border-b"> */}
            {years.map((year) => (
              <tr class=" border-b">
                <td class="px-2 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                  <p>{year.year}</p>
                </td>
                <td class=" px-6 py-4 whitespace-nowrap text-base font-bold text-green-600">
                  <p>{findyear(year.year)?.arr.length}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                  <p>{findyear(year.year)?.spring.length}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                  <p>{findyear(year.year)?.summer.length}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                  <p>{findyear(year.year)?.fall.length}</p>
                </td>
              </tr>
            ))}
            {/* </tr> */}
          </tbody>
        </table>
      </div>
    );
  };
  const totalSem = () => {
    const finddata = (parms) => {
      const data = studentsinfo.filter((el) => el.semester === parms);
      return data;
    };
    const findyear = (parms) => {
      let data;
      if (parms) {
        data = semesters.filter((el) => el.year === parms);
      }
      let totaldata1 = finddata(data[0]?.name);
      let totaldata2 = finddata(data[1]?.name);
      let totaldata3 = finddata(data[2]?.name);
      const arr = [].concat(totaldata1, totaldata2, totaldata3);
      return { arr, data };
    };

    return (
      <div>
        <table class="min-w-full">
          <TableHead data={tableHead} condetionalHead={"Year"} />
          <tbody>
            {years.map((year) => (
              <tr>
                <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {year.year}
                </td>
                <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                  {findyear(year.year)?.arr.length}
                </td>
                {addmisonTableBody(findyear(year.year)?.arr)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // const programFilter = (array = []) => {};
  // const datacounter = (data) => {
  //   let classCount = 0;
  //   for (let i = 0; i < studentsinfo.length; i++) {
  //     if (studentsinfo[i].program === data) {
  //       classCount++;
  //     }
  //   }
  //   return classCount;
  // };

  return (
    <div className="mx-4 m-auto">
      <h1 className="text-center font-bold text-3xl my-4">
        Semester And Year Wise Student Summary
      </h1>

      <div className="mt-4 mb-4 lg:w-full m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        <Button details={btn.mainReport} />
        {filterselect.mainReport === "admission" && (
          <Button details={btn.admsubReport} />
        )}
        {filterselect.mainReport === "regaster" && (
          <Button details={btn.regmainSubReport} />
        )}
        {filterselect.mainReport === "regaster" &&
          filterselect.regSubReport === "fullDetail" && (
            <Button details={btn.regSubReport} />
          )}
      </div>

      {filterselect.mainReport === "admission" &&
        filterselect.addSubReport === "yearwsem" &&
        yearTotal()}
      {filterselect.mainReport === "admission" &&
        filterselect.addSubReport === "yearwprm" &&
        totalSem()}
      {filterselect.mainReport === "regaster" &&
        filterselect.regSubReport === "yearwtable" &&
        programTypeTableWyear()}
      {filterselect.mainReport === "regaster" &&
        filterselect.regSubReport === "semwtable" &&
        semesterTypeTable()}
      {filterselect.mainReport === "droped" && droppedStudent()}
      {(filterselect.mainReport === "regaster" &&
        filterselect.regSubReport === "fullDetail") ||
      (filterselect.mainReport === "admission" &&
        filterselect.addSubReport === "semwprm") ? (
        <table class=" min-w-full">
          <TableHead data={tableHead} condetionalHead={"Semester"} />
          <tbody>
            {semesters.map((semester) => (
              <tr class="">
                <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {semester.name}
                </td>
                <td class="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {filterselect.mainReport === "admission"
                    ? filterSem(studentsinfo, semester.name).datas.length
                    : filterSem(totalReg, semester.name).datas.length}
                </td>
                {filterselect.mainReport === "admission"
                  ? addmisonTableBody(studentsinfo, semester.name)
                  : addmisonTableBody(totalReg, semester.name)}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TotalStudentReport;
