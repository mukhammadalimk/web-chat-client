import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Coding Test</h1>
        <div>
          <button className="py-1 px-3 bg-blue-500 text-white rounded">
            한국어
          </button>
          <button className="px-3 ml-2 py-1 bg-blue-500 text-white rounded">
            English
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
