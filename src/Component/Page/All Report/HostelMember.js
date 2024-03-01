import React from 'react';
import useFatchData from '../../Hooks/useFatchData';
import Table from '../../Utilits/Table/Table';

const HostelMember = () => {
    
    const { data: hostelmember,error } = useFatchData("https://pu-server-1.onrender.com/api/v1/hostelmember");

    console.log(error);
    const detailtableHead = [
        { field: "joinDate", header: "Join Date" },
        { field: "name", header: "Name" },
        { field: "id", header: "Id" },
        { field: "number", header: "Number" },
        { field: "department", header: "Department" },
        { field: "flat", header: "Flat" },
        { field: "room", header: "Room" },
        { field: "seat", header: "Seat" },
        { field: "batch", header: "Batch" },
        { field: "semester", header: "Semester" },
        
      ];
      if (error) {
        return (
            <h1>{error?.response?.data?.error
            }</h1>
        )
      }
    return (
        <div>
            <h1 className='text-2xl pb-4 text-center font-bold'>Women Hostel Member</h1>
            <Table columns={detailtableHead} data={hostelmember} />
        </div>
    );
};

export default HostelMember;