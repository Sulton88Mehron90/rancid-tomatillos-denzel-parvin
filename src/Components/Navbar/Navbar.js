import './Navbar.css'
import Tomatillo from '../../images/Tomatillo.png'
import redTomato from '../../images/redTomato.png'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
      <h1 className="nav-title">Rancid Tomatillos</h1>
        <img src={Tomatillo} className="nav-logo" alt="Tomatillo logo" />
        {/* <img src={redTomato} className="nav-logo" alt="Red Tomato logo" /> */}
      </div>
    </nav>
  );
}

export default Navbar;

