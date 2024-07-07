import React from "react";
import useFatchData from "../../../Hooks/useFatchData";
import TableHead from "../../../Utilits/Table/TableHead";
import "../../../Utilits/Table/tabel.css";

const RutineTable = ({
  data = null,
  data2 = null,
  filtername = null,
  classroom = null,
  columns = null,
  hover = true,
  date = null,
  other = null,
  atAGlance = null,
  striped = true,
  setDay = null,
  setFilterSel = null,
}) => {
  const { data: facultyDatas } = useFatchData("/faculty");

  //***** At A Glance Table Data Condition Wise *****//
  const offlineatAGlanceTblData = [
    { field: "", header: "Day" },
    { field: "", header: "Number Of Slot" },
    { field: "", header: "Total Class" },
    { field: "", header: "Civil" },
    { field: "", header: "CSE" },
    { field: "", header: "EEE" },
    { field: "", header: "Business" },
    { field: "", header: "English" },
    { field: "", header: "Capacity Utilized" },
  ];
  const onlineatAGlanceTblData = [
    { field: "", header: "Day" },
    { field: "", header: "Number Of Slot" },
    { field: "", header: "Total Class" },
    { field: "", header: "Civil" },
    { field: "", header: "CSE" },
    { field: "", header: "EEE" },
    { field: "", header: "Business" },
    { field: "", header: "English" },
  ];
  const facultyWiseClassTblHead = [
    { field: "", header: "Name" },
    { field: "", header: "Total Class In Week" },
    { field: "", header: "Department" },
    { field: "", header: "Job Type" },
  ];
  const weeklyAllAtAGlanceTblData = [
    { field: "", header: "Day" },
    { field: "", header: "Number Of Slot" },
    { field: "", header: "Total Class" },
    { field: "", header: "In Campus" },
    { field: "", header: "Online" },
    { field: "", header: "CE - Campus" },
    { field: "", header: "CE - Online" },
    { field: "", header: "CSE - Campus" },
    { field: "", header: "CSE - Online" },
    { field: "", header: "EEE - Campus" },
    { field: "", header: "EEE - Online" },
    { field: "", header: "Bus - Campus" },
    { field: "", header: "Bus - Online" },
    { field: "", header: "Eng - Campus" },
    { field: "", header: "Eng- Online" },
  ];

  //*** This funtion Convart Faculty initial Name to Full Name ***/
  const findFaculty = (name) => {
    let fullName;
    if (name) {
      fullName = facultyDatas.filter((el) => el.initialname === name);
    }
    return (fullName = fullName.map((data) => data.name));
  };

  const onClick = (day) => {
    setFilterSel((prev) => ({ ...prev, reportType: "main", day: day }));
  };

  //*****.. Faculty Wise Class Report ..*****//
  const facultyWiseClassCount = () => {
    console.log(filtername.scarcebyname);
    const activeFaculty = facultyDatas.filter((el) => el.status === "Active");
    let facultylist = activeFaculty;
    if (filtername.jobtype) {
      facultylist = activeFaculty.filter(el=>el.jobtype === filtername.jobtype)
      
    }
    if(filtername.scarcebyname){
      facultylist = activeFaculty.filter(el=>el.name.toLowerCase().includes(filtername.scarcebyname.toLowerCase()))
    }
    
    const facultyClass = (name) =>{
      const totalClass = data.filter(el=> el.FacultyInitial === name)
      return totalClass.length;
    }
    return (
      <>
        {facultylist.map((faculty) => (
          <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {faculty.name}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {facultyClass(faculty.initialname)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {faculty.dipartment}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {faculty.jobtype}
            </td>
          </tr>
        ))}
      </>
    );
  };

  //*****.. Main Report Table Body ..*****//
  const mainReport = () => {
    return (
      <>
        {data &&
          data.map((tdata) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.Room}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.CourseCode}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {findFaculty(tdata.FacultyInitial)[0]}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.TimeSlot}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.Day}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Dept. Of {tdata.Dept}
              </td>
              {other &&
                other.map((col) => (
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {col.field}
                  </td>
                ))}
            </tr>
          ))}
      </>
    );
  };

  //*****.. This Funtion Work from Time Slot Wise Class Table ..*****//
  const slotWiseClass = () => {
    const filters = (times) => {
      let datas;
      if (times) {
        datas = data.filter((el) => el.TimeSlot === times);
      }
      const incumpas = datas.filter(el=>el.Room !== "Online")
      const online = datas.filter(el=>el.Room === "Online")
      return {datas, online, incumpas};
    };
    return (
      <>
        {data2 &&
          data2?.map((tdata) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {data[0]?.Day}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.name}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {filters(tdata.name).incumpas.length}
              </td>
              <td  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classroom.length - filters(tdata.name).incumpas.length}
              </td>
              <td style={filters(tdata.name).online.length !== 0 ?({color:"red"}):({color:"green"})} class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {filters(tdata.name).online.length}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                {filters(tdata.name).datas.length}
              </td>
            </tr>
          ))}
      </>
    );
  };

  //*****.. This Funtion Show Class Room Wise Daily Class Count ..*****//
  const roomWiseClass = () => {
    // const customStyle = (value) => {
    //   if (value <= 0) {
    //     return { backgroundColor: "rgb(255 163 107 / 47%)" };
    //   }
    // };

    const filters = (times) => {
      let datas;
      if (times) {
        datas = data.filter((el) => el.Room === times);
        return datas;
      }
    };
    return (
      <>
        {classroom &&
          classroom.map((room) => (
            <tr
              // style={customStyle(filters(room.roomnum).length)}
              className={` ${hover && "hover"} ${striped && "striped"}`}
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {data[0]?.Day}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {room.roomnum}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {room.roominitial}
              </td>
              <td style={filters(room.roomnum).length !== 0 ?({color:"blue"}):({color:"red"})} class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                {filters(room.roomnum).length}
              </td>
            </tr>
          ))}
      </>
    );
  };

  //*****.. Weekly Class At a Glance Report ..*****//
  const weeklyOfflineAtAGlance = () => {
    const days = Array.from(new Set(data.map((item) => item.Day)));

    days.push("Total");
    const classFilterWDay = (day, online) => {
      // const rutindata = data.filter(el=>el.Day === day)

      // const dayWiseSlot = Array.from(new Set(rutindata.map(item=> item.TimeSlot)))

      let datas;
      let civil;
      let Eng;
      let ece;
      let cse;
      let eee;
      let bus;
      if (day) {
        if (day === "Total") {
          datas = data;
        } else {
          datas = data.filter((el) => el.Day === day);
        }
      }

      if (online) {
        if (online === "online") {
          if (day === "Total") {
            datas = datas.filter((el) => el.Room === "Online");
          } else {
            datas = datas.filter((el) => el.Room === "Online");
          }
        } else if (online === "offline") {
          if (day === "Total") {
            datas = datas.filter((el) => el.Room !== "Online");
          } else {
            datas = datas.filter((el) => el.Room !== "Online");
          }
        }
      }
      if (datas) {
        civil = datas.filter((el) => el.Dept === "CE");
        Eng = datas.filter((el) => el.Dept === "ENG");
        cse = datas.filter((el) => el.Dept === "CSE");
        eee = datas.filter((el) => el.Dept === "EEE");
        bus = datas.filter((el) => el.Dept === "BUS");
      }
      return { datas, civil, Eng, ece, bus, cse, eee };
    };
    const slot = (value, day) => {
      const rutindata = data.filter((el) => el.Day === day && el.Room !== "Online" );

      const dayWiseSlot = Array.from(
        new Set(rutindata.map((item) => item.TimeSlot))
      );
      if (day === "Total") {
        let sum = 56;
        // Iterate over each object and add its capacity to the sum
        // for (let i = 0; i < atAGlance.timeSlot.length; i++) {
        //   sum += Number(atAGlance.timeSlot[i].value.length);
        // }
        return sum;
      }
      return dayWiseSlot.length;
    };
    return (
      <>
        {days &&
          days.map((day) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="text-blue-600 underline underline-offset-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <button onClick={() => onClick(day)}>{day}</button>
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {slot(day.length, day)}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day, "offline").datas.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "offline").civil.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "offline").cse.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "offline").eee.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "offline").bus.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "offline").Eng.length}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {Math.round(
                  (classFilterWDay(day).datas.length /
                    (classroom.length * slot(day.length, day))) *
                    100
                )}{" "}
                %
              </td>
            </tr>
          ))}
      </>
    );
  };
  const onlineAtAGlance = () => {
    const days = Array.from(new Set(data.map((item) => item.Day)));

    days.push("Total");
    const classFilterWDay = (day, online) => {
      // const rutindata = data.filter(el=>el.Day === day)

      // const dayWiseSlot = Array.from(new Set(rutindata.map(item=> item.TimeSlot)))

      let datas;
      let civil;
      let Eng;
      let ece;
      let cse;
      let eee;
      let bus;
      if (day) {
        if (day === "Total") {
          datas = data;
        } else {
          datas = data.filter((el) => el.Day === day);
        }
      }

      if (online) {
        if (online === "online") {
          if (day === "Total") {
            datas = datas.filter((el) => el.Room === "Online");
          } else {
            datas = datas.filter((el) => el.Room === "Online");
          }
        } else if (online === "offline") {
          if (day === "Total") {
            datas = datas.filter((el) => el.Room !== "Online");
          } else {
            datas = datas.filter((el) => el.Room !== "Online");
          }
        }
      }
      if (datas) {
        civil = datas.filter((el) => el.Dept === "CE");
        Eng = datas.filter((el) => el.Dept === "ENG");
        cse = datas.filter((el) => el.Dept === "CSE");
        eee = datas.filter((el) => el.Dept === "EEE");
        bus = datas.filter((el) => el.Dept === "BUS");
      }
      return { datas, civil, Eng, ece, bus, cse, eee };
    };
    const slot = (value, day) => {
      const rutindata = data.filter((el) => el.Day === day && el.Room === "Online");

      const dayWiseSlot = Array.from(
        new Set(rutindata.map((item) => item.TimeSlot))
      );
      if (day === "Total") {
        let sum = 17;
        // Iterate over each object and add its capacity to the sum
        // for (let i = 0; i < atAGlance.timeSlot.length; i++) {
        //   sum += Number(atAGlance.timeSlot[i].value.length);
        // }
        return sum;
      }
      return dayWiseSlot.length;
    };
    return (
      <>
        {days &&
          days.map((day) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="text-blue-600 underline underline-offset-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <button onClick={() => onClick(day)}>{day}</button>
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {slot(day.length, day)}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day, "online").datas.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "online").civil.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "online").cse.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "online").eee.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "online").bus.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium ">
                {classFilterWDay(day, "online").Eng.length}
              </td>
            </tr>
          ))}
      </>
    );
  };

  const weeklyAllAtAGlance = () => {
    const days = Array.from(new Set(data.map((item) => item.Day)));

    days.push("Total");
    const classFilterWDay = (day, online) => {
      // const rutindata = data.filter(el=>el.Day === day)

      // const dayWiseSlot = Array.from(new Set(rutindata.map(item=> item.TimeSlot)))

      let datas;
      let civil;
      let Eng;
      let ece;
      let cse;
      let eee;
      let bus;
      if (day) {
        if (day === "Total") {
          datas = data;
        } else {
          datas = data.filter((el) => el.Day === day);
        }
      }

      if (online) {
        if (online === "online") {
          if (day === "Total") {
            datas = datas.filter((el) => el.Room === "Online");
          } else {
            datas = datas.filter((el) => el.Room === "Online");
          }
        } else if (online === "offline") {
          if (day === "Total") {
            datas = datas.filter((el) => el.Room !== "Online");
          } else {
            datas = datas.filter((el) => el.Room !== "Online");
          }
        }
      }
      if (datas) {
        civil = datas.filter((el) => el.Dept === "CE");
        Eng = datas.filter((el) => el.Dept === "ENG");
        cse = datas.filter((el) => el.Dept === "CSE");
        eee = datas.filter((el) => el.Dept === "EEE");
        bus = datas.filter((el) => el.Dept === "BUS");
      }
      return { datas, civil, Eng, ece, bus, cse, eee };
    };
    const slot = (value, day) => {
      const rutindata = data.filter((el) => el.Day === day);

      const dayWiseSlot = Array.from(
        new Set(rutindata.map((item) => item.TimeSlot))
      );
      if (day === "Total") {
        const sum = 73;

        return sum;
      }
      return dayWiseSlot.length;
    };
    return (
      <>
        {days &&
          days.map((day) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="text-blue-600 underline underline-offset-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <button onClick={() => onClick(day)}>{day}</button>
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {slot(day.length, day)}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day).datas.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day, "offline").datas.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day, "online").datas.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day, "offline").civil.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day, "online").civil.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day, "offline").cse.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day, "online").cse.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day, "offline").eee.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day, "online").eee.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day, "offline").bus.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day, "online").bus.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day, "offline").Eng.length}
              </td>
              <td class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day, "online").Eng.length}
              </td>
            </tr>
          ))}
      </>
    );
  };

  //****.. Component Main Funtion Return ..*****//
  return (
    <div class="flex flex-col w-full">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          {filtername.reportType === "roomWise" && date !== "" && (
            <div>
              <h1 className="text-center text-lg mb-2">
                {" "}
                Total Slot : {data2.length}
              </h1>
            </div>
          )}
          {filtername.reportType === "slotWise" && date !== "" && (
            <div>
              <h1 className="text-center text-lg mb-2">
                {" "}
                Total Slot : {data2.length}
              </h1>
            </div>
          )}
          <div class="overflow-hidden">
            <table class="w-full m-auto">
              {filtername.reportType === "main" && date !== "" && (
                <>
                  <TableHead data={columns}></TableHead>
                </>
              )}
              {filtername.reportType === "slotWise" && date !== "" && (
                <TableHead
                  data={[
                    { field: "", header: "Selected Day" },
                    { field: "", header: "Time Slot" },
                    { field: "", header: "In Campus" },
                    { field: "", header: "Empty Room" },
                    { field: "", header: "Online Class" },
                    { field: "", header: "Total Class" },
                  ]}
                ></TableHead>
              )}
              {filtername.reportType === "roomWise" && date !== "" && (
                <TableHead
                  data={[
                    { field: "", header: "Selected Day" },
                    { field: "", header: "Room Number" },
                    { field: "", header: "Room Name" },
                    { field: "", header: "Total Class" },
                  ]}
                ></TableHead>
              )}
              {filtername.reportType === "offline" && (
                <TableHead data={offlineatAGlanceTblData}></TableHead>
              )}
              {filtername.reportType === "online" && (
                <TableHead data={onlineatAGlanceTblData}></TableHead>
              )}
              {filtername.reportType === "all" && (
                <TableHead data={weeklyAllAtAGlanceTblData}></TableHead>
              )}
              {filtername.reportType === "facultywise" && (
                <TableHead data={facultyWiseClassTblHead}></TableHead>
              )}
              {/* <TableBody columns={columns} data={data}/> */}
              <tbody>
                {filtername.reportType === "main" && date !== "" && mainReport()}
                {filtername.reportType === "slotWise" && date !== "" && slotWiseClass()}
                {filtername.reportType === "facultywise" &&
                  facultyWiseClassCount()}
                {filtername.reportType === "roomWise" && date !== "" && roomWiseClass()}
                {filtername.reportType === "offline" && weeklyOfflineAtAGlance()}
                {filtername.reportType === "online" && onlineAtAGlance()}
                {filtername.reportType === "all" && weeklyAllAtAGlance()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RutineTable;
