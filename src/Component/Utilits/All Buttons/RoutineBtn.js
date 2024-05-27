
const useRoutineBtn = ({onChange,filterselect}) => {
  
    const departmentBtn = {
        btnHade: "Department",
        btnvalue: filterselect.department,
        function: { onChange },
        btnName: "department",
        option: [
          { value: "", name: "--All Department--" },
          { value: "CE", name: "Civil" },
          { value: "CSE", name: "CSE" },
          { value: "EEE", name: "EEE" },
          { value: "ENG", name: "English" },
          { value: "BUS", name: "Business" },
        ],
      };

    const classRoomBtn = {
        btnHade: "Class Room",
        btnvalue: filterselect.room,
        function: { onChange },
        btnName: "room",
        option: [
          { value: "", name: "--All Room--" },
          { value: "Online", name: "Online" },
        ],
      };
      const semesterBtn = {
        btnHade: "Semester",
        btnvalue: filterselect.semester,
        function: { onChange },
        btnName: "semester",
        option: [
          { value: "", name: "--Select Semester--" },
          { value: "Spring-24", name: "Spring-24" }
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
          { value: "all", name: "Weekly All Class Report" },
          { value: "offline", name: "Weekly Ofline Class Report" },
          { value: "online", name: "Weekly Online Class Report" },
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