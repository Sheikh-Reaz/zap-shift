import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaMotorcycle, FaRegCreditCard } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import Logo from "../components/Logo";
import useAuth from "../hooks/useAuth";
import { FiSettings } from "react-icons/fi";
import { FaUser, FaUserGroup } from "react-icons/fa6";
import useRole from "../hooks/useRole";
import { RiEBikeFill } from "react-icons/ri";

const DashboardLayout = () => {
  const { user } = useAuth();
  const {role} = useRole();

  return (
    <div className="min-h-screen">
      <div className="drawer lg:drawer-open">
        {/* Drawer toggle checkbox */}
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* MAIN CONTENT */}
        <div className="drawer-content flex flex-col">
          <nav className="w-full">
            <div className="flex items-center gap-4 px-4 lg:px-8 h-16">
              {/* Sidebar toggle button for mobile */}
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-ghost btn-square p-1 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>

              <div className="flex-1" />

              <div className="flex items-center gap-4">
                <button className="btn btn-ghost btn-circle">
                 
                </button>

                <div className="hidden sm:flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-base-200" >
                             <img src={user.photoURL} alt="" />
                    </div>

                  <div className="text-sm">
                    <div className="font-medium">{user?.displayName}</div>
                    <div className="text-xs opacity-70">{role}</div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="bg-[#F8F8F8] min-h-screen p-6 lg:p-8">
            <div className=" mx-auto bg-white rounded-2xl p-10 " >
                    
            <Outlet />
            </div>
        
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="drawer-side">
          {/* Overlay for mobile */}
          <label htmlFor="my-drawer-4" className="drawer-overlay" />

          <aside className="flex min-h-full flex-col items-start w-64 bg-white">
            <div className="w-full px-4 pt-6 pb-2 flex items-center justify-between">
              <Logo />
            </div>

            <nav className="w-full grow px-2 py-4">
              <ul className="menu list-gap w-full">
                <li>
                  <Link
                    to="/"
                    className={ ({ isActive }) =>
                      isActive ? "nav-active" : "nav-link"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <span>Homepage</span>
                  </Link>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/my-parcels"
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-link"
                    }
                  >
                    <CiDeliveryTruck className="w-5 h-5" />
                    <span>My Parcels</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/payment-history"
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-link"
                    }
                  >
                    <FaRegCreditCard className="w-4 h-4" />
                    <span>Payment History</span>
                  </NavLink>
                </li>

                      {
                          role === 'admin' && <>
                                          <li>
                  <NavLink
                    to="/dashboard/approve-riders"
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-link"
                    }
                  >
                    <FaMotorcycle className="w-4 h-4" />
                    <span>Approve Rider</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users-management"
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-link"
                    }
                  >
                    <FaUserGroup className="w-4 h-4" />
                    <span>Users Management</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/assign-riders"
                    className={({ isActive }) =>
                      isActive ? "nav-active" : "nav-link"
                    }
                  >
                    <RiEBikeFill className="w-4 h-4" />
                    <span>Assign Riders</span>
                  </NavLink>
                </li>
                          </>
                      }

                <li className="mt-4 pt-2 border-t border-base-200 w-full">
                  <button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-base-100">

                    <FiSettings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                </li>
              </ul>
            </nav>

            <div className="w-full px-4 py-6 border-t border-base-200">
              <button className="btn btn-ghost w-full justify-start">
                Logout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
