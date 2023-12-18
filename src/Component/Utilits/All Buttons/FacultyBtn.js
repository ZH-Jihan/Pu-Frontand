
const FacultyBtn = ({onChange,selecteditem}) => {

    const jobTypeBtn = {
        btnHade: "Job Type",
        btnvalue: selecteditem.jobtype,
        function: { onChange },
        btnName: "jobtype",
        option: [
          { value: "", name: "--Select Job Type--" },
          { value: "Full Time", name: "Full Time" },
          { value: "Part Time", name: "Part Time" },
        ],
      };
    const departmentBtn = {
        btnHade: "Department",
        btnvalue: selecteditem.department,
        function: { onChange },
        btnName: "department",
        option: [
          { value: "", name: "--Select Department--" },
          {  value: "DEPARTMENT OF BUSINESS",name: "DEPARTMENT OF BUSINESS" },
          {  value: "DEPARTMENT OF ENGLISH",name: "DEPARTMENT OF ENGLISH" },
          {  value: "DEPARTMENT OF CIVIL ENGINEERING",name: "DEPARTMENT OF CIVIL ENGINEERING" },
          {  value: "DEPARTMENT OF CSE",name: "DEPARTMENT OF CSE" },
          {  value: "DEPARTMENT OF EEE",name: "DEPARTMENT OF EEE" },
          {  value: "DEPARTMENT OF LAW",name: "DEPARTMENT OF LAW" },
          { value: "COMON", name: "Common Faculty" }
        ],
      };
    const marritedBtn = {
        btnHade: "Marital Status",
        btnvalue: selecteditem.marrited,
        function: { onChange },
        btnName: "marrited",
        option: [
          { value: "", name: "--Select Status--" },
          {  value: "Married",name: "Married" },
          {  value: "Unmarried",name: "Unmarried" },
          {  value: "Seperated",name: "Seperated" }
        ],
      };
    const designationdBtn = {
        btnHade: "Designation",
        btnvalue: selecteditem.designation,
        function: { onChange },
        btnName: "designation",
        option: [
          { value: "", name: "--Select Designation--" },
          {  value: "Professor",name: "Professor" },
          {  value: "Associate Professor",name: "Associate Professor" },
          {  value: "Assistant Professor",name: "Assistant Professor" },
          {  value: "Lecturer",name: "Lecturer" }
        ],
      };
    const universityBtn = {
        btnHade: "University",
        btnvalue: selecteditem.university,
        function: { onChange },
        btnName: "university",
        option: [
          { value: "", name: "--All University--" }
        ],
      };
      return {jobTypeBtn,departmentBtn,marritedBtn,designationdBtn,universityBtn};
};

export default FacultyBtn;