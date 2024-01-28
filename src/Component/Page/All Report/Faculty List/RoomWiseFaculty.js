import React, { useState } from 'react';
import useFatchData from '../../../Hooks/useFatchData';
import Button from '../../../Utilits/Button';
import Table from '../../../Utilits/Table/Table';
import Loading from '../../Sheared Page/Loading';

const RoomWiseFaculty = () => {
    const { data: faculty, loading } = useFatchData(
        "https://pu-server-1.onrender.com/faculty"
      );
    const [selecteditem, setSelecteditem] = useState({
        roomnum: "",
      });
      const onChange = (e) => {
        const { name, value } = e.target;
        setSelecteditem((prev) => ({ ...prev, [name]: value }));
      };
      const filterData = (datas=[]) =>{
        let data = datas;
        if (selecteditem.roomnum) {
            data = data.filter((el) => el.roomnum === selecteditem.roomnum);
          }else {
            data = data.filter((el) => el.roomnum !== "");
          }
          return data;
      }
    const roomBtn = {
        btnHade: "Room Number",
        btnvalue: setSelecteditem.roomnum,
        function: { onChange },
        btnName: "roomnum",
        option: [
          { value: "", name: "--Select Room Number--" },
          { value: "201-A", name: "201- A" },
          { value: "201-B", name: "201- B" },
          { value: "201-C", name: "201- C" },
          { value: "312-A", name: "312- A" },
          { value: "312-B", name: "312- B" },
          { value: "317", name: "317" },
          { value: "412-A", name: "412- A" },
          { value: "412-B", name: "412- B" },
          { value: "417", name: "417" },
          { value: "423", name: "423" },
          { value: "506", name: "506" },
          { value: "512-A", name: "512- A" },
          { value: "512-B", name: "512- B" },
          { value: "517", name: "517" },
          { value: "523", name: "523" },
          { value: "600", name: "600" },
          { value: "602", name: "602" },
          { value: "612", name: "612" },
          { value: "617-A", name: "617- A" },
          { value: "617-B", name: "617- B" }
        ],
      };

      const tableHead = [
        { field: "roomnum", header: "Room Number" },
        { field: "name", header: "Name" },
        { field: "designation", header: "Designation" },
        { field: "dipartment", header: "Department" },
      ];
      if (loading) {
        <Loading/>
      }
    return (
        <div>
            <h1 className='text-center font-extrabold text-2xl underline underline-offset-1'>Room Number Wise Faculty</h1>
            <div className='grid lg:grid-cols-4'><Button details={roomBtn}/></div>
            <Table columns={tableHead} data={filterData(faculty)}/>
        </div>
    );
};

export default RoomWiseFaculty;