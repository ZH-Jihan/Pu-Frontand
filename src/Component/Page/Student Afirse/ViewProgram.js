import React from 'react';
import useFatchData from '../../Hooks/useFatchData';
import Table from '../../Utilits/Table/Table';

const ViewProgram = () => {
    const { data: allprogram,error } = useFatchData("/stdnaffprogram");
    const data = allprogram.programData
    const detailtableHead = [
        
        { field: "programName", header: "Program Name" },
        { field: "roomNumber", header: "Room" },
        { field: "trainerName", header: "Trainer" },
        { field: "present", header: "Student" },
        { field: "costing", header: "Cost" },
        { field: "date", header: "Date" },

      ];
    return (
        <div>
            <Table
            columns={detailtableHead} 
            data={data} 
            />
        </div>
    );
};

export default ViewProgram;