import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handelBack = () => {
    router.push("/");
  };

  return (
    <div className="border-b border-neutral-900 p-4 flex flex-row items-center gap-1 cursor-pointer hover:opacity-80">
      {showBackArrow && (
        <IoIosArrowBack onclick={handelBack} size={20} color="white" />
      )}
      <p className="text-white text-xl font-semibold">{label}</p>
      <div></div>
    </div>
  );
};

export default Header;
