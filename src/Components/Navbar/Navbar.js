import './Navbar.css'
import Tomatillo from '../../images/Tomatillo.png'
import { NavLink } from 'react-router-dom';

const Navbar = ({search, searchFilter}) => {
  return (
    <nav>
      <div className="nav-content">
        <NavLink to="/" style={{textDecoration:'none'}}>
        <h1 className="nav-title">Rancid Tomatillos</h1>
        </NavLink>
        <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" />
        <form>
          <input 
          id="search-input"
          type="text"
          placeholder="Search for movies..."
          name={search}
          value={search}
          onChange={searchFilter}
          />
        </form>
        <span className="welcome-note">Welcome Friend!</span>
      </div>
    </nav>
  );
}

export default Navbar;

