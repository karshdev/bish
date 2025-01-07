import { Menu } from 'lucide-react';
function Navbar() {
  return (
    <div className="navbar flex items-center justify-between py-4 px-6">
      <div className="logo flex justify-center items-center w-1/3 sm:w-4/5 lg:w-1/4">
        <img src="Group 397.png" alt="logo" className="w-full" />
      </div>
      <Menu />
    </div>

  )
}
export default Navbar;