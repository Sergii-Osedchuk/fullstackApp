import './List.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function List({url}) {

  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    if (response.data.success) {
      await fetchList();
      toast.success(response.data.message)
    } else {
      toast.error("Error");
    }
  }
    

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item) => {
          return (
            <div key={item.name} className="list-table-format" >
              <img src={`${url}/images/`+item.image} alt="food picture" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default List