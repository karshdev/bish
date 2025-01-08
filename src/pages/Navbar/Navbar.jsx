import { Menu } from "lucide-react";
function Navbar() {
  return (
    <div className="navbar flex items-center justify-between py-4 px-6">
      <div className="logo flex justify-center items-center w-[100px] md:ml-12 md:w-[160px]">
        <img src="Group 397.png" alt="logo" />
      </div>
      <div className="block md:hidden">
        <Menu />
      </div>
    </div>
  );
}
export default Navbar;
