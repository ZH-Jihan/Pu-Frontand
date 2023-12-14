import moment from "moment";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useFatchData from "../../Hooks/useFatchData";

const EntryAbsentReport = () => {
  const {data:routindetail} = useFatchData('https://pu-server-1.onrender.com/routin');
  const {data:classroom} = useFatchData('https://pu-server-1.onrender.com/classroom');
  const {data:facultys,loading} = useFatchData('https://pu-server-1.onrender.com/faculty');
  const [filterselect, setFilterselect] = useState({
    date: "",
    department: "",
    timeslot: "",
    teacher: "",
    room: "",
    regon:"",
  });
  const date = moment(filterselect.date, "YYYY/MM/DD").format("DD/MM/YYYY");
  const day = moment(date, "DD/MM/YYYY").format("dddd");
  const onChange = (e) => {
    const { name, value } = e.target;
    setFilterselect((prev) => ({ ...prev, [name]: value }));
  };

  const filerDay = () => {
    if (day === "Sunday") {
      return (
        <>
          <option>09:00AM - 10:15AM</option>
          <option>10:25AM - 11:40AM</option>
          <option>11:50AM - 01:05PM</option>
          <option>01:15PM - 02:30PM</option>
          <option>02:40PM - 03:55PM</option>
          <option>04:05PM - 05:20PM</option>
          <option>05:30PM - 06:45PM</option>
          <option>06:30PM - 09:10PM</option>
        </>
      );
    }
    if (day === "Monday") {
      return (
        <>
          <option>08:30AM - 10:30AM</option>
          <option>09:00AM - 10:15AM</option>
          <option>10:25AM - 11:40AM</option>
          <option>11:50AM - 01:05PM</option>
          <option>01:15PM - 02:30PM</option>
          <option>02:40PM - 03:55PM</option>
          <option>04:05PM - 05:20PM</option>
          <option>05:30PM - 06:45PM</option>
          <option>06:30PM - 09:10PM</option>
          <option>06:30PM - 07:45PM</option>
          <option>07:55PM - 09:10PM</option>
        </>
      );
    }
    if (day === "Tuesday") {
      return (
        <>
          <option>09:00AM - 10:15AM</option>
          <option>10:25AM - 11:40AM</option>
          <option>11:50AM - 01:05PM</option>
          <option>01:15PM - 02:30PM</option>
          <option>02:40PM - 03:55PM</option>
          <option>04:05PM - 05:20PM</option>
          <option>05:30PM - 06:45PM</option>
          <option>06:30PM - 07:45PM</option>
          <option>07:55PM - 09:10PM</option>
        </>
      );
    }
    if (day === "Wednesday") {
      return (
        <>
          <option>09:00AM - 10:15AM</option>
          <option>10:25AM - 11:40AM</option>
          <option>11:50AM - 01:05PM</option>
          <option>01:15PM - 02:30PM</option>
          <option>02:40PM - 03:55PM</option>
          <option>04:05PM - 05:20PM</option>
          <option>05:30PM - 06:45PM</option>
          <option>06:30PM - 07:45PM</option>
          <option>07:55PM - 09:10PM</option>
        </>
      );
    }
    if (day === "Thursday") {
      return (
        <>
          <option>09:00AM - 11:30AM</option>
          <option>10:25AM - 11:40AM</option>
          <option>11:50AM - 01:05PM</option>
          <option>11:50AM - 02:30PM</option>
          <option>01:15PM - 02:30PM</option>
          <option>02:40PM - 03:55PM</option>
          <option>04:05PM - 05:20PM</option>
          <option>05:30PM - 08:20PM</option>
          <option>06:30PM - 07:45PM</option>
          <option>07:55PM - 09:10PM</option>
        </>
      );
    }
    if (day === "Friday") {
      return (
        <>
          <option>08:30AM - 10:30AM</option>
          <option>10:30AM - 12:30AM</option>
          <option>02:00PM - 04:00PM</option>
          <option>04:00PM - 06:00PM</option>
          <option>06:00PM - 08:00PM</option>
          <option>08:00PM - 10:00PM</option>
        </>
      );
    }
    if (day === "Saturday") {
      return (
        <>
          <option>09:00AM - 11:00AM</option>
          <option>10:25AM - 11:40AM</option>
          <option>11:30AM - 01:30PM</option>
          <option>11:50AM - 01:05PM</option>
          <option>01:15PM - 02:30PM</option>
          <option>02:30PM - 04:30PM</option>
          <option>02:40PM - 03:55PM</option>
          <option>06:00PM - 08:00PM</option>
          <option>06:30PM - 07:45PM</option>
          <option>07:55PM - 09:10PM</option>
        </>
      );
    }
  };
  const filterTwise = (arry = []) => {
    let data = arry;
    if (filterselect.timeslot) {
      data = data.filter((el) => el.tslot === filterselect.timeslot);
    }
    return data;
  };
  const filterDepartment = (data) => {
    if (data === "DEPARTMENT OF CIVIL ENGINEERING") {
      return <p>Civil</p>;
    }
    if (data === "DEPARTMENT OF ENGLISH") {
      return <p>English</p>;
    }
    if (data === "DEPARTMENT OF ELECTRICAL & COMPUTER ENGINEERING") {
      return <p>ECE</p>;
    }
    if (data === "DEPARTMENT OF BUSINESS") {
      return <p>Business</p>;
    }
  };
  const filterDay = (day) => {
    if (day === "Sunday") {
      return "0";
    } else if (day === "Monday") {
      return "1";
    } else if (day === "Tuesday") {
      return "2";
    } else if (day === "Wednesday") {
      return "3";
    } else if (day === "Thursday") {
      return "4";
    } else if (day === "Friday") {
      return "5";
    } else if (day === "Saturday") {
      return "6";
    } else {
      return "No Date";
    }
  };
  const day1 = filterDay(day);
  //.... Date And Day Wise Total Data Filter ....//
  const filterday = (arry = []) => {
    let data = arry;
    // if (filterselect.semester) {
    //   data = routindetail.filter((el) => el.semester === filterselect.semester);
    // }
    if (day1) {
      data = data.filter((el) => el.day === day1);
    }
    return data;
  };
  
  //.... Selected Option Wise Total Data FIlter ....//
  const filterRutin = (rutin = []) => {
    let data = rutin;
    if (filterselect.department) {
      data = data.filter((el) => el.dipartment === filterselect.department);
    }

    if (filterselect.timeslot) {
      data = data.filter((el) => el.tslot === filterselect.timeslot);
    }
    if (filterselect.teacher) {
      data = data.filter((el) => el.teacher === filterselect.teacher);
    }
    if (filterselect.room) {
      data = data.filter((el) => el.croom === filterselect.room);
    }
    return data;
  };

  const [present,setPresent]=useState()
  const changeRegon =(e)=>{
    const value= e.target.value;
    setPresent(value);
    console.log(value);
  }
  
  // const ftype =(name)=>{
  //   let type;
  //   if (name) {
  //     type = facultys.filter((el)=>`( ${el.initialname} )_${el.name}` === name)
  //   }
  //   return type.map((faculty) =>(faculty.jobtype))
    
  // }
  const presentReport = (name,day,date,present,tslot,room) => {
    
    const data ={
        name : name,
        day:day,
        date:date,
        regon:present,
        slot:tslot,
        room:room,
    };
    fetch("https://pu-server-1.onrender.com/facultyabsent", {
          // method: "POST",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              
            }
              toast.success("Add faculty apsent");
            })
  };
  console.log(present);
  // const checkClass = (initialName) =>{
  //   if (condition) {

  //   }
  // }
  return (
    <div>
      <div className="m-4">
        <h1 className="text-center text-4xl mb-4">Teacher Present Or Not</h1>

        <div className="text-center text-xl mb-4">
          <p>Total Room : {classroom.length}</p>
          <h1 className="text-center text-green-700 text-2xl">
            Total Class : {filterRutin(filterday(routindetail)).length}
          </h1>
          {filterselect.timeslot && (
            <p className="text-red-500">
              {filterRutin(filterday(routindetail)).length >=
              classroom.length ? (
                <span className="text-green-700">Empty Class Room : 0</span>
              ) : (
                <span className="text-red-500">
                  Empty Class Room :{" "}
                  {classroom.length -
                    filterTwise(filterday(routindetail)).length}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
      <div className="mt-4 mb-4 lg:w-full m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        <div class="w-3/4 m-auto flex flex-col mb-3">
          <label class="font-semibold text-gray-600 py-2">Select Date</label>
          <input
            onChange={onChange}
            value={filterselect.date}
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="date"
            name="date"
          />
        </div>
        <div class="w-3/4  m-auto flex flex-col mb-2">
          <label class="font-semibold text-gray-600 py-2">Room</label>
          <select
            value={filterselect.room}
            onChange={onChange}
            placeholder="Designation"
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="room"
          >
            <option value={""}>--All Room--</option>
            {classroom.map((croom) => (
                <option value={croom.roomnum}>
                  {croom.roomnum} || {croom.roomname}
                </option>
              )
            )}
          </select>
        </div>
        <div class="w-3/4  m-auto flex flex-col mb-2">
          <label class="font-semibold text-gray-600 py-2">Time Slot</label>
          <select
            value={filterselect.timeslot}
            onChange={onChange}
            placeholder="Designation"
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="timeslot"
            id="integration_street_address"
          >
            <option value={""}>--All Slot--</option>
            {filerDay()}
          </select>
        </div>
        <div class="w-3/4  m-auto flex flex-col mb-2">
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
            <option value={"DEPARTMENT OF CIVIL ENGINEERING"}>Civil</option>
            <option value={"DEPARTMENT OF ENGLISH"}>English</option>
            <option value={"DEPARTMENT OF ELECTRICAL & COMPUTER ENGINEERING"}>
              ECE
            </option>
            <option value={"DEPARTMENT OF BUSINESS"}>Business</option>
          </select>
        </div>
        <div class="w-3/4  m-auto flex flex-col mb-2">
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
            {facultys.map((faculty) => (
              <option>
                ( {faculty.initialname} )_{faculty.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div></div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-amber-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Dipartment
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Room
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Course
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Section
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Teacher
                    </th>
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
                      Day
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Regon
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {filterRutin(filterday(routindetail)).length > 0 ? (
                  <tbody>
                    {filterRutin(filterday(routindetail)).map((routin) => (
                      <tr class=" border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <p>{filterDepartment(routin.dipartment)}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {routin.croom}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <p>{routin.course}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <p>{routin.section}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <p>{routin.teacher}</p>
                        </td>
                        
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <p>{routin.tslot}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <p>{day}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <select
                            name="regon"
                            onChange={changeRegon}
                          >
                            <option>Not Mention</option>
                            <option>Mention</option>
                          </select>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <button disabled={!present} className="border-2 bg-green-300 px-4 rounded-md border-slate-300" onClick={()=>presentReport(`${routin.teacher}`,day,date,present,`${routin.tslot}`)}>Absent</button>
                        </td>
                        {/* <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <p>{ftype(routin.teacher)}</p>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <div>No Data Available</div>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryAbsentReport;
