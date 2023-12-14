import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Order from '../../Hooks/order';
import Payment from '../Modal/Payment';

const OrderTabel = () => {
    const [orders , setOrders] = Order()
	const [payment , setPayment] = useState(null)
	const navigate = useNavigate()
	const DeleteBtn = (id) => {
		const proceed = window.confirm("Are you sure you want to delete");
		if (proceed) {
		  const url = `https://pu-server-1.onrender.com/order/${id}`;
		  fetch(url, {
			method: "DELETE",
		  })
			.then((res) => res.json())
			.then((data) => {
			  
			  const remaing = orders.filter((item) => item._id !== id);
			  setOrders(remaing);
			});
	}}

    return (
<table class="min-w-full border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-black font-bold md:border md:border-grey-500 text-center block md:table-cell text-2xl">Room Number</th>
				<th class="bg-gray-600 p-2 text-black font-bold md:border md:border-grey-500 text-center block md:table-cell">Course Name</th>
				<th class="bg-gray-600 p-2 text-black font-bold md:border md:border-grey-500 text-center block md:table-cell">Department</th>
				<th class="bg-gray-600 p-2 text-black font-bold md:border md:border-grey-500 text-center block md:table-cell">Teacher Name</th>
				<th class="bg-gray-600 p-2 text-black font-bold md:border md:border-grey-500 text-center block md:table-cell">Start Time</th>
				<th class="bg-gray-600 p-2 text-black font-bold md:border md:border-grey-500 text-center block md:table-cell">End Time</th>
			</tr>
		</thead>
        <tbody class="block md:table-row-group">
		{
            orders.map((order) =>(
			
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td class="p-0 w-52 md:border md:border-grey-500 text-left block md:table-cell"><img src={order.img} alt='' class=""/></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{order.productName}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Product Quantity</span>{order.orderQuantity}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>{order.customarName}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>{order.customarmail}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><strong>€</strong> <span class="inline-block w-1/3 md:hidden font-bold">Price</span>{order.price}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>{order.phone}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<Link to={`/dashbord/payment/${order._id}`}><button class=" bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-2 border bg-green-500 rounded mx-2">Pay</button></Link>
					<button onClick={()=>{DeleteBtn(order._id)}} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ">Delete</button>
				</td>
			</tr>)
            )
        }
        </tbody>
		{payment && <Payment paymentdetail={payment}></Payment>}
	</table>
    );
};

export default OrderTabel;