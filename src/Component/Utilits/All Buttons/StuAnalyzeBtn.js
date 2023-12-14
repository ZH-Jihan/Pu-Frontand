
const useStuAnalyzeBtn = ({onChange,filterselect}) => {
    const mainReport = {
        btnHade: "Main Report Type",
        btnvalue: filterselect.mainReport,
        function: { onChange },
        btnName: "mainReport",
        option: [
          { value: "", name: "--Select Report--" },
          { value: "admission", name: "Admitted Student" },
          { value: "regaster", name: "Registered Student" },
          { value: "droped", name: "Dropped Student" },
        ],
      };
    const admsubReport = {
        btnHade: "Sub Report",
        btnvalue: filterselect.addSubReport,
        function: { onChange },
        btnName: "addSubReport",
        option: [
          { value: "", name: "--Select Report--" },
          { value: "yearwsem", name: "Year With Semester" },
          { value: "yearwprm", name: "Year With Program" },
          { value: "semwprm", name: "Semester With Program" },
        ],
      };
    const regSubReport = {
        btnHade: "Program Type",
        btnvalue: filterselect.programtype,
        function: { onChange },
        btnName: "programtype",
        option: [
          { value: "", name: "Show All Type" },
          { value: "Day", name: "Day" },
          { value: "Evening", name: "Evening" },
          { value: "Weekend", name: "Weekend" },
        ],
      };
    const regmainSubReport = {
        btnHade: "Sub Report",
        btnvalue: filterselect.regSubReport,
        function: { onChange },
        btnName: "regSubReport",
        option: [
          { value: "", name: "--Select Report" },
          { value: "yearwtable", name: "Year Wise Summery" },
          { value: "semwtable", name: "Semester Wise Summery" },
          { value: "fullDetail", name: "Full Details With Program" },
        ],
      };
    const otherreport = {
        btnHade: "",
        btnvalue: filterselect.subReport,
        function: { onChange },
        btnName: "other",
        option: [
          { value: "", name: "--Select Report--" },
          { value: "", name: "Semister Wise Course Fee" },
          { value: "", name: "Semister Wise Program Credit" },
          { value: "", name: "Semister Wise Waiver" },
        ],
      };
    return {mainReport,admsubReport,regSubReport,regmainSubReport};
};

export default useStuAnalyzeBtn;