import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Orders = () => {
  const [orders, setOrders] = useState({});
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  return (
    <div>
      <h2>This is order page for {orders.length}</h2>
    </div>
  );
};

export default Orders;
