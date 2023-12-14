import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFatchData from "../../../Hooks/useFatchData";

const TClassDetail = () => {
  const {data:routindetail} = useFatchData('https://pu-server-1.onrender.com/routin');
  const navigate = useNavigate()
  const { id } = useParams();
  const data = routindetail.filter((el) => el.teacher === id);
  const dayName = (num) => {
    if (num === "0") {
      return <>Sunday</>;
    }
    if (num === "1") {
      return <>Monday</>;
    }
    if (num === "2") {
      return <>Tuesday</>;
    }
    if (num === "3") {
      return <>Wednesday</>;
    }
    if (num === "4") {
      return <>Thursday</>;
    }
    if (num === "5") {
      return <>Friday</>;
    }
    if (num === "6") {
      return <>Saturday</>;
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-8">
        Faculty Class Details In This Week
      </h1>
      <button className="px-12 py-2 rounded-3xl ml-40 mb-4  bg-red-500 text-3xl font-bold" onClick={()=>{navigate(-1)}}>Back</button>
      <table class="m-auto lg:w-3/4 border-collapse block md:table ">
        <thead style={{ color: "#042488" }} class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Faculty Name
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Course Name
            </th>
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Class Room
            </th>
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Day
            </th>
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Time
            </th>
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          {data.map((faculty) => (
            <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Faculty Name
                </span>
                {faculty.teacher}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Course
                </span>
                {faculty.course}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">
                  Class Room
                </span>
                {faculty.croom}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">Day</span>
                {dayName(faculty.day)}
              </td>
              <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span class="inline-block w-1/3 md:hidden font-bold">Day</span>
                {faculty.tslot}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TClassDetail;
