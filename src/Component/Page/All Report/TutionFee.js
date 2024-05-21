import React, { useState } from 'react';
import useLocalDataFatch from '../../Hooks/localDataFatch';
import Table from '../../Utilits/Table/Table';

const TutionFee = () => {
    const { data: tutionfeeData } = useLocalDataFatch("tutionFee.json");
    const tableHead = [
        { field: "department", header: "Program" },
        { field: "2023", header: "" },
        { field: "20221", header: "2022< Sep." },
        { field: "20222", header: "2022> Sep." },
        { field: "2021", header: "" },
        { field: "2020", header: "" },
        { field: "2019", header: "" },
        { field: "2018", header: "" },
        { field: "2016", header: "" },
        { field: "2015", header: "" },
        { field: "2014", header: "" },
        { field: "2013", header: "" },
        { field: "2012", header: "" },
        { field: "2011", header: "" },
        { field: "2010", header: "" },
        { field: "2009", header: "" },
        { field: "2008", header: "" },
        { field: "2007", header: "" },
      ];
      const [selectedName, setSelectedName] = useState('');
    const uniqueNames = Array.from(new Set(tutionfeeData.map(item => item.department)));
    const handleSelectChange = (event) => {
        setSelectedName(event.target.value);
    };
    let data;
    if (selectedName) {
        data = tutionfeeData.filter(item => item.department === selectedName);
    } else {
        data = tutionfeeData
    }
    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-4">
            PU - Per Credit Fees
      </h1>
      <div class="form-control lg:ml-16 lg:w-1/6 flex flex-col mb-3">
            <label class="font-semibold text-gray-600 py-2">Select Program</label>
            <select class="appearance-none text-base block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" value={selectedName} onChange={handleSelectChange}>
                <option value="">--- Select ---</option>
                {uniqueNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
            </div>
            <Table columns={tableHead} data={data}/>
        </div>
    );
};

export default TutionFee;