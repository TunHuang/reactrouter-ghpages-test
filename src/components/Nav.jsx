// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      {/* Man kann hier sowohl Link als auch NavLink benutzen. NavLink hat die Extrafunktionalität, dass der aktuelle Link eine Klasse "active" bekommt. Man kann dann über diese Klasse den aktuellen Link stylen */}
      <NavLink className={({isActive}) => isActive ? "hallo home-link" : "home-link"} to="/">
        Home
      </NavLink>
      <NavLink className={({isActive}) => isActive ? "hallo" : ""} to="/child1">Child One</NavLink>
      <NavLink className={({isActive}) => isActive ? "hallo" : ""} to="/child2">Child Two</NavLink>
      <NavLink className={({isActive}) => isActive ? "hallo" : ""} to="/child3">Last Child</NavLink>
    </nav>
  );
};

export default Nav;
