import React, { useState } from "react";
import * as XLSX from "xlsx";
const EntryRoutine = () => {
  const [jsonData, setJsonData] = useState(null);
  const [selectSemester, setSelectSemester] = useState({
    semester: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectSemester((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Use the first row as JSON element names
      const headers = json[0];
      const rows = json
        .slice(1)
        .map((row) => {
          // Skip rows with empty values
          if (
            row.some(
              (cell) => cell !== undefined && cell !== null && cell !== ""
            )
          ) {
            const rowData = {};
            headers.forEach((header, index) => {
              rowData[header] = row[index];
            });
            return rowData;
          } else {
            return null; // Skip empty row
          }
        })
        .filter((row) => row !== null); // Filter out null rows

      setJsonData(rows);
    };

    reader.readAsArrayBuffer(file);
  };
  const routinAdd = async (e) => {
e.preventDefault();
    const rutinData = {
        name:selectSemester.semester,
        data: jsonData
    };
    console.log(rutinData);
  };

  return (
    <div>
      <form onSubmit={routinAdd}>
        <div class="w-full relative flex items-center justify-center bg-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8  bg-no-repeat bg-cover relative items-center">
          <div class="absolute opacity-60 inset-0 z-0"></div>
          <div class="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
            <div class="grid  gap-8 grid-cols-1">
              <div class="flex flex-col ">
                <div class="flex flex-col sm:flex-row items-center">
                  <h2 class="font-semibold text-3xl mr-auto">
                    Add Hostel Member{" "}
                  </h2>
                  <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                </div>
                <div class="mt-5">
                  <div class="form">
                    <div class="md:grid grid lg:grid-cols-4 gap-4 w-full text-xs">
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 py-2">
                          Semester Name
                        </label>
                        <select
                          autocomplete="None"
                          onChange={handleInputChange}
                          value={selectSemester.semester}
                          class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          required
                          name="semester"
                        >
                          <option value={""}>--Select Flat--</option>
                          <option>North_1</option>
                          <option>South_1</option>
                        </select>
                      </div>
                      <div class="form-control  mb-3 space-y-2 w-full text-base">
                        <label class="font-semibold text-gray-600 text-xl py-2">
                          Seat Number
                          <span title="required" className="text-red-500">
                            *
                          </span>
                        </label>
                        <input type="file" onChange={handleFileChange} />
                      </div>
                    </div>
                    <div class="form-control mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <button
                        type="submit"
                        class="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EntryRoutine;
