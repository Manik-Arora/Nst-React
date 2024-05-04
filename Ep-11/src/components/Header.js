import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/foodvilla.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  return (
    <div className="flex justify-between shadow-sm">
      <div className="logo-container pl-6">
        <img className="w-24" src={logo}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-6 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
