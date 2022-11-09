import React from 'react';
import Header from './Header';

const Form = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center mb-4">
        <div className="w-auto h-auto mt-6">
          <h1 className="text-2xl font-semibold text-black text-left flex justify-start mb-3">
            Buat Lowongan :
          </h1>
          <form>
            <div className="flex flex-col">
              <label className="text-sm font-normal text-left mb-2">Logo Perusahaan</label>
              <input
                type="text"
                placeholder="Ketikan Logo Perusahaan"
                className="w-[600px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
              />
              <p className="text-xs text-gray-400 font-normal">Dalam bentuk link url</p>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-normal text-left mb-2">Nama Perusahaan</label>
              <input
                type="text"
                placeholder="Ketikan Nama Perusahaan"
                className="w-[600px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-normal text-left mb-2">Nama Lowongan</label>
              <input
                type="text"
                placeholder="Ketikan Nama Lowongan"
                className="w-[600px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-normal text-left mb-2">Status Karyawan</label>
              <input
                type="text"
                placeholder="Ketikan Status Perusahaan"
                className="w-[600px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-normal text-left mb-2">Kisaran Gaji Karyawan</label>
              <div className="flex">
                <input
                  type="number"
                  placeholder="1000.000"
                  className="w-[225px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
                />
                <p className="mx-auto">sampai dengan</p>
                <input
                  type="number"
                  placeholder="10.000.00"
                  className="w-[225px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-normal text-left mb-2">Tanggal Posting</label>
              <input
                type="date"
                placeholder="dd/mm/yy"
                className="w-[600px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
              />
            </div>
            <button className="bg-blue-600 text-white text-xs px-2 py-2 rounded-md mt-2 uppercase">
              simpan
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
