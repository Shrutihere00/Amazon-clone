import { useEffect, useState } from "react";
import { db } from "./firebase";
import Header from "./Header";
import "./order.css";
import Order2 from "./Order2.jsx";
import { useStateValue } from "./StateProvider";

const Order = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.id)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders__order">
          {orders?.map((order) => (
            <Order2 order={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
