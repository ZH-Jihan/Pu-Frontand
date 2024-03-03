import React, { useState } from 'react';
import useFatchData from '../../Hooks/useFatchData';
import Table from '../../Utilits/Table/Table';
import { getUserRole } from '../Security/myAuth';

const HostelMember = () => {
    
    const { data: hostelmember,error } = useFatchData("https://pu-server-1.onrender.com/api/v1/hostelmember");
    const [selectedName, setSelectedName] = useState('');
const user = getUserRole()
    
    const detailtableHead = [
        { field: "joinDate", header: "Join Date" },
        { field: "name", header: "Name" },
        { field: "number", header: "Number" },
        { field: "department", header: "Department" },
        { field: "flate", header: "Flat" },
        { field: "room", header: "Room" },
        { field: "seat", header: "Seat" },
        { field: "batch", header: "Batch" },
        { field: "semester", header: "Semester" },
        { field: "id", header: "Id" },

      ];

      //**** Set Department Name To Show Select Button *****//

      const uniqueNames = Array.from(new Set(hostelmember.map(item => item.department)));

    

    const handleSelectChange = (event) => {
        setSelectedName(event.target.value);
    };

    let data;
    if (selectedName) {
        data = hostelmember.filter((el)=> el.department === selectedName)
    } else {
        data = hostelmember
    }

      if (error) {
        return (
            <h1>{error?.response?.data?.error
            }</h1>
        )
      }
    return (
        <div>
            <h1 className='text-2xl pb-4 text-center font-bold'>Women Hostel Member</h1>
            <div class="form-control lg:ml-16 lg:w-1/6 flex flex-col mb-3">
            <label class="font-semibold text-gray-600 py-2">Select Department</label>
            <select class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" value={selectedName} onChange={handleSelectChange}>
                <option value="">--- Select ---</option>
                {uniqueNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
            </div>
            <Table 
            columns={detailtableHead} 
            data={data} 
            funtion={['admin','editor'].includes(user.role)  && true} />
        </div>
    );
};

export default HostelMember;