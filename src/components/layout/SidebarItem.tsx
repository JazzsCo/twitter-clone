import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  auth,
  alert,
}) => {
  return (
    <div onClick={() => {}} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden transition">
        <Icon size={22} color="white" />
      </div>
      <div className="hidden lg:flex rounded-full h-14 w-full items-center gap-4 p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer transition">
        <Icon size={22} color="white" />
        <p className="text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
