import React from "react";
import rutinData from "../../../../data/classRoutin.json";
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
  date = null,
  other = null,
  atAGlance = null,
  striped = true,
  setDay= null,
  setFilterSel = null
}) => {
  const { data: facultyDatas } = useFatchData("/faculty");

  
  
  
  

//***** At A Glance Table Data Condition Wise *****//
  const offlineatAGlanceTblData = [
    { field: "", header: "Day" },
    { field: "", header: "Number Of Slot" },
    { field: "", header: "Total Class" },
    { field: "", header: "Civil" },
  ]
  const onlineatAGlanceTblData = [
    { field: "", header: "Day" },
    { field: "", header: "Number Of Slot" },
    { field: "", header: "Total Class" },
    { field: "", header: "In Campus" },
    { field: "", header: "Online" },
    { field: "", header: "CE - Campus" },
    { field: "", header: "CE - Online" },
    { field: "", header: "CSE - Campus" },
    { field: "", header: "CSE - Online" },
    { field: "", header: "EEE - Campus" },
    { field: "", header: "EEE - Online" },
    { field: "", header: "Bus - Campus" },
    { field: "", header: "Bus - Online" },
    { field: "", header: "Eng - Campus" },
    { field: "", header: "Eng- Online" }
  ]
if (atAGlance.name === "Spring-24") {
  offlineatAGlanceTblData.push(
    { field: "", header: "CSE" },
    { field: "", header: "EEE" },
    { field: "", header: "Business" },
    { field: "", header: "English" },
    { field: "", header: "Capacity Utilized" })
} else {
  offlineatAGlanceTblData.push(
    { field: "", header: "CSE/EEE" },
    { field: "", header: "Business" },
    { field: "", header: "English" },
    { field: "", header: "Capacity Utilized" })
}

//*** This funtion Convart Faculty initial Name to Full Name ***/
  const findFaculty = (name) => {
    let fullName;
    if (name) {
      fullName = facultyDatas.filter((el) => el.initialname === name);
    }
    return (fullName = fullName.map((data) => data.name));
  };

const onClick = (day) =>{
  setFilterSel((prev) => ({ ...prev, "reportType": "main", "day": day }));
}

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
                Dept. Of {tdata.drpartment}
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
  const roomWiseClass = () => {
    const customStyle = (value) =>{
      if (value <= 0) {
        return {backgroundColor:"rgb(84 83 83 / 84%)"}
      }
    } 
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
            <tr style={customStyle(filters(room.roomnum).length)} className={` ${hover && "hover"} ${striped && "striped"}`}>
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
            </tr>
          ))}
      </>
    );
  };

  //*****.. Weekly Class At a Glance Report ..*****//
  const weeklyOfflineAtAGlance = () => {
    const classFilterWDay = (day) => {
      const rutinData = atAGlance.data;
      let data;
      let civil;
      let Eng;
      let ece;
      let cse;
      let eee;
      let bus;
      if (day) {
        if (day === "Total") {
          data = rutinData;
        } else {
          data = rutinData.filter((el) => el.day === day);
        }
      }
      if (data) {
        civil = data.filter((el) => el.drpartment === "Civil");
        Eng = data.filter((el) => el.drpartment === "English");
        if (atAGlance.name === "Spring-24") {
          cse = data.filter((el) => el.drpartment === "CSE");
          eee = data.filter((el) => el.drpartment === "EEE");
        } else {
          ece = data.filter((el) => el.drpartment === "CSE/EEE");
        }
        bus = data.filter((el) => el.drpartment === "Business");
      }
      return { data, civil, Eng, ece, bus,cse,eee };
    };
    const slot = (value, day) => {
      if (day === "Total") {
        let sum = 0;
        // Iterate over each object and add its capacity to the sum
        for (let i = 0; i < atAGlance.timeSlot.length; i++) {
          sum += Number(atAGlance.timeSlot[i].value.length);
        }
        return sum;
      }
      return value;
    };
    return (
      <>
        {atAGlance &&
          atAGlance.timeSlot.map((day) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td  class="text-blue-600 underline underline-offset-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <button onClick={()=> onClick(day.name) }>{day.name}</button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {slot(day.value.length, day.name)}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day.name).data.length}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day.name).civil.length}
              </td>
              {atAGlance.name === "Spring-24" ? (
                <>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {classFilterWDay(day.name).cse.length}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {classFilterWDay(day.name).eee.length}
                  </td>
                </>
              ) : (
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {classFilterWDay(day.name).ece.length}
                </td>
              )}

              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day.name).bus.length}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day.name).Eng.length}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {Math.round(
                  (classFilterWDay(day.name).data.length /
                    (classroom.length * slot(day.value.length, day.name))) *
                    100
                )}{" "}
                %
              </td>
            </tr>
          ))}
      </>
    );
  };

  const weeklyOnlineAtAGlance = () => {
    const days = Array.from(new Set(rutinData.map(item=> item.Day)))
    
    days.push("Total")
  console.log(days);
    const classFilterWDay = (day,online) => {
      const rutindata = rutinData.filter(el=>el.Day === day)

      const dayWiseSlot = Array.from(new Set(rutindata.map(item=> item.TimeSlot)))

      let data;
      let civil;
      let Eng;
      let ece;
      let cse;
      let eee;
      let bus;
      if (day) {
        if (day === "Total") {
          data = rutinData;
        }else {
          data = rutindata.filter((el) => el.Day === day);
        }
      }

      if (online) {

        if (online === "online") {
          if (day === "Total") {
            data = rutinData.filter((el) => el.Room === "Online");
          } else {
            data = rutindata.filter((el) => el.Room === "Online");
          }
        }else if (online === "offline") {
          if (day === "Total") {
            data = rutinData.filter((el) => el.Room !== "Online");
          } else {
            data = rutindata.filter((el) => el.Room !== "Online");
          }
        }
      }
      if (data) {
        civil = data.filter((el) => el.Dept === "CE");
        Eng = data.filter((el) => el.Dept === "ENG");
        if (atAGlance.name === "Spring-24") {
          cse = data.filter((el) => el.Dept === "CSE");
          eee = data.filter((el) => el.Dept === "EEE");
        } else {
          ece = data.filter((el) => el.Dept === "CSE/EEE");
        }
        bus = data.filter((el) => el.Dept === "BUS");
      }
      return { data, civil, Eng, ece, bus,cse,eee };
    };
    const slot = (value, day) => {
      const rutindata = rutinData.filter(el=>el.Day === day)

      const dayWiseSlot = Array.from(new Set(rutindata.map(item=> item.TimeSlot)))
      if (day === "Total") {
        const sum = 73
        
        return sum;
      }
      return dayWiseSlot.length;
    };
    return (
      <>
        {days &&
          days.map((day) => (
            <tr className={` ${hover && "hover"} ${striped && "striped"}`}>
              <td  class="text-blue-600 underline underline-offset-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <button onClick={()=> onClick(day) }>{day}</button>
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {slot(day.length,day)}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day).data.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day,"offline").data.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {classFilterWDay(day,"online").data.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day,"offline").civil.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day,"online").civil.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day,"offline").cse.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day,"online").cse.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day,"offline").eee.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day,"online").eee.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day,"offline").bus.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day,"online").bus.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-rose-600">
                {classFilterWDay(day,"offline").Eng.length}
              </td>
              <td  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                {classFilterWDay(day,"online").Eng.length}
              </td>
            </tr>
          ))}
      </>
    );
  };

  //****.. Component Main Funtion Return ..*****//
  return (
    <div class="flex flex-col w-full">
      <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        {name === "roomWise" && date !== "" &&  <h1 className="text-center text-lg mb-2"> Total Slot : {data2[0]?.value.length}</h1>}
          <div class="overflow-hidden">
            <table class="w-full m-auto">
              {name === "main" && date !== "" && (
                <>
                 <TableHead data={columns}></TableHead>
                </>
                
              )}
              {name === "slotWise" && date !== "" && (
                <TableHead
                  data={[
                    { field: "", header: "Selected Day" },
                    { field: "", header: "Time Slot" },
                    { field: "", header: "Total Class" },
                  ]}
                ></TableHead>
              )}
              {name === "roomWise" && date !== "" && (
                <TableHead
                  data={[
                    { field: "", header: "Selected Day" },
                    { field: "", header: "Room Number" },
                    { field: "", header: "Room Name" },
                    { field: "", header: "Total Class" },
                  ]}
                ></TableHead>
              )}
              {name === "offline" && (
                <TableHead
                  data = {offlineatAGlanceTblData}
                ></TableHead>
              )}
              {name === "online" && (
                <TableHead
                  data = {onlineatAGlanceTblData}
                ></TableHead>
              )}
              {/* <TableBody columns={columns} data={data}/> */}
              <tbody>
                {name === "main" && date !== "" && mainReport()}
                {name === "slotWise" && date !== "" && slotWiseClass()}
                {name === "roomWise" && date !== "" && roomWiseClass()}
                {name === "offline" &&  weeklyOfflineAtAGlance()}
                {name === "online" &&  weeklyOnlineAtAGlance()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RutineTable;
