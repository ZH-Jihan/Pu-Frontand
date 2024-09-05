import React from 'react';
import useFatchData from '../../../Hooks/useFatchData';
import Table from '../../../Utilits/Table/Table';

const ViewAlumni = () => {
    const {data:allAlumni} = useFatchData('/alumni');
    console.log(allAlumni);
    const tableHead = [
        { field: "country", header: "" },
        { field: "name", header: "" },
        { field: "department", header: "" },
        { field: "idNo", header: "" }
        
        
      ];
    return (
        <div className="mx-2">
      <p className='text-center font-bold text-3xl mt-8 pb-4'><u>Class Room List</u></p>
      <p className='pb-8 text-xl text-center'>Total Room : <span className='text-red-500 font-bold'>{allAlumni?.length}</span></p>
      <Table columns={tableHead} data={allAlumni} edit={true} editpathname={"editAlumni"}/>
    </div>
    );
};

export default ViewAlumni;