import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/bookings">Bookings</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Navbar;
