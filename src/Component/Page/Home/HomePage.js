import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  
  const reportPaths = [
    { name: "View Class Schedule", path: "/viewroutin" },
    { name: "Faculty Wise Class", path: "/teacherclass" },
    { name: "Program Wise Class", path: "/programClasscount" },
    { name: "Faculty Absent Report", path: "/absentreportview" },
    { name: "Total Faculty List", path: "/faculty" },
    { name: "Program Wise Course Details", path: "/program" },
    { name: "Admission Analysis", path: "/studentinfo" },
    { name: "Faculty Absent Entry", path: "/absentreportentry" },
    { name: "Department", path: "/department" },
    { name: "Total Class Room", path: "/classRoom" },
    { name: "Jurnal Viwe", path: "/viewjurnal" },
    { name: "Admission Form", path: "/admisonfrom" },
    { name: "Register Form", path: "/registarfrom" },
  ];

  return (
    <div className="text-center m-auto pt-8 lg:w-3/4 grid lg:grid-cols-4 grid-cols-2 gap-4 py-8 px-4">
      {reportPaths.map((report) => (
        <Link to={report.path}>
          <button className="btn w-full m-2 rounded-3xl shadow-2xl shadow-current ">
            {report.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
