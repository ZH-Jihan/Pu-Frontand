import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../Hooks/useFaculty";
import EditFaculty from "../Modal/EditFaculty";

const ManageProducts = () => {
  const { id} = useParams();
  const [products, setProduct] = useProduct(id);
  const [editfaculty,setEditfaculty] = useState(null);
 console.log(editfaculty);
  const DeleteBtn = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://pu-server-1.onrender.com/faculty/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("sucess", data);
          const remaing = products.filter((item) => item._id !== id);
          setProduct(remaing);
        });
    }
  };
  const editFuclty = () => {};

  return (
    <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center">
      {products.map((product, index) => (
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={product.furlimg} alt={product.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <h2 className="">ID :- {product.id}</h2>
            <h2 className="">Designation :- {product.designation}</h2>
            <h2 className="">Department :- {product.dipartment}</h2>
            <h2 className="">Phone :- {product.pnumber}</h2>
            <h2 className="">Date Of Join :- {product.doj}</h2>
            <p>Remark :- {product.description}</p>
            <div className="flex g-8">
              <div className="card-actions justify-center pt-4 pr-4">
                <label
                  onClick={()=>setEditfaculty(product)}
                  htmlFor="my-modal"
                  className="btn bg-stone-500 text-white w-full"
                >
                  Edit Faculty
                </label>
              </div>
              <div className="card-actions justify-center pt-4 pl-4">
                <button
                  onClick={() => DeleteBtn(product._id)}
                  className="btn bg-red-500 text-white w-full"
                >
                  Delete Faculty
                </button>
              </div>
            </div>
          </div>
          {editfaculty && <EditFaculty key={editfaculty._id} editFuclty={editfaculty} setEditfaculty={setEditfaculty}></EditFaculty>}
        </div>
      ))}
      {/* {editfaculty && <EditFaculty faculty={product} editFuclty={editfaculty} setEditfaculty={setEditfaculty}></EditFaculty>} */}
    </div>
  );
};

export default ManageProducts;
