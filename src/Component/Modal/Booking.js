import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';

const Booking = ({product,order,setOrder}) => {
    const [user] = useAuthState(auth)
    const {name,_id,price,img} = product;
    
    const handleBooking = event => {
        event.preventDefault();
        const orderQuantity=event.target.orderQuantity?.value;
        if (parseInt(product.Minorder) > orderQuantity) {
            toast.error(`Please Minimum products order : ${product.Minorder}`);
          } else if (parseInt(product.quantity) < orderQuantity) {
            toast.error(`Available Stock Products  : ${product.quantity}`);
          }else{
            const booking = {
                productId: _id,
                img : img,
                productName: name,
                price : orderQuantity * price,
                customarmail: user.email,
                customarName: user.displayName,
                phone: event.target.phone.value,
                orderQuantity: orderQuantity,
            }
    
            fetch('https://pu-server-1.onrender.com/api/v1/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                   
                    if (data.insertedId) {
                        toast.success("Your Order Completed");
                      }
                });
                setOrder(null)
          }
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="pname"  disabled value={`Product Name : ${name}`} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="peice"  disabled value={`Product Price : € ${price}`} className="input input-bordered w-full max-w-xs" />
                        <input
                      type="number"
                      name="orderQuantity"
                      placeholder="Order Quantity"
                      class="input input-bordered w-full max-w-xs"
                    />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required/>
                        <input value="Submit" for='booking-modal' type="submit" className="btn btn-secondary w-full max-w-xs" ></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;