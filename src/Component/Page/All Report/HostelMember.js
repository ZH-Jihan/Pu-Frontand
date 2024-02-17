import React from 'react';
import useFatchData from '../../Hooks/useFatchData';
import Table from '../../Utilits/Table/Table';

const HostelMember = () => {
    
    const { data: hostelmember } = useFatchData("https://pu-server-1.onrender.com/hostelmember");

    
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
    return (
        <div>
            <h1 className='text-2xl pb-4 text-center font-bold'>Hostel Member List</h1>
            <Table columns={detailtableHead} data={hostelmember} />
        </div>
    );
};

export default HostelMember;