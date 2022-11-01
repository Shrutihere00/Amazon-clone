import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";
const promise = loadStripe(
  "pk_test_51Lu6dZSIETvuDNVWHC7E8o0yqU5QCgIosJGb9ttbiQrD3opIOR6FMxl5qLkGzbl8lmM5HHv4zehhM6HBRbPHOyF100WldwcN54"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);
      if (authUser) {
        //The User just logged or was logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //the user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []); //-->only runs once when the app component runs

  return (
    //BEM Naming convention
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/orders" element={<Order />} />
        <Route
          exact
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
// pk_test_51Lu6dZSIETvuDNVWHC7E8o0yqU5QCgIosJGb9ttbiQrD3opIOR6FMxl5qLkGzbl8lmM5HHv4zehhM6HBRbPHOyF100WldwcN54
export default App;
