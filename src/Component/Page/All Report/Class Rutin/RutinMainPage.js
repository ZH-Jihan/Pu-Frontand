import React, { useState } from "react";
import rutinData from "../../../../data/classRoutin.json";
import useFatchData from "../../../Hooks/useFatchData";
import useRoutineBtn from "../../../Utilits/All Buttons/RoutineBtn";
import Button from "../../../Utilits/Button";
import Loading from "../../Sheared Page/Loading";
import RutineTable from "./RutineTable";
const RutinMainPage = () => {
  // const {rutinDatas} = useFatchData('https://pu-server-side.onrender.com/api/v1/routin')
  // const { data: rutinDatas } = useLocalDataFatch("PU-App.department.json");
  const rutinDatas = rutinData;
  const { data: classRoom } = useFatchData("/classroom");
  const { data: facultyDatas } = useFatchData("/faculty");
  const classRooms = classRoom.data;
  // const facultyDepartment =

  //*****.. Set Or Find Selected Item Name And Valu ..*****//
  const [filterselect, setFilterselect] = useState({
    day: "",
    department: "",
    timeslot: "",
    teacher: "",
    jobtype: "",
    scarcebyname: "",
    room: "",
    semester: "Summer-24",
    reportType: "all",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setFilterselect((prev) => ({ ...prev, [name]: value }));
  };

  //*****.. Load All Filter btn ..*****//
  const data = useRoutineBtn({ onChange, filterselect });

  //*****.. Filter Data By Or Try Semestr Wise ..*****//
  const filterDataSemWise = () => {
    let data = [];
    if (filterselect.semester) {
      data = rutinDatas.filter((el) => el.name === filterselect.semester);
      return data[0];
    } else {
      return data;
    }
  };
  // Order of the days of the week 
  const dayOrder = {
    Saturday: 0,
    Sunday: 1,
    Monday: 2,
    Tuesday: 3,
    Wednesday: 4,
    Thursday: 5,
    Friday: 6,
  };
  // Custom comparator function to sort by day names
  function sortByDay(a, b) {
    return dayOrder[a.Day] - dayOrder[b.Day];
  }
  // Sort the array
  const semFilterData = filterDataSemWise().data?.sort(sortByDay);

  //*****.. Set Or Find Date And Day Name ..*****//
  // const date = moment(filterselect.date, "YYYY/MM/DD").format("DD/MM/YYYY");
  // const day = moment(date, "DD/MM/YYYY").format("dddd");

  const dayWiseSlotFind = (data = []) => {
    let datas = data;
    if (filterselect.day) {
      datas = datas.filter((el) => el.Day === filterselect.day);
      //  const slot = Array.from(new Set(datas.map((item) => item.TimeSlot)))

      const seenNames = new Set();
      const newArray = [];

      datas.forEach((item) => {
        if (!seenNames.has(item.TimeSlot)) {
          seenNames.add(item.TimeSlot);
          newArray.push({ name: item.TimeSlot });
        }
      });

      return newArray;
    } else {
      return data;
    }
  };
  const daySlot = dayWiseSlotFind(semFilterData);

  if (
    filterselect.reportType === "all" ||
    filterselect.reportType === "online" ||
    filterselect.reportType === "offline" 
  ) {
    filterselect.day = "";
    filterselect.department = "";
    filterselect.timeslot = "";
    filterselect.room = "";
  }
  //*****.. Data Filtar Funtion ..*****/
  const filter = (data = []) => {
    let datas = data;
    if (filterselect.department) {
      datas = datas.filter((el) => el.Dept === filterselect.department);
    }
    if (filterselect.room) {
      if (filterselect.room === "Offline") {
        datas = datas.filter((el) => el.Room !== "Online");
      }
      else if (filterselect.room === "Online") {
        datas = datas.filter((el) => el.Room === "Online");
      }
      else{
        datas = datas.filter((el) => el.Room === filterselect.room);
      }
    }
    if (filterselect.day) {
      datas = datas.filter((el) => el.Day === filterselect.day);
    }
    if (filterselect.timeslot) {
      datas = datas.filter((el) => el.TimeSlot === filterselect.timeslot);
    }
    return datas;
  };
console.log(filterselect.room);

  //*****.. Main Table Hade And Json Data Field Name ..*****//
  const tableHead = [
    { field: "room", header: "" },
    { field: "course", header: "" },
    { field: "faculty", header: "" },
    { field: "time", header: "" },
    { field: "day", header: "" },
    { field: "drpartment", header: "department" },
  ];
if (!rutinDatas) {
  <Loading></Loading>
} else {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl mb-4">Class Routine</h1>
        <div className=" m-auto text-center text-xl mb-4 ">
          <p>Total Room : {classRooms?.length}</p>
          <h1 className="text-center text-green-700 text-2xl">
            {filterselect.day && filterselect.semester
              ? "Today's Total Class"
              : "Total Class For The Week"}
            : {filter(semFilterData)?.length}
          </h1>
          {filterselect.timeslot && !filterselect.room && (
            <p className="text-red-500">
              {filter(semFilterData)?.length >= classRooms?.length ? (
                <span className="text-green-700">Empty Class Room : 0</span>
              ) : (
                <span className="text-red-500">
                  Empty Class Room :{" "}
                  {classRooms?.length - filter(semFilterData)?.length}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4 mb-4 lg:w-full m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {<Button details={data.semesterBtn} />}
        {filterselect.semester && <Button details={data.reportTypeBtn} />}
        {filterselect.reportType === "facultywise" && (
          <>
            <Button details={data.facultyType} />
            <Button details={data.departmentBtn} />
            <div class="w-3/4  m-auto flex flex-col mb-2">
              <label class="font-semibold text-gray-600 py-2">
                Search By Name
              </label>

              <input
                value={filterselect.scarcebyname}
                onChange={onChange}
                autocomplete="None"
                placeholder="Input Name"
                class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                name="scarcebyname"
              />
            </div>
          </>
        )}
        {filterselect.semester &&
          filterselect.reportType !== "offline" &&
          filterselect.reportType !== "online" &&
          filterselect.reportType !== "facultywise" &&
          filterselect.reportType !== "all" && <Button details={data.dayBtn} />}
        {filterselect.semester &&
          filterselect.reportType !== "offline" &&
          filterselect.reportType !== "online" &&
          filterselect.reportType !== "facultywise" &&
          filterselect.reportType !== "all" &&
          filterselect.day !== "" && (
            <>
              <Button details={data.departmentBtn} />
              {filterselect.reportType === "main" && (
                <>
                  <Button details={data.classRoomBtn} other={classRooms} />
                  <Button details={data.timeSlotBtn} other={daySlot} />
                  <div class="w-3/4  m-auto flex flex-col mb-2">
              <label class="font-semibold text-gray-600 py-2">
                Search By Name
              </label>

              <input
                value={filterselect.scarcebyname}
                onChange={onChange}
                autocomplete="None"
                placeholder="Input Name"
                class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                name="scarcebyname"
              />
            </div>
                </>
              )}
              {/* <button class="w-3/4  m-auto flex flex-col mb-2">Retun To Weekly</button> */}
            </>
          )}
      </div>
      {classRooms?.length ? (
        <RutineTable
          data={filter(semFilterData)}
          data2={daySlot}
          atAGlance={filterDataSemWise()}
          classroom={classRooms}
          columns={tableHead}
          filtername={filterselect}
          date={filterselect.day}
          setFilterSel={setFilterselect}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}
  
};

export default RutinMainPage;
