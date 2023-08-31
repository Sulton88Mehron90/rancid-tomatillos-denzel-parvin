import './Navbar.css'
import Tomatillo from '../../images/Tomatillo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <NavLink to="/" style={{textDecoration:'none'}}>
        <h1 className="nav-title">Rancid Tomatillos</h1>
        <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" />
        </NavLink>
        {/* <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" /> */}
        <span className="welcome-note">Welcome Friend!</span>
      </div>
    </nav>
  );
}

export default Navbar;

