import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>
          Order your favorite food here
        </h2>
        <p>You can choose from a diverse menu delicious food</p>
        <button><a href="#explore-menu">View Menu</a></button>
      </div>
    </div>
  )
}

export default Header;
