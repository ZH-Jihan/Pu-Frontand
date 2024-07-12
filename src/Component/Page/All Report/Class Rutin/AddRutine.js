import moment from 'moment/moment';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const AddRutine = () => {
    const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setError('No file selected');
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Extract headers and format them
        const headers = formatHeaders(XLSX.utils.sheet_to_json(worksheet, { header: 1 })[0]);

        // Convert the worksheet to JSON with formatted headers
        const json = XLSX.utils.sheet_to_json(worksheet, {
          header: headers,
          range: 1 // Start reading data from the second row
        });

        // Format time columns and sort the data
        const formattedJson = formatData(json);

        setJsonData(formattedJson);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError('Error reading Excel file');
      }
    };

    reader.onerror = () => {
      setError('Error reading file');
    };

    reader.readAsArrayBuffer(file);
  };

  const formatHeaders = (headers) => {
    return headers.map(header => header.replace(/\s+/g, ''));
  };

  const isExcelTimeValue = (value) => {
    // Check if the value is a floating-point number that represents time in Excel
    return typeof value === 'number' && value < 1;
  };

  const formatData = (data) => {
    // First, format the time values
    const formattedData = data.map(row => {
      const formattedRow = { ...row };
      Object.keys(row).forEach(key => {
        const value = row[key];
        if (isExcelTimeValue(value)) {
          const date = XLSX.SSF.parse_date_code(value);
          const timeString = moment({ hour: date.H, minute: date.M, second: date.S }).format('hh:mm A');
          formattedRow[key] = timeString;
        }

        //Change day name
        const dayarray = [
            { value:"M",name:"Monday"},
            { value:"F",name:"Friday"},
            { value:"A",name:"Saturday"},
            { value:"S",name:"Sunday"},
            { value:"R",name:"Thursday"},
            { value:"T",name:"Tuesday"},
            { value:"W",name:"Wednesday"}
        ]
        const match = dayarray.find(el=>el.value === value)
        if (match) {
          formattedRow[key] = match.name;
        }
        // Marge Departement Name
        const departmet = [
            { value:"BBA",name:"BUS"},
            { value:"MBA",name:"BUS"},
            { value:"EMBA",name:"BUS"},
            { value:"ECO",name:"BUS"},
            { value:"ENG",name:"ENG"},
            { value:"ELT",name:"ENG"}
        ]
        const Dmatch = departmet.find(el=>el.value === value)
        if (Dmatch) {
          formattedRow[key] = Dmatch.name;
        }
      });
      if (formattedRow.starttime && formattedRow.endtime ) {
        const timeslot = `${formattedRow.starttime} - ${formattedRow.endtime}`;
        // const newformattedRow = {...formattedRow, TimeSlot: timeslot}
        delete formattedRow.starttime;
        delete formattedRow.endtime;
        formattedRow["TimeSlot"] = timeslot;
      }
      return formattedRow
    });


    // Sort the data first by room, then by start time
    formattedData.sort((a, b) => {
      const roomA = a.room
      const roomB = b.room
      if (roomA < roomB) return -1;
      if (roomA > roomB) return 1;

      const timeA = moment(a.starttime, 'hh:mm A');
      const timeB = moment(b.starttime, 'hh:mm A');
      return timeA - timeB;
    });

    return formattedData;
  };

  const handleSaveToDatabase = () => {
    
  };

  return (
    <div className="App">
      <h1>Excel to JSON Converter</h1>
      <input type="file" onChange={handleFileUpload} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSaveToDatabase} disabled={!jsonData}>Save to Database</button>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default AddRutine;