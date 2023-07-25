import { RiLogoutBoxFill } from "react-icons/ri";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: BsBellFill,
      label: "Notifications",
      href: "/notifications",
      auth: true,
      // alert: currentUser?.hasNotification,
      alert: false,
    },
    {
      icon: FaUser,
      label: "Profile",
      //   href: `/users/${currentUser?.id}`,
      href: "dsd",
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full md:pr-6 select-none">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[210px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              alert={item.alert}
              auth={item.auth}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}

          <SidebarItem
            onClick={() => {}}
            icon={RiLogoutBoxFill}
            label="Logout"
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
