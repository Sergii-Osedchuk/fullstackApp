import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

function ExploreMenu({ category, setCategory }) {
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of diches. Our mission is to satisfy your food desire!</p>
      <ul className="explore-menu-list">
        {menu_list.map((item, i) => {
          return (
            <li onClick={() => setCategory(prev => prev === item.menu_name ? 'All': item.menu_name)} key={i} className='explore-menu-list-item'>
              <img className={ category === item.menu_name ? 'active' : ''} src={item.menu_image} alt='picture of dishes' />
              <p>{ item.menu_name }</p>
            </li>
          )
        })}
      </ul>
      <hr />
    </div>
  )
}

export default ExploreMenu