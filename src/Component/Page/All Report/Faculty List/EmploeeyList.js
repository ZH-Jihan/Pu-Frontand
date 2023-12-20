import React, { useState } from "react";
import useFatchData from "../../../Hooks/useFatchData";
import FacultyBtn from "../../../Utilits/All Buttons/FacultyBtn";
import Button from "../../../Utilits/Button";

const EmploeeyList = () => {
  const { data: emploeey } = useFatchData("employee.json");
  const [selecteditem, setSelecteditem] = useState({
    department: "",
    designation: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setSelecteditem((prev) => ({ ...prev, [name]: value }));
  };
  const btnData = FacultyBtn({ onChange, selecteditem });
  
  const filterFaculty = (empoleey = []) => {
    let data = empoleey;
    if (selecteditem.department) {
      data = data.filter((el) => el.Dept === selecteditem.department);
    }
    if (selecteditem.designation) {
      data = data.filter((el) => el.Designation === selecteditem.designation);
    }
    return data;
  };

  return (
    <div>
        <h1 className="font-bold text-4xl mt-4 mb-8 text-center">
        Employee List
            </h1>
      <div className="mt-4 mb-4 lg:w-full m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
      
        <Button details={btnData.emploeeyDesignation} />
        <Button details={btnData.emploeeyDepartment} />
      </div>
      <div>
        <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center">
          {filterFaculty(emploeey).map((emploey) => (
              <div
              style={{ width: "360px" }}
              className="card sm:w-96 bg-base-100 pt-4 rounded-2xl overflow-hidden shadow-2xl "
            >
              {/* <figure>
                <img
                  className="rounded h-32"
                  src={faculty.imgurl ? faculty.imgurl : checkSex(faculty)}
                  alt={faculty.initialname}
                />
              </figure> */}
              <div className="card-body">
                <h2 className="card-title">
                  {emploey.Name}
                </h2>
                <h2 className="">Designation : {emploey.Designation}</h2>
                <h2 className="">Department : {emploey.Dept}</h2>
                <h2 className="">ID : {emploey.ID}</h2>
              </div>
              {/* <div className="card-actions text-center pt-4 ">
                <button
                  onClick={() => navigateToDetail(faculty._id, faculty)}
                  className="w-full pl-8 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center "
                >
                  Details
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmploeeyList;
