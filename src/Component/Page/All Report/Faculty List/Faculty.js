import moment from "moment";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Ffaculty from "../../../../asecets/faculty/Female-faculty.png";
import Mfaculty from "../../../../asecets/faculty/male-faculty.png";
import auth from "../../../../firebase.init";
import useAdmin from "../../../Hooks/Admin";

const Faculty = ({ setOrder, faculty }) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const navigateToDetail = (id) => {
    navigate(`/faculty/${id}`);
  };
  const navigateToEdit = (id) => {
    navigate(`/updatefaculty/${id}`);
  };
  const jdate = new Date(faculty.doj);
  const bdate = new Date(faculty.dob);
  const chakeMSDate = new Date(faculty.marritStatus);
  const curret = new Date();
  // Date Calculate funtion
  function dateDiff(format1, format2) {
    let startDate = format1;
    let endDate = format2;

    const startYear = startDate.getFullYear();
    const february =
      (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
        ? 29
        : 28;
    const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let yearDiff = endDate.getFullYear() - startYear;
    let monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
      if (monthDiff > 0) {
        monthDiff--;
      } else {
        yearDiff--;
        monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
    }

    return yearDiff + "Y " + monthDiff + "M " + dayDiff + "D";
  }
  // DOJ & DOB Entry Check
  const checkdoj = (props) => {
    const doj = props.doj;
    const chakeMS = moment(doj).format("ll");
    if (doj === "") {
      return <span className="text-red-500">Not Mention</span>;
    } else {
      return (
        <>
          {chakeMS}{" "}
          <span className="text-red-500">( {dateDiff(jdate, curret)} )</span>
        </>
      );
    }
  };
  const checkdob = (props) => {
    const dob = props.dob;
    const chakeMS = moment(dob).format("ll");
    if (dob === "") {
      return <span className="text-red-500">Not Mention</span>;
    } else {
      return (
        <>
          {chakeMS}{" "}
          <span className="text-red-500">( {dateDiff(bdate, curret)} )</span>
        </>
      );
    }
  };
  const checkMaritStatus = (props) => {
    const date = props.marritStatus;
    const chakeMS = moment(date).format("ll");
    if (chakeMS === "Invalid date") {
      return <span>{date}</span>;
    } else {
      return (
        <>
          {chakeMS && chakeMS}{" "}
          {date !== "Unmarried" && date !== "Seperated" && (
            <span className="text-red-500"></span>
          )}
        </>
      );
    }
  };

  const checkSex = (faculty) => {
    if (faculty.sex === "Male") {
      return Mfaculty;
    }
    if (faculty.sex === "Female") {
      return Ffaculty;
    }
  };
  return (
    <div
      style={{ width: "360px" }}
      className="card sm:w-96 bg-base-100 pt-4 rounded-2xl overflow-hidden shadow-2xl "
    >
      <figure>
        <img
          className="rounded h-32"
          src={faculty.imgurl ? faculty.imgurl : checkSex(faculty)}
          alt={faculty.initialname}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {faculty.name} ({faculty.initialname})
        </h2>
        <h2 className="">Designation : {faculty.designation}</h2>
        <h2 className="">Department : {faculty.dipartment}</h2>
        <h2 className="">University : {faculty.university}</h2>
        <h2 className="">Phone : 0{faculty.pnumber}</h2>
        <h2 className="">DO_Join : {checkdoj(faculty)} </h2>
        <h2 className="">DO_Birth : {checkdob(faculty)}</h2>
        {faculty.marritStatus ? (
          <h2 className="">Married Status : {checkMaritStatus(faculty)}</h2>
        ) : (
          <h1></h1>
        )}
        {faculty.roomnum ? <h2>Room Num : {faculty.roomnum}</h2> : <h1></h1>}
      </div>
      <div className="card-actions text-center pt-4 ">
        {
          admin?(
            <button
          onClick={() => navigateToEdit(faculty._id)}
          className="w-full pl-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center "
        >
          Edit
        </button>
          ):(<button
            onClick={() => navigateToDetail(faculty._id )}
            className="w-full pl-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center "
          >
            Details
          </button>)
        }
      </div>
    </div>
  );
};

export default Faculty;

{
  /* <div style={{width:"355px"}} className="card sm:w-96 bg-base-100 shadow-xl pt-4">
      <figure>
        <img className="rounded h-32"
          src={faculty.imgurl?(faculty.imgurl):(checkSex(faculty))}
          alt={faculty.initialname}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{faculty.name} ({faculty.initialname})</h2>
        <h2 className="">Designation : {faculty.designation}</h2>
        <h2 className="">Department : {faculty.dipartment}</h2>
        <h2 className="">University : {faculty.university}</h2>
        <h2 className="">Phone : 0{faculty.pnumber}</h2>
        <h2 className="">DO_Join : {checkdoj(faculty)} </h2>
        <h2 className="">DO_Birth : {checkdob(faculty)}</h2>
        {faculty.marritStatus ? <h2 className="">Married Status : {checkMaritStatus(faculty)}</h2> : <h1></h1>}
        {
          faculty.roomnum?(<h2>Room Num : {faculty.roomnum}</h2>):(<h1></h1>)
        }
        
        
        <div className="card-actions  pt-4 ">
          <button onClick={() => navigateToDetail(faculty._id ,faculty)} className="btn text-white w-1/4">Details</button>
        </div>
      </div>
    </div> */
}

//   <div class="rounded overflow-hidden shadow-lg  relative flex flex-col sm:w-96">
//   <figure>
//       <img className="rounded h-32"
//         src={faculty.imgurl?(faculty.imgurl):(checkSex(faculty))}
//         alt={faculty.initialname}
//       />
//     </figure>
//   <div class="px-6 py-4 h-full">
//     <div class="font-bold text-xl mb-2">{faculty.name} ({faculty.initialname})</div>
//     <p class="text-gray-700 text-base">Designation : {faculty.designation}</p>
//     <p class="text-gray-700 text-base">Department : {faculty.dipartment}</p>
//     <p class="text-gray-700 text-base">University : {faculty.university}</p>
//     <p class="text-gray-700 text-base">Phone : 0{faculty.pnumber}</p>
//     <p class="text-gray-700 text-base">DO_Join : {checkdoj(faculty)}</p>
//     <p class="text-gray-700 text-base">DO_Birth : {checkdob(faculty)}</p>
//     {faculty.marritStatus ? <p class="text-gray-700 text-base">Married Status : {checkMaritStatus(faculty)}</p> : <p></p>}
//     {faculty.roomnum ? <p class="text-gray-700 text-base">Room Num : {faculty.roomnum}</p> : <p></p>}

//   </div>
//   <button onClick={() => navigateToDetail(faculty._id ,faculty)} class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
//     <svg
//       class="fill-current w-4 h-4 mr-2"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 20 20"
//     >
//       <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
//     </svg>
//     <span>Details</span>
//   </button>
// </div>
