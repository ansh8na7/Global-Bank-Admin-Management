import { Outlet, Link } from "react-router-dom";
import "../App.css";

const LayoutBranch = () => {
  return (
    <>
      <nav>
        <ul className="list">
        <li>
            <Link to="/table"><p className="c">Click here to view Branch details</p></Link>
          </li>
          <li>
            <Link to="/new"><p className="c">Click here to add new Branch</p></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default LayoutBranch;
