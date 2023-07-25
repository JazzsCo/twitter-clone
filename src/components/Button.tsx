interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  onClick,
  large,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${
          secondary
            ? "bg-white text-black border-black"
            : "bg-sky-500 text-white border-sky-500"
        }
        ${large ? "text-xl px-2 py-2" : "text-md px-1 py-1"} 
      `}
    >
      {label}
    </button>
  );
};

export default Button;
