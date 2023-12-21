import React from "react";
import { Link } from "react-router-dom";

type CallToActionProps = {
  to: string;
  text: string;
};

const CallToAction = ({ to, text }: CallToActionProps) => {
  return (
    <Link
      to={to}
      className="bg-secondary-color p-3 px-5 font-bold text-black h-12 w-40 rounded-2xl hover:bg-yellow-300"
    >
      {text}
    </Link>
  );
};

export default CallToAction;
