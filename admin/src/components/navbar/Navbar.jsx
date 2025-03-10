import './Navbar.css';
import {assets} from '../../assets/assets.js'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo' />
      <img src={assets.profile_image} alt="profile image" className='profile'/>
    </div>
  )
}

export default Navbar