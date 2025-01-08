import { BsCoin } from "react-icons/bs";
import logo from '../assets/logo.png'
const Header = ({claimFreeCredit}) => {
  return (
    <div className="mt-2 lg:mt-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <img className="w-16 font-normal text-base" src={logo} alt="" />
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block">
          <ul className="flex space-x-9 mr-14">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          </div>
          <button className="btn border text-base bg-white rounded-xl">
            {claimFreeCredit}
            <span className="font-semibold ">coin</span> 
            <BsCoin />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
