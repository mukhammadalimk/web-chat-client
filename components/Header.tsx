import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18next-config";

const Header = () => {
  const { t } = useTranslation("common");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">{t("headerText")}</h1>
        <div>
          <button
            className="py-1 px-3 bg-blue-500 text-white rounded"
            onClick={() => changeLanguage("ko")}
          >
            한국어
          </button>
          <button
            className="px-3 ml-2 py-1 bg-blue-500 text-white rounded"
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
