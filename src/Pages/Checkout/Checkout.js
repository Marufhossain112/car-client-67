import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    
  };

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="text-center mb-5">
      <h2 className="text-4xl my-5">You have ordered : {data.title}</h2>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        <textarea
          className="textarea textarea-bordered h-28 my-5 w-full"
          placeholder="Enter your message here..."
        ></textarea>
        <input className="btn" type="Submit" value="Submit" />
      </form>
    </div>
  );
};

export default Checkout;
