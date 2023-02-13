import { Link } from "react-router-dom";

const logo = require("../img/logo.png")

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-neutral-50 z-10">
      <div className="mx-auto px-2 sm:px-4 lg:px-8 shadow-lg py-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="md:flex items-center lg:px-0 flex-1">
            <Link to={"/"}> 
            <img className="h-10 w-20" src={logo} alt="LOGO" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
