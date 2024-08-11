import './Orders.css';
import axios from "axios";
import { useEffect, useCallback } from 'react';
import { useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets.js";

function Orders({url}) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = useCallback(async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    }
    else {
      toast.error("Error")
    }
  },[url])

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order._id} className="order-item">
            <img src={assets.parcel_icon} alt="parcel icon" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  }
                  else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders