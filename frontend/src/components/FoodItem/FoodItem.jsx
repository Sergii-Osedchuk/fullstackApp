import './FoodItem.css';
import { useContext } from 'react';
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

function FoodItem({ id, name, price, description, image }) {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  console.log(cartItems)

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt='' />
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='icon white' /> :
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='icon red' />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='icon green' />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts } />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem