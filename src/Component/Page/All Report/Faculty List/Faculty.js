import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Ffaculty from "../../../../asecets/faculty/Female-faculty.png";
import Mfaculty from "../../../../asecets/faculty/male-faculty.png";

const Faculty = ({setOrder,faculty}) => {
    const navigate = useNavigate();
  
  const navigateToDetail = (id,setOrder,faculty) => {
    navigate(`/faculty/${id}`);
  };
  const jdate = new Date(faculty.doj)
  const bdate = new Date(faculty.dob)
  const chakeMSDate = new Date(faculty.marritStatus)
  const curret = new Date();
  // Date Calculate funtion
  function dateDiff(format1,format2) {
  let startDate = format1;
  let endDate = format2;
  
  const startYear = startDate.getFullYear();
  const february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
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

  return yearDiff + 'Y ' + monthDiff + 'M ' + dayDiff + 'D';
  }
  // DOJ & DOB Entry Check
  const checkdoj = (props) => {
    const doj = props.doj;
    if (doj  === "") {
      return <span className="text-red-500">Not Mention</span>
    } else {
      return <>{doj} <span className="text-red-500">( {dateDiff(jdate,curret)} )</span></>
      }
    }
  const checkdob = (props) => {
    const dob = props.dob;
    if (dob  === "") {
      return <span className="text-red-500">Not Mention</span>
    } else {
      return <>{dob} <span className="text-red-500">( {dateDiff(bdate,curret)} )</span></>
      }
  }
  const checkMaritStatus = (props) => {
    const date = props.marritStatus;
    const chakeMS = moment(date).format('ll');
    if (chakeMS  === "Invalid date") {
      return <span>{date}</span>
    } else {
      return <>{chakeMS && chakeMS} {date !== "Unmarried" && date !== "Seperated" && <span className="text-red-500"></span>}</>
      }
  }
  
  const checkSex =(faculty)=>{
    if (faculty.sex === "Male") {
      return Mfaculty
    }
    if (faculty.sex === "Female") {
      return Ffaculty
    }
  }
  return (
    <div style={{width:"355px"}} className="card sm:w-96 bg-base-100 shadow-xl pt-4">
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
        
        {/* <p>{product.description}</p> */}
        <div className="card-actions  pt-4 ">
          <button onClick={() => navigateToDetail(faculty._id ,faculty)} className="btn text-white w-1/4">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Faculty;