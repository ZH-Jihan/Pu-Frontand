import React from 'react';
import useFatchData from '../../Hooks/useFatchData';

const HostelMember = () => {
    const { data: totalReg } = useFatchData("allregStudent.json");

    const student = totalReg.find((el)=> el.ar === "232224")
    console.log(student);
    return (
        <div>
            <h1 className='text-bold text-center'>Hoster Member List</h1>
        </div>
    );
};

export default HostelMember;