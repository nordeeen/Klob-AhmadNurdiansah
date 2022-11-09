import React from 'react';

const Header = () => {
  return (
    <>
      <header className="w-full h-auto bg-blue-200 flex justify-between items-center py-4 px-6">
        <h1 className="text-4xl text-red-600 font-semibold text-center">Klob</h1>
        <a href="#/" className="text-blue-600 underline">
          Buat Lowongan
        </a>
      </header>
    </>
  );
};

export default Header;
