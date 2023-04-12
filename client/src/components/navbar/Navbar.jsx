import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Realy</span>
        </Link>

        {/* {!localStorage.getItem('token')? 
         <form className="">
             <Link className="navButton" to="/login" role="button">Login</Link>
             <Link className="navButton" to="/signup" role="button">Signup</Link>  
            
        </form>:<button onClick={handleLogout} className="btn btn-primary"> Logout</button>} */}
        

        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>

          </div>
        )}
        <button onClick={handleLogout} className="navButton">LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
