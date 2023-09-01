import './Navbar.css'
import Tomatillo from '../../images/Tomatillo.png'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({search, searchFilter, searchVisible}) => {
  if(searchVisible){
    return (
      <nav>
        <div className="nav-content">
          <NavLink to="/" style={{textDecoration:'none'}}>
            <h1 className="nav-title">Rancid Tomatillos</h1>
            <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" />
          </NavLink>
          <form>
            <input 
            id="search-input"
            className="search-input"
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
  } else {
    return (
      <nav>
        <div className="nav-content">
          <NavLink to="/" style={{textDecoration:'none'}}>
            <h1 className="nav-title">Rancid Tomatillos</h1>
            <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" />
          </NavLink>
          <span className="welcome-note">Welcome Friend!</span>
        </div>
      </nav>
    );
  }

}

export default Navbar;

Navbar.propTypes = {
  search: PropTypes.string.isRequired,
  searchFilter: PropTypes.func.isRequired,
  searchVisible: PropTypes.bool.isRequired
}