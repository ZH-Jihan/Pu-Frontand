import React from 'react';
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
    return (
        <div>
            <h1 className="text-center font-bold text-3xl my-4">
            PU - Per Credit Fees
      </h1>

            <Table columns={tableHead} data={tutionfeeData}/>
        </div>
    );
};

export default TutionFee;