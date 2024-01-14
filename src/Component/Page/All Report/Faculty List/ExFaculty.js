import React from 'react';
import useFatchData from '../../../Hooks/useFatchData';

const ExFaculty = () => {
    const { data: facultys, loading } = useFatchData(
        "https://pu-server-1.onrender.com/faculty"
      );
    return (
        <div>
            
        </div>
    );
};

export default ExFaculty;