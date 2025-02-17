import React from 'react';
import DeleteCustomAxios from '../../../Hooks/DeleteCustomAxios';
import useFatchData from '../../../Hooks/useFatchData';
import Table from '../../../Utilits/Table/Table';

const ClassRoomView = () => {
  const {data:classRoom} = useFatchData('/classroom');
  const classRooms = classRoom.data
  const totalCapacity =()=>{
    let sum = 0;

    // Iterate over each object and add its capacity to the sum
    for (let i = 0; i < classRooms?.length; i++) {
      sum += Number(classRooms[i].capacity);
    }
    return sum;
  }
  const tableHead = [
    { field: "roomnum", header: "" },
    { field: "capacity", header: "" },
    { field: "roominitial", header: "" },
    { field: "roomname", header: "" }
    
    
  ];
  const hendelRoomDelete = async (id) => {
        const response = await DeleteCustomAxios(`/classroom/${id}`)
      
        window.location.reload();
  }
    return (
        <div className="mx-2">
      <p className='text-center font-bold text-3xl mt-8 pb-4'><u>Class Room List</u></p>
      <p className='pb-8 text-xl text-center'>Total Room : <span className='text-red-500 font-bold'>{classRooms?.length}</span> <span className='pl-8'>Total Capacity : <span className='text-red-500 font-bold'>{totalCapacity()}</span></span></p>
      <Table columns={tableHead} data={classRooms} edit={true} editpathname={"editClassRoom"} deleted={true} deletePath={hendelRoomDelete}/>
    </div>
    );
};

export default ClassRoomView;