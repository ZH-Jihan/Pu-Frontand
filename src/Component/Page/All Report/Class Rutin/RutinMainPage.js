import React, { useState } from "react";
import useLocalDataFatch from "../../../Hooks/localDataFatch";
import useFatchData from "../../../Hooks/useFatchData";
import useRoutineBtn from "../../../Utilits/All Buttons/RoutineBtn";
import Button from "../../../Utilits/Button";
import Loading from "../../Sheared Page/Loading";
import RutineTable from "./RutineTable";
const RutinMainPage = () => {
  // const {rutinDatas} = useFatchData('https://pu-server-1.onrender.com/api/v1/routin')
  const { data: rutinDatas } = useLocalDataFatch("PU-App.department.json");
  const { data: classRoom } = useFatchData("/classroom");
    const classRooms = classRoom.data
  console.log(classRoom);
  //*****.. Set Or Find Selected Item Name And Valu ..*****//
  const [filterselect, setFilterselect] = useState({
    day: "",
    department: "",
    timeslot: "",
    teacher: "",
    room: "",
    semester: "",
    reportType: ""
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    
    setFilterselect((prev) => ({ ...prev, [name]: value }))
  };
  
  const data = useRoutineBtn({ onChange, filterselect});

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
  const semFilterData = filterDataSemWise().data;
  const semDaySlot = filterDataSemWise().timeSlot;
  
  //*****.. Set Or Find Date And Day Name ..*****//
  // const date = moment(filterselect.date, "YYYY/MM/DD").format("DD/MM/YYYY");
  // const day = moment(date, "DD/MM/YYYY").format("dddd");

  const dayWiseSlotFind = (data = []) => {
    let datas = data;
    if (filterselect.day) {
      datas = datas.filter((el) => el.name === filterselect.day);
      return datas;
    } else {
      return data;
    }
  };
  const daySlot = dayWiseSlotFind(semDaySlot);

  //*****.. Load All Filter btn ..*****//
  

  //*****.. Data Filtar Funtion ..*****/
const filter = (data = []) => {
  let datas = data;
  if (filterselect.department) {
    datas = datas.filter((el) => el.drpartment === filterselect.department);
  }
  if (filterselect.room) {
    datas = datas.filter((el) => el.room === filterselect.room);
  }
  if (filterselect.day) {
    datas = datas.filter((el) => el.day === filterselect.day);
  }
  if (filterselect.timeslot) {
    datas = datas.filter((el) => el.time === filterselect.timeslot);
  }
  return datas;
};

  //*****.. Main Table Hade And Json Data Field Name ..*****//
  const tableHead = [
    { field: "room", header: "" },
    { field: "course", header: "" },
    { field: "faculty", header: "" },
    { field: "time", header: "" },
    { field: "day", header: "" },
    { field: "drpartment", header: "department" },
  ];

  return (
    <div>
      <div>
      <h1 className="text-center text-3xl mb-4">Class Routine</h1>
      <div className=" m-auto text-center text-xl mb-4 ">
          <p>Total Room : {classRooms?.length}</p>
          <h1 className="text-center text-green-700 text-2xl">
             {filterselect.day && filterselect.semester ? "Today's Total Class":"Total Class For The Week"}: {filter(semFilterData).length}
          </h1>
          {filterselect.timeslot && !filterselect.room &&(
            <p className="text-red-500">
              {filter(semFilterData)?.length >=
              classRooms.length ? (
                <span className="text-green-700">Empty Class Room : 0</span>
              ) : (
                <span className="text-red-500">
                  Empty Class Room :{" "}
                  {classRooms?.length -
                    filter(semFilterData)?.length}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4 mb-4 lg:w-full m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {<Button details={data.semesterBtn} />}
        { filterselect.semester && <Button details={data.reportTypeBtn} />}
        { filterselect.semester && filterselect.reportType !== "" &&<Button details={data.dayBtn} />}
        {filterselect.semester && filterselect.reportType !== "" && filterselect.day !=="" && (
          <>
            <Button details={data.departmentBtn} />
            {filterselect.reportType === "main" &&(<><Button details={data.classRoomBtn} other={classRooms} />
            <Button details={data.timeSlotBtn} other={daySlot[0]?.value} /></>)}
            {/* <button class="w-3/4  m-auto flex flex-col mb-2">Retun To Weekly</button> */}
          </>
        )}
      </div>
      { 
       filterselect.semester && classRooms.length ?  (
          <RutineTable
          data={filter(semFilterData)}
          data2={daySlot}
          atAGlance={filterDataSemWise()}
          classroom = {classRooms}
          columns={tableHead}
          name={filterselect.reportType}
          date={filterselect.day}
          setFilterSel = {setFilterselect}
        />
        
      ) : (<Loading/>)}
    </div>
  );
};

export default RutinMainPage;
