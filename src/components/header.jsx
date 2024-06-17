import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsFillBagHeartFill } from "react-icons/bs";
import { LuBaggageClaim } from "react-icons/lu";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <label htmlFor="search-bar" className="m-2">
            <FaSearch size={24} />
          </label>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
            id="search-bar"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <span>
              <CgProfile />
            </span>
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <span>
              <BsFillBagHeartFill />
            </span>
            <span className="action_name">Wishlist</span>
          </div>

          <Link to="/bag" className="action_container">
            <span>
              <LuBaggageClaim />
            </span>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">0</span>
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
