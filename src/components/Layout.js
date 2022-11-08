import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="list">
        <li>
            <Link to="/table"><p className="c">Click here to view Customer Account details</p></Link>
          </li>
          <li>
            <Link to="/new"><p className="c">Click here to add new Customer Account details</p></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;