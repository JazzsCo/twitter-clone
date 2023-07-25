import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl bg-black">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="border-x col-span-3 lg:col-span-2 border-neutral-900">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
