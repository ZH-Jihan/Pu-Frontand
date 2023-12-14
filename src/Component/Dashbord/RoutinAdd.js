import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useClassRoom from "../../Hooks/useClassRoom";
import useCourse from "../../Hooks/useCourse";
// import useDepartment from "../../Hooks/useDepartment";
import useFaculty from "../../Hooks/useFaculty";
import useProgram from "../../Hooks/useProgram";

const RoutinAdd = () => {
  const [facultys] = useFaculty();
  const [programs] = useProgram();
  const [courses] = useCourse();
  const [classrooms] = useClassRoom();
  const [filterselect, setFilterselect] = useState({
    croom: "",
    dipartment: "",
    program: "",
    sdate: "",
    edate: "",
    day: "",
    semester: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFilterselect((prev) => ({ ...prev, [name]: value }));
  };
  // const onChangeclass = (e) => {
  //   const { name, value } = e.target;
  //   setFilterselect((prev) => ({ ...prev, [name]: value }));
  // };
  // const getExactDatesBewtweenTwoDates = (sdate, ldate, days) => {
  //   let Dates = [];
  //   //convert string date to moment date
  //   let StartDate = moment(sdate, "YYYY/MM/DD");
  //   let LastDate = moment(ldate, "YYYY/MM/DD");
  //   let i = 0;
  //   for (let j = 0; j < days.length; j++) {
  //     i = 0;
  //     let sdate = StartDate.clone();
  //     while (sdate.day(i + days[j]).isSameOrBefore(LastDate)) {
  //       if (
  //         moment(
  //           sdate.clone().format("DD/MM/YYYY"),
  //           "DD/MM/YYYY"
  //         ).isSameOrAfter(StartDate)
  //       ) {
  //         Dates.push(sdate.clone().format("DD/MM/YYYY"));
  //       }
  //       //loop to next week
  //       i = 7;
  //     }
  //   }
  //   return Dates;
  // };
  // const test = getExactDatesBewtweenTwoDates(
  //   filterselect.sdate,
  //   filterselect.edate,
  //   [parseInt(filterselect.day)]
  // );
  // const day = moment(test[0], "DD/MM/YYYY").format("dddd");
  // console.log(day);

  // const filterClass = (alldata = []) => {
  //   let data = alldata;
  //   if (filterselect) {
  //     data = data.filter((el) => el.roomnum === filterselect.croom);
  //   }
  //   return data;
  // };
  // const classRoom = filterClass(classrooms);

  const filterData = (alldata = []) => {
    let data = alldata;
    if (filterselect) {
      data = data.filter((el) => el.dipartment === filterselect.dipartment);
    }
    return data;
  };
  const filterCourse = (alldata = []) => {
    let data = alldata;
    if (filterselect) {
      data = data.filter((el) => el.drogram === filterselect.program);
    }
    return data;
  };
  // console.log(filterCourse(courses),courses[0])
  const handleRoutin = (event) => {
    event.preventDefault();
    const routindetail = {
      dipartment: event.target.dipartment?.value,
      program: event.target.program?.value,
      course: event.target.course?.value,
      croom: event.target.classRoom?.value,
      teacher: event.target.teacher?.value,
      day: event.target.day?.value,
      section: event.target.section?.value,
      semester: event.target.semester?.value,
      tslot: event.target.tslot?.value,
      description: event.target.description?.value,
    };
    // if (routindetail.dipartment || routindetail.designation || routindetail.university === "--Select Department--") {
    //   toast.error("Please Select Option")
    // } else {
    fetch("http://localhost:5000/api/v1/routin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(routindetail),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          event.target.reset();
          // Navigate("/product");
          toast.success("Class Routin Added");
        }
      });
  };
  return (
    <form onSubmit={handleRoutin}>
      <div class="w-full relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
        <div class="absolute opacity-60 inset-0 z-0"></div>
        <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div class="grid  gap-8 grid-cols-1">
            <div class="flex flex-col ">
              <div class="flex flex-col sm:flex-row items-center">
                <h2 class="font-semibold text-3xl mr-auto">
                  Add Class Routin Details
                </h2>
                <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div class="mt-5">
                <div class="form">
                  <div class="form-control md:flex md:flex-row md:space-x-4 w-full text-lg">
                    <div class="form-control  w-full flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Department
                      </label>
                      <select
                        value={filterselect.dipartment}
                        onChange={onChange}
                        autocomplete="None"
                        placeholder="Department"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="dipartment"
                      >
                        <option alt="not">--Select Department--</option>
                        <option>DEPARTMENT OF BUSINESS</option>
                        <option>DEPARTMENT OF ENGLISH</option>
                        <option>DEPARTMENT OF CIVIL ENGINEERING</option>
                        <option>
                          DEPARTMENT OF ELECTRICAL & COMPUTER ENGINEERING
                        </option>
                      </select>
                    </div>
                    <div class="form-control  w-full flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Program
                      </label>
                      <select
                        value={filterselect.program}
                        onChange={onChange}
                        autocomplete="None"
                        placeholder="Department"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="program"
                      >
                        <option alt="not">--Select Program--</option>
                        {filterData(programs).map((program) => (
                          <option>{program.name}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-control  w-full flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Course
                      </label>
                      <select
                        autocomplete="None"
                        placeholder="Department"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="course"
                      >
                        <option alt="not">ELT 560</option>
                        {filterCourse(courses).map((course) => (
                          <option>{course.cInitial}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-control  w-full flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Class Room
                      </label>
                      <select
                        required
                        value={filterselect.croom}
                        onChange={onChange}
                        autocomplete="None"
                        placeholder="Department"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="croom"
                      >
                        <option value={""}>---Select Room---</option>
                        <option value={"Online"}>Online</option>
                        {classrooms.map((classroom) => (
                          <option value={classroom.roomnum}>
                            {classroom.roomnum} - {classroom.roomname}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div class="form-control md:flex md:flex-row md:space-x-4 w-full text-lg">
                    <div class="form-control  w-full flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Teacher
                      </label>
                      <select
                        required
                        autocomplete="None"
                        placeholder="Department"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="teacher"
                      >
                        <option alt="not">--Select Teacher--</option>
                        {facultys.map((faculty) => (
                          <option>
                            ( {faculty.initialname} )_{faculty.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="form-control  w-full flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Day
                      </label>
                      <select
                        required
                        onChange={onChange}
                        value={filterselect.day}
                        autocomplete="None"
                        placeholder="Department"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="day"
                      >
                        <option value="">--Select Day--</option>
                        <option value={6}>Saturday</option>
                        <option value={0}>Sunday</option>
                        <option value={1}>Monday</option>
                        <option value={2}>Tuesday</option>
                        <option value={3}>Wednesday</option>
                        <option value={4}>Thursday</option>
                        <option value={5}>Friday</option>
                      </select>
                    </div>
                    <div class="form-control  w-full flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Section
                      </label>
                      <input
                        placeholder="Enter Section"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="section"
                      />
                    </div>
                    <div class="form-control  w-full flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Semester
                      </label>
                      <select
                        required
                        onChange={onChange}
                        value={filterselect.semester}
                        autocomplete="None"
                        placeholder="Department"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="semester"
                      >
                        <option value={""}>---Select Semester---</option>
                        <option>Summer-23</option>
                        <option>Spring-23</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-control py-2 md:flex md:flex-row md:space-x-4 lg:w-full text-lg">
                    {/* Date Of Join */}
                    {/* <div class="form-control  w-2/4 flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Semester Start Date
                      </label>
                      <input
                        onChange={onChange}
                        value={filterselect.sdate}
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="date"
                        name="sdate"
                      />
                    </div> */}
                    {/* Date Of Birth */}
                    {/* <div class="form-control  w-2/4 flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Semester End Date
                      </label>
                      <input
                        onChange={onChange}
                        value={filterselect.edate}
                        placeholder="Date Of Join"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="date"
                        name="edate"
                      />
                    </div> */}
                    <div class="form-control  w-2/4 flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Time Slot (
                        <span
                          style={{ "font-size": "smaller" }}
                          className="font-small text-8 text-red-400"
                        >
                          Format Ex - 10:30AM - 12:30AM{" "}
                        </span>
                        )
                      </label>
                      <input
                        placeholder="Time Slot"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="tslot"
                      ></input>
                    </div>
                    <div class="form-control  w-2/4 flex flex-col mb-3">
                      <label class="font-semibold text-gray-600 py-2">
                        Time Slot (
                        <span
                          style={{ "font-size": "smaller" }}
                          className="font-small text-8 text-red-400"
                        >
                          Format Ex - 10:30AM - 12:30AM{" "}
                        </span>
                        )
                      </label>
                      <input
                        placeholder="Time Slot"
                        class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="tslot"
                      ></input>
                    </div>
                  </div>
                  {/* Description */}
                  <div class="form-control flex-auto w-full mb-1 text-lg space-y-2">
                    <label class="font-semibold text-gray-600 py-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      class="w-full min-h-[100px] text-base max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Enter your Faculty info"
                      spellcheck="true"
                    ></textarea>
                  </div>
                  <div class="form-control mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button
                      type="submit"
                      class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-lg shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RoutinAdd;
