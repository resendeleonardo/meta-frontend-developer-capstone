import { Link } from "react-router-dom";

type CallToActionProps = {
  to: string;
  text: string;
};

const CallToAction = ({ to, text }: CallToActionProps) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center bg-secondary-color p-3 font-semibold text-black h-12 w-40 rounded-2xl hover:bg-gray-800 hover:text-white"
    >
      {text}
    </Link>
  );
};

export default CallToAction;
