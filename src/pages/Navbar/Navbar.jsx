import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar flex items-center justify-between py-4 px-6">
      <div className="logo flex justify-center items-center w-[100px] md:ml-12 md:w-[160px]">
       <Link to={"/"}>
       <img src="Group 397.png" alt="logo" />
       </Link>
      </div>
      <div className="block md:hidden">
        <Menu />
      </div>
    </div>
  );
}
export default Navbar;
