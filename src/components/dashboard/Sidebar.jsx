import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFillGrid3X3GapFill,
} from "react-icons/bs";
import PaidIcon from '@mui/icons-material/Paid';

function Sidebar({ openSidebarToggle, OpenSidebar }) {

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="/product">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>

        <li className='sidebar-list-item'>
                <a href="/order">
                    <BsFillGrid3X3GapFill className='icon'/>Orders
                </a>
            </li>
        <li className='sidebar-list-item'>
                <a href="/payment">
                    <PaidIcon className='icon'/>Payments
                </a>
            </li>

        <li className="sidebar-list-item">
          <a href="/signup">
            <BsPeopleFill className="icon" /> Register
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="/report">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
