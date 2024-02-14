import React from 'react';
import useFatchData from '../../Hooks/useFatchData';
import Table from '../../Utilits/Table/Table';

const HostelMember = () => {
    const { data: totalReg } = useFatchData("allregStudent.json");
    const { data: hostelmember } = useFatchData("https://pu-server-1.onrender.com/hostelmember");

    const student = totalReg.find((el)=> el.ar === "232224")
    console.log(student);
    const detailtableHead = [
        { field: "joinDate", header: "Join Date" },
        { field: "name", header: "Name" },
        { field: "id", header: "Id" },
        { field: "number", header: "Number" },
        { field: "department", header: "Department" },
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