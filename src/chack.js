// import React from 'react';
// import { useAuthState } from "react-firebase-hooks/auth";
// import toast from 'react-hot-toast';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import useProductDetail from './Component/Hooks/useProductDetail';
// import auth from './firebase.init';

// const Order = () => {
//     const {id} = useParams()
//     const [product, setProduct] = useProductDetail(id);
  
// const [user] = useAuthState(auth)
// const navigate = useNavigate();
// const location = useLocation();
// let from = location.state?.from?.pathname || "/services";


// const handleOrder = (event) => {
//   event.preventDefault();
//   const img = product.img;
//   const orderQuantity=event.target.orderQuantity?.value
//   console.log(orderQuantity)
//   if (product.productdetail.Minorder > orderQuantity) {
//     toast.error(`Please Minimum products order : ${product.minimumqQantity}`);
//   } else if (product.availableQquantity < orderQuantity) {

//     toast.error(`Available Stock Products  : ${product.availableQquantity}`);

//   } else {
//     const order = {
//       img:img,
//       email: user.email,
//       service: product.name,
//       id: id,
//       address: event.target.address?.value,
//       phone: event.target.phone?.value,
//       orderQuantity: orderQuantity,
//     };

//     console.log(order);
//     fetch("https://pu-server-1.onrender.com/order", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },

//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           toast.success("Your Order Completed");
//         }
//         navigate(from, { replace: true });
//         event.target.reset();
//       });
//   }
  

// }

//     return (
//       <form onSubmit={handleOrder}>
//         <div className="container mx-auto ">
//           <div class="hero min-h-screen  ">
//             <div class="hero-content flex-col lg:flex-row-reverse ">
//               <div class="text-center lg:text-left lg-shadow">
//                 <img src={product.img} alt="" />
//               </div>
//               <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent ">
//                 <div class="card-body">
//                   <div class="form-control">
//                     <label class="label">
//                       <span class="label-text text-white">Your Name</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="email"
//                       value={user?.displayName}
//                       class="input input-bordered"
//                       required
//                       readOnly
//                     />
//                   </div>
//                   <div class="form-control">
//                     <label class="label">
//                       <span class="label-text text-white">Your Email</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="email"
//                       value={user?.email}
//                       class="input input-bordered"
//                       required
//                       readOnly
//                     />
//                   </div>
//                   <div class="form-control">
//                     <label class="label">
//                       <span class="label-text text-white">Your product Name</span>
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="email"
//                       value={product.name}
//                       class="input input-bordered"
//                       required
//                       readOnly
//                     />
//                   </div>
//                   <div class="form-control">
//                     <label class="label">
//                       <span class="label-text text-white">
//                         Available Stock : {product.availableQquantity}
//                       </span>
//                     </label>
//                     <input
//                       type="number"
//                       name="orderQuantity"
//                       placeholder="Order Quantity"
//                       class="input input-bordered"
//                     />
//                   </div>
//                   <div class="form-control">
//                     <label class="label">
//                       <span class="label-text text-white">Your Address</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="address"
//                       placeholder="Address"
//                       class="input input-bordered"
//                       required
//                     />
//                   </div>
//                   <div class="form-control">
//                     <label class="label">
//                       <span class="label-text text-white">Your Phone Number</span>
//                     </label>
//                     <input
//                       type="number"
//                       name="phone"
//                       placeholder="Phone Number"
//                       class="input input-bordered"
//                     />
//                   </div>
//                   <div class="form-control mt-6">
//                     <button class="btn btn-primary text-white">order now</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     );
// };

// export default Order;
