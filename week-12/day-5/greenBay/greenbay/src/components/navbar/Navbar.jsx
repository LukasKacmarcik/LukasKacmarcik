import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as NavbarReactstrap,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Button,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux/es/exports";
import styles from "./navbar.module.scss";
import { logOut } from "../../Redux/slices/session";
import { toast } from "react-toastify";

function Navbar() {
  const { username, cash, id } = useSelector((state) => state.session);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOut() {
    dispatch(logOut());
    toast.success(`You have successfully logged out`, {
      position: "bottom-left",
    });
    navigate("/");
  }

  return (
    <NavbarReactstrap className={styles.navbar}>
      <NavbarBrand to="/" tag={Link}>
        <img src="http://localhost:3000/brand.png" alt="brand" />
      </NavbarBrand>
      <Nav>
        <NavItem className={styles.navitem}>
          <NavLink to="/login" tag={Link}>
            <i className="fas fa-user-alt" style={{ fontSize: "36px" }} />
          </NavLink>
          {username && ` ${username}`}
          <br></br>
          {(cash === 0 || cash) && `${cash} €`}
        </NavItem>
        &nbsp; &nbsp;
        {id && (
          <Button
            color="success"
            outline
            size="md"
            onClick={() => {
              handleLogOut();
            }}
          >
            <i className="fas fa-door-open" />
            {` Log Out`}
          </Button>
        )}
      </Nav>
    </NavbarReactstrap>
  );
}

export default Navbar;
