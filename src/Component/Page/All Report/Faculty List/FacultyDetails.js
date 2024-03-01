import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFatchData from '../../../Hooks/useFatchData';

const FacultyDetails = () => {
    const { id} = useParams();
  // const navigate = useNavigate();
  const {data} = useFatchData(`https://pu-server-1.onrender.com/api/v1/faculty/${id}`);
  const product = data;
  const navigate = useNavigate()
  return (
    <div class="py-8 bg-base-200">
      <div class="hero  bg-base-200">
        
      <div class="hero-content flex-col ">
      <button className='btn px-12 py-4 text-white  ' onClick={()=>navigate(-1)}>Back</button>
        <div>
          <h1 class="text-5xl font-bold pb-5">{product.name}- ({product.initialname})</h1>
          <p class="text-xl py-6 pb-2">{product.description}</p>
          <p className="text-xl ">ID :- {product.id}</p>
          <p className="text-xl ">Designation :- {product.designation}</p>
          <p className="text-xl ">Dipartment :- {product.dipartment}</p>
          <p className="text-xl ">Email :- {product.email}</p>
          <p className="text-xl ">Phone :- 0{product.pnumber}</p>
          <p className="text-xl ">University :- {product.university}</p>
          <p className="text-xl ">Date Of Join :- {product.doj}</p>
          <p className="text-xl ">Date Of Birth :- {product.dob}</p>
          <p className="text-xl ">Type Of Job :- {product.jobtype}</p>
          <p className="text-xl ">Gender :- {product.sex}</p>
          <p className="text-xl ">Status :-  {product.status}</p>
          {/* <label for="booking-modal" onClick={()=>{setOrder(product)}} class="btn btn-primary">Order</label> */}
        </div>
      </div>
    </div>
    {/* {order && <Booking product={product} order={order} setOrder={setOrder}></Booking>} */}
    </div>
  );
};

export default FacultyDetails;