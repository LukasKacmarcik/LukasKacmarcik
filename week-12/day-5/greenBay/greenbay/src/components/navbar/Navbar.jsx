import { Link } from "react-router-dom";
import {
  Navbar as NavbarReactstrap,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import { useSelector } from "react-redux/es/exports";
import styles from "./navbar.module.scss";

function Navbar() {
  const username = useSelector((state) => state.session.username);

  return (
    <NavbarReactstrap className={styles.navbar}>
      <NavbarBrand to="/" tag={Link}>
        <img src="brand.png" alt="brand" />
      </NavbarBrand>
      <Nav>
        <NavItem className={styles.navitem}>
          <NavLink to="/login" tag={Link}>
            <i className="fas fa-user-alt" style={{ fontSize: "36px" }} />
            {username && ` ${username}`}
          </NavLink>
        </NavItem>
      </Nav>
    </NavbarReactstrap>
  );
}

export default Navbar;
