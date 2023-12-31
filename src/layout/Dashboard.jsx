
import { FaCalendar, FaConnectdevelop, FaHome, FaList, FaShoppingCart, FaUserShield, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#112233] text-base-content">
          {/* Sidebar content here */}
          <li><Link><FaUserShield></FaUserShield>User Home</Link></li>
          <li><Link><FaCalendar></FaCalendar>Reservation</Link></li>
          <li><Link><FaWallet></FaWallet>Wallet</Link></li>
          <li><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>mycart</Link></li>
          <div className="divider">......</div>
          <li><Link><FaHome></FaHome>Home</Link></li>
          <li><Link><FaList></FaList>Menu</Link></li>
          <li><Link><FaWallet></FaWallet>Wallet</Link></li>
          <li><Link><FaConnectdevelop></FaConnectdevelop>contact</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;