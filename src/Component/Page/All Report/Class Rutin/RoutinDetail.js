import moment from "moment";
import React, { useState } from "react";
import useFatchData from "../../../Hooks/useFatchData";

const RoutinDetail = () => {
  // const [routindetail, setRoutindetail] = useState([]);
  const { data:routindetail } = useFatchData("https://pu-server-1.onrender.com/routin");
  const { data:classroom } = useFatchData("https://pu-server-1.onrender.com/classroom");
  const { data:facultys } = useFatchData("https://pu-server-1.onrender.com/faculty");
  const [schake, setSchake] = useState(false);
  const [dchake, setDchake] = useState(false);

  const [filterselect, setFilterselect] = useState({
    date: "",
    department: "",
    timeslot: "",
    teacher: "",
    room: "",
    semester: "",
  });

  //.... Fatch Total Routin Data ....//
  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRoutindetail(data);
  //     });
  // }, []);

  //.... Wike Name And Value ....//
  const dayData = [
    { value: "6", name: "Saturday", tslot: "10" },
    { value: "0", name: "Sunday", tslot: "8" },
    { value: "1", name: "Monday", tslot: "11" },
    { value: "2", name: "Tuesday", tslot: "9" },
    { value: "3", name: "Wednesday", tslot: "9" },
    { value: "4", name: "Thursday", tslot: "10" },
    { value: "5", name: "Friday", tslot: "6" },
    { value: "", name: "Total", tslot: "63" },
  ];

  //.... Main Table Hade Array Of Object ....//
  const tableHade = [
    { name: "Department" },
    { name: "Room" },
    { name: "Program" },
    { name: "Course" },
    { name: "Section" },
    { name: "Teacher" },
    { name: "Time Slot" },
    { name: "Day" },
    { name: "Date" },
  ];
  const weekTblHade = [
    { name: "Day" },
    { name: "Total Class" },
    { name: "Civil" },
    { name: "Business" },
    { name: "English" },
    { name: "EEE/CSE" },
    { name: "Capacity Utilized" },
  ];

  //.... Set Or Find Selected Item Name And Valu ....//
  const onChange = (e) => {
    const { name, value } = e.target;
    setFilterselect((prev) => ({ ...prev, [name]: value }));
  };

  //.... Set Or Find Date And Day Name ....//
  const date = moment(filterselect.date, "YYYY/MM/DD").format("DD/MM/YYYY");
  const day = moment(date, "DD/MM/YYYY").format("dddd");

  //.... Assinged Day Name Wise Value ....//
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
    if (filterselect.semester) {
      data = routindetail.filter((el) => el.semester === filterselect.semester);
    }
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
  // console.log(filterRutin(routindetails));
  //.... Set Department Log Name To Short Name ....//
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

  //.... Time Slot Wise One Day At A Glance Report ....//
  const atAGlance = () => {
    const datas = filterday(filterRutin(routindetail));
    const days = filerDay()?.props?.children;
    const filters = (times) => {
      let data;
      if (times) {
        data = datas.filter((el) => el.tslot === times);
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
              Day
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
              Total Class
            </th>
          </tr>
        </thead>
        <tbody>
          {days?.map((da) => (
            <tr class=" border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {/* <p>{routin.sldate?.find((el)=>el===date)}</p> */}
                <p>{day}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {/* <p>{routin.sldate?.find((el)=>el===date)}</p> */}
                <p>{da?.props?.children}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {/* <p>{routin.sldate?.find((el)=>el===date)}</p> */}
                <p>{filters(da?.props?.children).length}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  //.... Weekly Day By Day Wise AtA Glance Report ....//
  const weeklyDayAtaGlance = () => {
    const filterDayWise = (value) => {
      let data;
      let civil;
      let eng;
      let bus;
      let eee;

      if (filterselect.semester) {
        data = routindetail.filter(
          (el) => el.semester === filterselect.semester
        );
      }
      if (value) {
        data = data.filter((el) => el.day === value);
      } else if (value === "") {
        data = routindetail.filter(
          (el) => el.semester === filterselect.semester
        );
      }

      if (data) {
        civil = data.filter(
          (el) => el.dipartment === "DEPARTMENT OF CIVIL ENGINEERING"
        );
      }
      if (data) {
        bus = data.filter((el) => el.dipartment === "DEPARTMENT OF BUSINESS");
      }
      if (data) {
        eng = data.filter((el) => el.dipartment === "DEPARTMENT OF ENGLISH");
      }
      if (data) {
        eee = data.filter(
          (el) =>
            el.dipartment === "DEPARTMENT OF ELECTRICAL & COMPUTER ENGINEERING"
        );
      }
      const calculatePersent = (slot, value, daydata) => {
        console.log(daydata);
        if (value === "0") {
          return Math.round((daydata / (classroom.length * slot)) * 100);
        }
        if (value === "1") {
          return Math.round((daydata / (classroom.length * slot)) * 100);
        }
        if (value === "2") {
          return Math.round((daydata / (classroom.length * slot)) * 100);
        }
        if (value === "3") {
          return Math.round((daydata / (classroom.length * slot)) * 100);
        }
        if (value === "4") {
          return Math.round((daydata / (classroom.length * slot)) * 100);
        }
        if (value === "5") {
          return Math.round((daydata / (classroom.length * slot)) * 100);
        }
        if (value === "6") {
          return Math.round((daydata / (classroom.length * slot)) * 100);
        }
        if (value === "") {
          return Math.round((daydata / (classroom.length * slot)) * 100);
        }
      };
      return { data, civil, eng, bus, eee, calculatePersent };
    };
    const tBody = () => {
      return (
        <>
          {dayData.map((day) => (
            <tr class=" border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <p>{day.name}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <p>{filterDayWise(day.value).data.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <p>{filterDayWise(day.value).civil.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <p>{filterDayWise(day.value).bus.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <p>{filterDayWise(day.value).eng.length}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <p>{filterDayWise(day.value).eee.length}</p>
              </td>
              <td class="px-6 text-bold py-4 whitespace-nowrap font-medium text-gray-900">
                <p>
                  {filterDayWise(day.value).calculatePersent(
                    day.tslot,
                    day.value,
                    filterDayWise(day.value).data.length
                  )}{" "}
                  %
                </p>
              </td>
            </tr>
          ))}
        </>
      );
    };
    return (
      <div>
        <table class="w-2/4 m-auto">
          <thead class="bg-amber-200 border-b">
            <tr>
              {weekTblHade.map((th) => (
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  {th.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterselect.semester === "Summer-23" ? tBody() : tBody()}
          </tbody>
        </table>
      </div>
    );
  };

  //.... Main Details Table Body Funtion ....//
  const tbody = () => {
    return (
      <>
        {filterRutin(filterday(routindetail)).map((routin) => (
          <tr class=" border-b">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              <p>{filterDepartment(routin.dipartment)}</p>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {routin.croom}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              <p>{routin.program}</p>
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
              <p>{date}</p>
            </td>
          </tr>
        ))}
      </>
    );
  };
  tbody();

  //.... Day Wise Filter Or Set Time Slot ....//
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
          <option>06:30PM - 07:45PM</option>
          <option>07:55PM - 09:10PM</option>
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
          <option>10:30AM - 12:30PM</option>
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

  return (
    <div>
      <div className="m-4">
        <h1 className="text-center text-4xl mb-4">Class Routine</h1>

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
        <div class="w-3/4  m-auto flex flex-col mb-2">
          <label class="font-bold text-red-600 py-2">Semester</label>
          <select
            value={filterselect.semester}
            onChange={onChange}
            placeholder="Designation"
            class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
            type="text"
            name="semester"
          >
            <option value={""}>--Select Semester--</option>
            <option>Summer-23</option>
            <option>Spring-23</option>
          </select>
        </div>
        {filterselect.semester === "" ? (
          ""
        ) : (
          <>
            <div class="w-3/4  m-auto flex flex-col mb-2">
              <label className="font-semibold text-gray-600 ">
                Weekly View
              </label>
              {dchake === false ? (
                <button
                  style={{ "background-color": "#b5e8eb" }}
                  onClick={() => setDchake(true)}
                  class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                >
                  Weekly View
                </button>
              ) : (
                <button
                  style={{ "background-color": "#b5e8eb" }}
                  onClick={() => setDchake(false)}
                  class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                >
                  View Details
                </button>
              )}
            </div>
            <div class="w-3/4 m-auto flex flex-col mb-3">
              <label class="font-semibold text-gray-600 py-2">
                Select Date
              </label>
              <input
                onChange={onChange}
                value={filterselect.date}
                class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                type="date"
                name="date"
              />
            </div>
          </>
        )}

        {filterselect.date === "" ? (
          ""
        ) : (
          <div class="w-3/4  m-auto flex flex-col mb-2">
            <label className="font-semibold text-gray-600 ">
              Daily View(
              <span
                style={{ "font-size": "smaller" }}
                className="font-small text-8 text-red-400"
              >
                Req Select Date
              </span>
              )
            </label>
            {schake === false ? (
              <button
                style={{ "background-color": "#b5e8eb" }}
                onClick={() => setSchake(true)}
                class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              >
                Slot Wise At A Glance
              </button>
            ) : (
              <button
                style={{ "background-color": "#b5e8eb" }}
                onClick={() => setSchake(false)}
                class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              >
                View Details
              </button>
            )}
          </div>
        )}

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
            {classroom.map((room) => (
              <option value={room.roomnum}>
                {room.roomnum} || {room.roomname}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              {schake === true ? (
                atAGlance()
              ) : dchake === true ? (
                weeklyDayAtaGlance()
              ) : (
                <table class="min-w-full">
                  <thead class="bg-amber-200 border-b">
                    <tr>
                      {tableHade.map((th) => (
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          {th.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {filterselect.date === "" || filterselect.semester === "" ? (
                    <div>No Data Available</div>
                  ) : (
                    <tbody>{tbody()}</tbody>
                  )}

                  {/* {day1 === num ? (
                    <tbody>{tbody()}</tbody>
                  ) : (
                    <div>No Data Available</div>
                  )} */}
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutinDetail;
