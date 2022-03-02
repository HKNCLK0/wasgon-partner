import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Logo from "../../assets/wasgonLogo.png";

import { BiUser } from "react-icons/bi";

const Header = () => {
  const [cookie, setCookies] = useCookies(["partnerToken"]);

  return (
    <header className="bg-white font-Montserrat flex items-center px-20 justify-between h-20 mb-8">
      <Link to="/">
        <img src={Logo} className="w-48" alt="Logo" />
      </Link>
      <div className="flex gap-8">
        <button>Satıcı Bilgi Merkezi</button>
        <button>Wasgon Akademi</button>
        {cookie.partnerToken ? (
          <button className="flex font-semibold items-center gap-1 border-2 px-6 py-2 rounded-lg border-blue-800 transition-colors duration-300 hover:text-white hover:border-transparent hover:bg-blue-800">
            <BiUser size={20} />
            Hesabım
          </button>
        ) : (
          <button className="border-2 px-6 py-2 rounded-lg border-blue-800 font-semibold text-sm transition-colors duration-300 hover:border-transparent hover:bg-blue-800 hover:text-white">
            Wasgon'da Satıcı Olun
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
