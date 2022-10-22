import { Link } from "react-router-dom";
import {
  Navbar as NavbarReactstrap,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <NavbarReactstrap className={styles.navbar}>
      <NavbarBrand to="/" tag={Link}>
        <img src="brand.png" alt="brand" />
      </NavbarBrand>
      <Nav>
        <NavItem className={styles.navitem}>
          <NavLink to="/signup" tag={Link}>
            <i className="fas fa-user-alt" style={{ fontSize: "36px" }} />
          </NavLink>
        </NavItem>
      </Nav>
    </NavbarReactstrap>
  );
}

export default Navbar;
