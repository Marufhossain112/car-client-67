import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value} `;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    const order = {
      service: _id,
      price,
      customer: name,
      email,
      phone,
      message,
      product: title,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Data submitted successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="text-center mb-5">
      <h2 className="text-4xl my-5">You have ordered : {data.title}</h2>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Email"
            defaultValue={user?.email}
            name="email"
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <textarea
          className="textarea textarea-bordered h-28 my-5 w-full"
          name="message"
          placeholder="Enter your message here..."
        ></textarea>
        <input className="btn" type="Submit" value="Checkout" />
      </form>
    </div>
  );
};

export default Checkout;
