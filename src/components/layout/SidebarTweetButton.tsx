import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  return (
    <div onClick={() => {}}>
      <div className="relative lg:hidden mt-4 rounded-full w-14 h-14 p-4 flex items-center justify-center bg-sky-500 cursor-pointer hover:bg-opacity-80 hover:shadow-lg transition">
        <FaFeather size={28} color="white" />
      </div>
      <div className="hidden lg:flex justify-center h-12 rounded-full px-2 py-2 mt-4 bg-sky-500 cursor-pointer hover:bg-opacity-80 hover:shadow-lg transition">
        <p className="hidden lg:block font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
