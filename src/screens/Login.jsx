import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import HeroSection from "../components/Login/HeroSection";
import { Header } from "../components/main";
import Input from "../components/main/UI/Input";

import { API_URL } from "../config";

const Login = () => {
  const navigate = useNavigate();

  const [cookie, setCookies] = useCookies(["partnerToken"]);

  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerPassword, setPartnerPassword] = useState("");

  const handleLogin = () => {
    axios
      .post(`${API_URL}/partner/login`, {
        partnerEmail,
        partnerPassword,
      })
      .then((res) => {
        setCookies("partnerToken", res.data);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <Header />
      <div className="px-20 gap-4 container mx-auto grid-rows-3 font-Montserrat grid grid-cols-3 py-16">
        <div className="w-full col-span-2 row-span-2">
          <div className="flex flex-col justify-between h-full">
            <div className="h-3/4 rounded-lg">
              <HeroSection />
            </div>
            <div className="mx-10 flex justify-between h-full mt-10">
              <div className="bg-gray-100 w-3/12 rounded-lg flex items-center justify-center font-semibold">
                Kutu 1
              </div>
              <div className="bg-gray-100 w-3/12 rounded-lg flex items-center justify-center font-semibold">
                Kutu 2
              </div>
              <div className="bg-gray-100 w-3/12 rounded-lg flex items-center justify-center font-semibold">
                Kutu 3
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-16 rounded-lg row-span-2 p-8 flex gap-8 flex-col">
          <h1 className="text-2xl font-bold">Giriş Yap</h1>
          <div className="flex flex-col gap-2">
            <Input
              type="email"
              value={partnerEmail}
              setValue={setPartnerEmail}
              labelText="E-Posta"
              placeholder="E-Posta"
            />
            <div className="flex flex-col gap-1">
              <Input
                type="password"
                value={partnerPassword}
                setValue={setPartnerPassword}
                labelText="Şifre"
                placeholder="Şifre"
              />
              <Link
                to=""
                className="flex justify-end font-medium text-xs italic"
              >
                Şifremi Unuttum
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handleLogin()}
              disabled={!partnerEmail || !partnerPassword}
              className="disabled:bg-gray-300 disabled:border-transparent disabled:cursor-not-allowed disabled:text-black border-2 w-2/3 px-4 py-2 rounded-lg border-blue-800 text-sm font-semibold transition-colors duration-300 hover:border-transparent hover:bg-blue-800 hover:text-white"
            >
              Giriş Yap
            </button>
          </div>
          <div className="flex justify-center">
            <Link
              className="text-center bg-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 border-2 border-transparent hover:border-blue-800 hover:scale-105"
              to=""
            >
              Satıcı Değil Misiniz?
              <br />
              Hemen Wasgon'da Satıcı Olun
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
