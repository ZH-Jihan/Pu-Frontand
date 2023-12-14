import React from 'react';
import useFatchData from '../../Hooks/useFatchData';

const ClassRoomView = () => {
  const {data:classRooms} = useFatchData('https://pu-server-1.onrender.com/classroom');
  const totalCapacity =()=>{
    let sum = 0;

    // Iterate over each object and add its capacity to the sum
    for (let i = 0; i < classRooms.length; i++) {
      sum += Number(classRooms[i].capacity);
    }
    return sum;
  }
    return (
        <div className="mx-2">
      <p className='text-center font-bold text-3xl mt-8 pb-4'><u>Class Room List</u></p>
      <p className='pb-8 text-xl text-center'>Total Room : <span className='text-red-500 font-bold'>{classRooms.length}</span> <span className='pl-8'>Total Capacity : <span className='text-red-500 font-bold'>{totalCapacity()}</span></span></p>
      <table class="min-w-full border-collapse block md:table">
        <thead style={{color:'#042488'}} class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-gray-600 p-2  font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Room Number
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Room Name
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Initial Name
            </th>
            <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Room Capacity
            </th>
            {/* {
              admin && (
                <th class="bg-gray-600 p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
              )
            } */}
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          { 
            classRooms.map((classroom) =>(
                <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                      Room Number
                    </span>
                    {classroom.roomnum}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">Class Room Name</span>
                    {classroom.roomname}
                  </td>
                  
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">Room Initial</span>
                    {classroom.roominitial}
                  </td>
                  <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">Room Capacity</span>
                    {classroom.capacity}
                  </td>
                  {/* {
                    admin && (
                      <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span class="inline-block w-1/3 md:hidden font-bold mr-2">
                      Actions
                    </span>
                    <button class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
                      Edit
                    </button>
                    <button class="ml-8 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                      Delete
                    </button>
                  </td>
                    )
                  } */}
                </tr>
                  ))
                }
          
        </tbody>
      </table>
    </div>
    );
};

export default ClassRoomView;