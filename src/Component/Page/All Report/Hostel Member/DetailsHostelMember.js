import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFatchData from '../../../Hooks/useFatchData';

const DetailsHostelMember = () => {
    const { id} = useParams();
    const navigate = useNavigate();
    const {data} = useFatchData(`/hostelmember/${id}`);
    let member
    if (data.status === "Success") {
        member = data.data[0]
    }
    return (
        <div class="py-8 bg-base-200">
      <div class="hero  bg-base-200">
        
      <div class="hero-content flex-col ">
      <button className='btn px-12 py-4 text-white  ' onClick={()=>navigate(-1)}>Back</button>
        <div>
          <h1 class="text-5xl font-bold pb-5">{member?.name}</h1>
          <p className="text-xl ">Id_ : {member?.id}</p>
          <p className="text-xl ">Department_ : {member?.department}</p>
          <p className="text-xl ">Semester_ : {member?.semester}</p>
          <p className="text-xl ">Batch_ : {member?.batch}</p>

          <p className="text-xl ">Number_ : {member?.number}</p>
          <p className="text-xl ">JoinDate_ : {member?.joinDate}</p>
          <p className="text-xl ">Flate_ : {member?.flate}</p>
          <p className="text-xl ">Room_ : {member?.room}</p>
          <p className="text-xl ">Seat_ : {member?.seat}</p>
          <p className="text-xl ">Local Guardian_ : {member?.localguardian}</p>
          <p className="text-xl ">Local Guardian Number_ : {member?.localguardiannumber}</p>
          <p className="text-xl ">Father Name_ : {member?.father}</p>
          <p className="text-xl ">Father Number_ : {member?.fathernumber}</p>
          <p className="text-xl ">Mother Name_ : {member?.mother}</p>
          <p className="text-xl ">Mother Number_ : {member?.mothernumber}</p>
        </div>
      </div>
    </div>
    {/* {order && <Booking product={product} order={order} setOrder={setOrder}></Booking>} */}
    </div>
    );
};

export default DetailsHostelMember;