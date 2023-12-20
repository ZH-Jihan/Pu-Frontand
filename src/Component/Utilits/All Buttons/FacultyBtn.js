
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

      //*****.. Start Emploeey Button List ..*****//
      
      const emploeeyDesignation = {
        btnHade: "Designation",
        btnvalue: selecteditem.designation,
        function: { onChange },
        btnName: "designation",
        option: [
          { value: "", name: "--- All ---" },
          { value: "Adviser", name: "Adviser" },
          { value: "Asst. Executive", name: "Asst. Executive" },
          { value: "Asst. Director", name: "Asst. Director" },
          { value: "Asst. Of Consultant", name: "Asst. Of Consultant" },
          { value: "Asst. Registrar", name: "Asst. Registrar" },
          { value: "Deputy Controller", name: "Deputy Controller" },
          { value: "Driver", name: "Driver" },
          { value: "Electrician", name: "Electrician" },
          { value: "Executive", name: "Executive" },
          { value: "Graphic Designer", name: "Graphic Designer" },
          { value: "Guard", name: "Guard" },
          { value: "Head of Admission", name: "Head of Admission" },
          { value: "Head of Student Affairs", name: "Head of Student Affairs" },
          { value: "Lab Assistant", name: "Lab Assistant" },
          { value: "Lab Technician", name: "Lab Technician" },
          { value: "O.S.S", name: "O.S.S" },
          { value: "Office Assistant", name: "Office Assistant" },
          { value: "PRO", name: "PRO" },
          { value: "Registrar", name: "Registrar" },
          { value: "Security Supervisor", name: "Security Supervisor" },
          { value: "Sr. Asst. Registrar", name: "Sr. Asst. Registrar" },
          { value: "Sr. Executive", name: "Sr. Executive" },
          { value: "System Administrator", name: "System Administrator" },
          { value: "Vice Chancellor", name: "Vice Chancellor" },
          { value: "Additional Registrar", name: "Additional Registrar" }
        ],
      };
      const emploeeyDepartment = {
        btnHade: "Department",
        btnvalue: selecteditem.department,
        function: { onChange },
        btnName: "department",
        option: [
          { value: "", name: "--- All ---" },
          { value: "Accounts", name: "Accounts" },
          { value: "Admin", name: "Admin" },
          { value: "Admission", name: "Admission" },
          { value: "Adviser office", name: "Adviser office" },
          { value: "Business", name: "Business" },
          { value: "Civil", name: "Civil" },
          { value: "Controller Section", name: "Controller Section" },
          { value: "Digital  Marketing", name: "Digital  Marketing" },
          { value: "ECE", name: "ECE" },
          { value: "English", name: "English" },
          { value: "IT", name: "IT" },
          { value: "Library", name: "Library" },
          { value: "Registar's Office", name: "Registar's Office" },
          { value: "Student  Affairs", name: "Student  Affairs" },
          { value: "VC Office", name: "VC Office" }
        ],
      };

      return {emploeeyDepartment,jobTypeBtn,departmentBtn,marritedBtn,designationdBtn,universityBtn,emploeeyDesignation};
};

export default FacultyBtn;