
const useRoutineBtn = ({onChange,filterselect}) => {
  
    const departmentBtn = {
        btnHade: "Department",
        btnvalue: filterselect.department,
        function: { onChange },
        btnName: "department",
        option: [
          { value: "", name: "--All Department--" },
          { value: "CE", name: "Civil" },
          { value: "ECE", name: "CSE/ECE" },
        ],
      };

    const classRoomBtn = {
        btnHade: "Class Room",
        btnvalue: filterselect.room,
        function: { onChange },
        btnName: "room",
        option: [
          { value: "", name: "--All Room--" }
        ],
      };
      const semesterBtn = {
        btnHade: "Semester",
        btnvalue: filterselect.semester,
        function: { onChange },
        btnName: "semester",
        option: [
          { value: "", name: "--Select Semester--" },
          { value: "fall", name: "Fall-23" },
          { value: "", name: "Summer-23" }
        ],
      };

      const timeSlotBtn = {
        btnHade: "Time Slot",
        btnvalue: filterselect.timeslot,
        function: { onChange },
        btnName: "timeslot",
        option: [
          { value: "", name: "--All Slot--" },
        ],
      };

      const reportTypeBtn = {
        btnHade: "Type Of Report",
        btnvalue: filterselect.reportType,
        function: { onChange },
        btnName: "reportType",
        option: [
          { value: "", name: "Weekly Class Report" },
          { value: "main", name: "Main Routine" },
          { value: "slotWise", name: "Slot Wise Report" },
          { value: "roomWise", name: "Room Wise Report" }
          
        ],
      };

      const dateBtn = {
        btnHade: "Select Date",
        btnvalue: filterselect.date,
        function: { onChange },
        btnName: "date",
        type:"date"
      };
    
    return {classRoomBtn,departmentBtn,semesterBtn,timeSlotBtn,filterselect,dateBtn,reportTypeBtn};
};

export default useRoutineBtn;