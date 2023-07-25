import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Layout = function () {
const location = useLocation();
const [isClicked, setIsClicked] = useState(false);

const handleClick = () => {
    setIsClicked(!isClicked);
};

return (
    <div
    className={`bg-blue-200 p-4 ${isClicked ? "border-2 border-blue-500" : ""}`}
    >
    <nav>
        <ul className="space-y-4">
        <li>
            <button
            className={`btn ${location.pathname === "/" ? "font-bold" : ""}`}
            onClick={handleClick}
            style={{ backgroundColor: "#0294C4", color: "#12192F", width: "15em" }}
            >
            <Link to="/" className="text-dark">
                Home
            </Link>
            </button>
        </li>
        <li>
            <button
            className={`btn ${location.pathname === "/blogs" ? "font-bold" : ""}`}
            onClick={handleClick}
            style={{ backgroundColor: "#0294C4", color: "#12192F", width: "15em" }}
            >
            <Link to="/blogs" className="text-dark">
                Blogs
            </Link>
            </button>
        </li>
        <li>
            <button
            className={`btn ${location.pathname === "/contact" ? "font-bold" : ""}`}
            onClick={handleClick}
            style={{ backgroundColor: "#0294C4", color: "#12192F", width: "15em" }}
            >
            <Link to="/contact" className="text-dark">
                Contact
            </Link>
            </button>
        </li>
        <li>
            <button
            className={`btn ${location.pathname === "/product" ? "font-bold" : ""}`}
            onClick={handleClick}
            style={{ backgroundColor: "#0294C4", color: "#12192F", width: "15em" }}
            >
            <Link to="/product" className="text-dark">
                Product
            </Link>
            </button>
        </li>
        <li>
            <button
            className={`btn ${location.pathname === "/services" ? "font-bold" : ""}`}
            onClick={handleClick}
            style={{ backgroundColor: "#0294C4", color: "#12192F", width: "15em" }}
            >
            <Link to="/services" className="text-dark">
                Services
            </Link>
            </button>
        </li>
        </ul>
    </nav>
    </div>
);
};

export default Layout;






