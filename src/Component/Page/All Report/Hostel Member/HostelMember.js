import React, { useState } from 'react';
import useFatchData from '../../../Hooks/useFatchData';
import Table from '../../../Utilits/Table/Table';
import { getUserRole } from '../../Security/myAuth';

const HostelMember = () => {
    
    const { data: hostelmember,error } = useFatchData("/hostelmember");
    const [selectedName, setSelectedName] = useState('');
const user = getUserRole()
    
    const detailtableHead = [
        
        { field: "name", header: "Name" },
        { field: "number", header: "Number" },
        { field: "flate", header: "Flat" },
        { field: "room", header: "Room" },
        { field: "seat", header: "Seat" },
        { field: "joinDate", header: "Join Date" },
        { field: "department", header: "Depa." },

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
      const counteMemberDepWise = (name) =>{
        let data;
        if (name) {
            data = hostelmember.filter((el)=> el.department === name)
        }
        return data?.length
      }
    return (
        <div>
            <h1 className='text-2xl pb-4 text-center font-bold'>Women Hostel Member</h1>
            <h1 className='text-lg pb-2 text-center font-bold'>Total : {hostelmember?.length}</h1>
            <h2 className='lg:w-1/4 m-auto text-center font-bold grid grid-cols-4'>
                {
                uniqueNames.map((name)=>(
                    <span>{`${name} : ${counteMemberDepWise(name)} `}</span>
                ))
                }</h2>
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
            details={true}
            edit={true}
            editpathname={"edithostelmember"}
            detailPath={"datailshosMember"}
            />
        </div>
    );
};

export default HostelMember;