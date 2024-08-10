import "./MyOrders.css";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { StoreContext } from '../../context/StoreContext.jsx';
import { assets } from "../../assets/assets.js";

function MyOrders() {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order) => {
          return (
            <div key={order._id} className="my-orders-order">
              <img src={assets.parcel_icon} alt="parcel icon" />
              <p>{order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ","
                }
              })}</p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span>&#x25cf;</span><b>{order.status}</b></p>
              <button>Track order</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default MyOrders