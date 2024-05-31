import React from "react";
import { BsWhatsapp,  BsLinkedin ,BsFacebook  } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className=" bg-teal-500 py-5">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className=" font-bold text-2xl text-white py-3">LOGO</h1>
            <div className="flex flex-row md:flex-row justify-between py-3 items-center ">
            <BsWhatsapp className="mx-3 text-white text-3xl font-bold"/>
            <BsLinkedin className="mx-3 text-white text-3xl font-bold"/>
            <BsFacebook className="mx-3 text-white text-3xl font-bold"/>
            </div>
        </div>
        <p className="text-white text-center py-3">
          Copyright &copy; Alok Kumar 🤍 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
