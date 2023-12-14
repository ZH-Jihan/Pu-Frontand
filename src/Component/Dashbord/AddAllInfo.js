import React from 'react';
import { Link } from 'react-router-dom';

const AddAllInfo = () => {
    return (
        <div className="text-center pt-8">
      <Link to="/dashbord/addDipartment">
        <button className="btn btn-wide m-2">Add Department</button>
      </Link>
      <Link to="/dashbord/addfaculty">
        <button className="btn btn-wide m-2">Add Faculty</button>
      </Link>
      <Link to="/dashbord/program">
        <button className="btn btn-wide m-2">Add Program</button>
      </Link>
      <Link to="/dashbord/adduniversity">
        <button className="btn btn-wide m-2">Add University</button>
      </Link>
      <Link to="/dashbord/addcourse">
        <button className="btn btn-wide m-2">Add Course</button>
      </Link>
      <Link to="/dashbord/add_classRoom">
        <button className="btn btn-wide m-2">Add Class Room</button>
      </Link>
      <Link to="/dashbord/addsemester">
        <button className="btn btn-wide m-2">Add Semester</button>
      </Link>
      <Link to="/dashbord/admission-entry">
        <button className="btn btn-wide m-2">Admisson Entry</button>
      </Link>
      <Link to="/dashbord/routin-entry">
        <button className="btn btn-wide m-2">Class Routin Entry</button>
      </Link>
      
    </div>
    );
};

export default AddAllInfo;