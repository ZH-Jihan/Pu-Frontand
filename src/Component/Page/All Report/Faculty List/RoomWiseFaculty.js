import React, { useState } from "react";
import useFatchData from "../../../Hooks/useFatchData";
import Table from "../../../Utilits/Table/Table";
import TableHead from "../../../Utilits/Table/TableHead";
import Loading from "../../Sheared Page/Loading";

const RoomWiseFaculty = () => {
  const { data: faculty, loading } = useFatchData("/faculty");
  const [selecteditem, setSelecteditem] = useState([]);
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setSelecteditem((prev) => ({ ...prev, [name]: value }));
  // };
  console.log(selecteditem);
  const filterData = (room) => {
    let data;
    const datas = faculty.filter((el)=>el.status === "Active")
    if (room) {
      data = datas.filter((el) => el.roomnum === room);
    } else {
      data = datas.filter((el) => el.roomnum !== "");
    }
    return data;
  };
  const option = [
    { value: "Total", name: "Total", cepacity: "" },
    { value: "201-A", name: "201- A", cepacity: "2" },
    { value: "201-B", name: "201- B", cepacity: "7" },
    { value: "201-C", name: "201- C", cepacity: "7" },
    { value: "312", name: "312", cepacity: "2" },
    { value: "317", name: "317", cepacity: "4" },
    { value: "412", name: "412", cepacity: "2" },
    { value: "417", name: "417", cepacity: "4" },
    { value: "423", name: "423", cepacity: "4" },
    { value: "506", name: "506", cepacity: "2" },
    { value: "512", name: "512", cepacity: "2" },
    { value: "517", name: "517", cepacity: "4" },
    { value: "523", name: "523", cepacity: "4" },
    { value: "600", name: "600", cepacity: "2" },
    { value: "602", name: "602", cepacity: "3" },
    { value: "612", name: "612", cepacity: "2" },
    { value: "617-A", name: "617- A", cepacity: "4" },
    { value: "617-B", name: "617- B", cepacity: "2" },
    
  ];
  // const roomBtn = {
  //   btnHade: "Room Number",
  //   btnvalue: setSelecteditem.roomnum,
  //   function: { onChange },
  //   btnName: "roomnum",
  //   option: option,
  // };

  const detailtableHead = [
    { field: "roomnum", header: "Room Number" },
    { field: "name", header: "Name" },
    { field: "designation", header: "Designation" },
    { field: "dipartment", header: "Department" },
    { field: "pnumber", header: "Phone Number" },
  ];
  const slot = (value, day) => {
    console.log(value);
    if (day === "Total") {
      let sum = 0;
      // Iterate over each object and add its capacity to the sum
      for (let i = 0; i < option.length; i++) {
        sum += Number(option[i].cepacity);
      }
      return sum;
    }
    return value;
  };
    
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <h1 className="text-center font-extrabold text-2xl underline underline-offset-1">
          Room Wise Faculty
        </h1>
        {selecteditem.length !== 0 &&
          <>
            <div className="grid grid-cols-6">
              <button className="btn lg:w-2/4 fonrt-bold rounded-lg" onClick={()=>{setSelecteditem([])}}>Back</button>
            </div>
              <Table columns={detailtableHead} data={selecteditem} />
          </>
        }
        {selecteditem.length === 0 && <div class="flex flex-col w-full">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <TableHead
                    data={[
                      { field: "", header: "Room Number" },
                      { field: "", header: "Capacity" },
                      { field: "", header: "Occupied" },
                      { field: "", header: "Empty" },
                    ]}
                  />
                  <tbody>
                    {option.map((row) => (
                      <tr>
                        <td class="px-2 py-4 whitespace-nowrap text-xl font-medium text-gray-700">
                          {row.name}
                        </td>
                        <td class="px-2 py-4 whitespace-nowrap text-xl font-medium text-gray-700">
                          {slot(row.cepacity,row.name)}
                        </td>
                        <td class="px-2 py-4 whitespace-nowrap text-xl font-medium text-gray-700">
                          <button
                          className="text-xl text-blue-700 underline underline-offset-2"
                            onClick={() => {
                              setSelecteditem(filterData(row.value));
                            }}
                          >
                            {row.name === "Total" ? 43 : filterData(row.value).length}
                          </button>
                        </td>
                        <td class="px-2 py-4 whitespace-nowrap text-xl font-medium text-gray-7 00">
                          {row.name === "Total" ? slot(row.cepacity,row.name) - 43 : row.cepacity - filterData(row.value).length}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
};

export default RoomWiseFaculty;
