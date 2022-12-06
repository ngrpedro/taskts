import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex items-center justify-center bg-teal-800 text-white py-5">
      <h1 className="font-bold text-2xl">TASK - TODAY</h1>
    </div>
  );
};

export default NavBar;
