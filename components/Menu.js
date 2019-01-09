import PropTypes from "prop-types";
import Link from "next/link";

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>
              <span onClick={props.onToggleMenu}>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/landing" as={process.env.BACKEND_URL + "/landing"}>
            <a>
              <span onClick={props.onToggleMenu}>Landing</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/generic" as={process.env.BACKEND_URL + "/generic"}>
            <a>
              <span onClick={props.onToggleMenu}>Generic</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/elements" as={process.env.BACKEND_URL + "/elements"}>
            <a>
              <span onClick={props.onToggleMenu}>Elements</span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func
};

export default Menu;
