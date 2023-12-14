import React from "react";
import useFatchData from "../../../Hooks/useFatchData";
import TableHead from "../../../Utilits/Table/TableHead";
import "../../../Utilits/Table/tabel.css";
const RutineTable = ({
  data = null,
  data2 = null,
  name = null,
  classroom = null,
  columns = null,
  hover = true,
  other = null,
  atAGlance=null,
  striped = true,
}) => {
  const { data: facultyDatas } = useFatchData(
    "https://pu-server-1.onrender.com/faculty"
  );

  //*** This funtion Convart Faculty initial Name to Full Name ***/
  const findFaculty = (name) => {
    let fullName;
    if (name) {
      fullName = facultyDatas.filter((el) => el.initialname === name);
    }
    return (fullName = fullName.map((data) => data.name));
  };

  //*****.. Main Report Table Body ..*****//
  const mainReport = () => {
    return (
      <>
        {data &&
          data.map((tdata) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.room}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.course}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {findFaculty(tdata.faculty)[0]}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.time}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.day}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.drpartment}
              </td>
              {other &&
                other.map((col) => (
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {col.field}
                  </td>
                ))}
            </tr>
          ))}
      </>
    );
  };

  //*****.. This Funtion Work from Time Slot Wise Class Table ..*****//
  const slotWiseClass = () => {
    const filters = (times) => {
      let datas;
      if (times) {
        datas = data.filter((el) => el.time === times);
      }
      return datas;
    };
    return (
      <>
        {data2 &&
          data2[0]?.value.map((tdata) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {data2[0]?.name}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {tdata.name}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                {filters(tdata.name).length}
              </td>
            </tr>
          ))}
      </>
    );
  };

  //*****.. This Funtion Show Class Room Wise Daily Class Count ..*****//
  const roomWiseClass = ()=>{
    const filters = (times) => {
      let datas;
      if (times) {
        datas = data.filter((el) => el.room === times);
      }
      return datas;
    };
    return (
      <>
        {classroom &&
          classroom.map((room) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {data2[0]?.name}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {room.roomnum}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {room.roominitial}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                {filters(room.roomnum).length}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
              {data2[0]?.value.length}
              </td>
            </tr>
          ))}
      </>
    );
  }

  //*****.. Weekly Class At a Glance Report ..*****//
  const weeklyAtAGlance = () =>{

    return (
      <>
        {atAGlance &&
          atAGlance.timeSlot.map((room) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {room.name}
              </td>
            </tr>
          ))}
      </>
    );
  }



  //****.. Component Main Funtion Return ..*****//
  return (
    <div class="flex flex-col w-full">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="w-full m-auto">
              {name === "" && <TableHead data={columns}></TableHead>}
              {name === "slotWise" && (
                <TableHead
                  data={[
                    { field: "", header: "Selected Day" },
                    { field: "", header: "Time Slot" },
                    { field: "", header: "Total Class" },
                  ]}
                ></TableHead>
              )}
              {name === "roomWise" && (
                <TableHead
                  data={[
                    { field: "", header: "Selected Day" },
                    { field: "", header: "Room Number" },
                    { field: "", header: "Room Initial Name" },
                    { field: "", header: "Total Class" },
                    { field: "", header: "Total Slot" },
                  ]}
                ></TableHead>
              )}
              {name === "weekly" && (
                <TableHead
                  data={[
                    { field: "", header: "This Report Is Under Working. Review other reports until the the is done." }
                  ]}
                ></TableHead>
              )}
              {/* <TableBody columns={columns} data={data}/> */}
              <tbody>
                {name === "" && mainReport()}
                {name === "slotWise" && slotWiseClass()}
                {name === "roomWise" && roomWiseClass()}
                {/* {name === "weekly" && weeklyAtAGlance()} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RutineTable;
