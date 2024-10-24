import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 p-4 text-white">
    <nav>
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/favorites" className="mr-4">Favorites</Link>
    </nav>
  </header>
);
export default Header;