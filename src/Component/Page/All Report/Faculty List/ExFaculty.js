import React from 'react';
import Ffaculty from "../../../../asecets/faculty/Female-faculty.png";
import Mfaculty from "../../../../asecets/faculty/male-faculty.png";
import useFatchData from '../../../Hooks/useFatchData';

const ExFaculty = () => {
    const { data: faculty, loading } = useFatchData(
        "https://pu-server-1.onrender.com/api/v1/faculty"
      );

      const activeFaculty = (datas = [])=>{
        let faculty = datas;
        if (faculty) {
          faculty = faculty.filter((el)=> el.status === "InActive")
        }
        return faculty;
      }
      const facultys = activeFaculty(faculty) 
      const checkSex = (faculty) => {
        if (faculty.sex === "Male") {
          return Mfaculty;
        }
        if (faculty.sex === "Female") {
          return Ffaculty;
        }
      };
    return (<div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 justify-items-center">
    {facultys.map((faculty) => (
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
      </div>
    </div>
    ))}
  </div>

        
    );
};

export default ExFaculty;