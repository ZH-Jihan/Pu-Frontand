
const useRoutineBtn = ({onChange,filterselect}) => {
  
    const departmentBtn = {
        btnHade: "Department",
        btnvalue: filterselect.department,
        function: { onChange },
        btnName: "department",
        option: [
          { value: "", name: "--All Department--" },
          { value: "Civil", name: "Civil" },
          { value: "CSE", name: "CSE" },
          { value: "EEE", name: "EEE" },
          { value: "English", name: "English" },
          { value: "Business", name: "Business" },
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
          { value: "Spring-24", name: "Spring-24" },
          { value: "fall", name: "Fall-23" },
          { value: "summer", name: "Summer-23" }
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
      const dayBtn = {
        btnHade: "Select Day",
        btnvalue: filterselect.day,
        function: { onChange },
        btnName: "day",
        option: [
          { value: "", name: "--Select--" },
          { value: "Saturday", name: "Saturday" },
          { value: "Sunday", name: "Sunday" },
          { value: "Monday", name: "Monday" },
          { value: "Tuesday", name: "Tuesday" },
          { value: "Wednesday", name: "Wednesday" },
          { value: "Thursday", name: "Thursday" },
          { value: "Friday", name: "Friday" },
          
        ],
      };
    
    return {classRoomBtn,departmentBtn,semesterBtn,timeSlotBtn,filterselect,dayBtn,reportTypeBtn};
};

export default useRoutineBtn;