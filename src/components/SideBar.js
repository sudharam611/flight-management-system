import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import iconLookup from "../data/reactIcons";
import { MdHeadset } from "react-icons/md";

function SideBar({ showSideBar, setShowSideBar }) {
  const navList = [
    {
      icon: "RiDashboardFill",
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: "LuPlaneTakeoff",
      name: "Flights",
      link: "/flights",
    },
    {
      icon: "IoTicketOutline",
      name: "Booking",
      link: "/booking",
    },
    {
      icon: "IoPeopleOutline",
      name: "Staff",
      link: "/staff",
    },
    {
      icon: "AiOutlineMessage",
      name: "Help Desk",
      link: "/help-desk",
    },
    {
      icon: "IoSettingsOutline",
      name: "Manage Aircrafts",
      link: "/manage-aircrafts",
    },
    {
      icon: "VscGraph",
      name: "Reports & Analytics",
      link: "reports-analytics",
    },
    {
      icon: "HiOutlineSpeakerphone",
      name: "Broadcast Notification",
      link: "/broadcast-notification",
    },
    {
      icon: "LuCircleDollarSign",
      name: "Payments & Refunds",
      link: "payments-refunds",
    },
  ];
  return (
    <div className="z-50">
      {showSideBar && (
        <div
          className={`fixed h-full bg-white py-4 px-2 md:p-4 flex flex-col transition-transform duration-300 transform ${
            showSideBar ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:w-64 z-50 shadow-right`}
        >
          <div>
            <Logo />
          </div>
          <ul className="mt-3 flex flex-col flex-1">
            <nav>
              {navList.map((item, index) => {
                const IconComponent = iconLookup[item.icon];
                return (
                  <NavLink
                    key={index}
                    onClick={() => setShowSideBar(false)}
                    to={item.link}
                    className={({ isActive }) =>
                      `navItems ${
                        isActive
                          ? "bg-secondary text-white"
                          : "bg-white text-light-black"
                      }`
                    }
                  >
                    {IconComponent && <IconComponent />}
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>

            <div className="mt-auto" onClick={() => setShowSideBar(false)}>
              <NavLink className="navItems bg-light-gray">
                <MdHeadset />
                Contact Support
              </NavLink>
            </div>
          </ul>

          <div
            className="lg:hidden absolute top-2 right-0  p-2  text-white rounded cursor-pointer"
            onClick={() => setShowSideBar(false)}
          >
            <IoIosCloseCircleOutline className="text-primary h-6 w-6" />
          </div>
        </div>
      )}

      {showSideBar && (
        <div
          className="fixed inset-0 backdrop-blur-sm lg:hidden"
          onClick={() => setShowSideBar(false)}
        ></div>
      )}
    </div>
  );
}

export default SideBar;
