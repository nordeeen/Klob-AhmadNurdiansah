import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import moment from 'moment/moment';

const Detail = () => {
  const detail = useSelector((state) => state.detail);
  console.log('ini detail loker', detail);
  if (!Object.keys(detail).length) {
    return <p>tidak ada data</p>;
  }

  const formatter = (value) => {
    return new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR',
    })
      .format(value)
      .toString();
  };

  // console.log('ini uang', formatter(`${detail.salaryFrom}`));

  return (
    <>
      <Header />
      <div className="flex justify-around">
        <h1 className="text-2xl text-black font-semibold">Detail Lowongan Pekerjaan :</h1>
      </div>
      <section className="flex flex-col justify-center items-center my-3">
        <div className="w-[600px] h-auto bg-white py-3 px-6 border-2 border-gray-400 rounded-md">
          <div className="flex justify-center items-center mb-6">
            <img
              src={detail.corporateLogo}
              alt="logo-perusahaan"
              className="w-[100px] h-[60px] object-contain"
            />
          </div>
          <div>
            <h2 className="text-lg text-black font-semibold text-left mb-4">
              {detail.corporateName}
            </h2>
            <p className="text-base text-black font-semibold text-left my-3">Kewajiban</p>
            <p className="text-base text-black font-normal">
              Teller :
              <span className="text-base text-white font-normal text-center">
                Menerima setoran tunai, deposito, rekening giro, kiriman uang/transfer, dan tagihan
                umum.
              </span>
            </p>
            <p className="text-base text-black font-semibold text-left">
              Customer Service :
              <span className="text-base text-white font-normal text-center">
                melayani pembukaan rekening koran tabungan dan deposito, menerima dan membuat
                permintaan buku cek dan giro serta mengaktifkan resinya, menangani dan mengelola
                keluhan Customer.
              </span>
            </p>

            <ul className="list-disc">{detail.descriptions}</ul>
            <h2>{detail.positionName}</h2>
            <p className="text-base text-black font-normal text-left">
              Status :{' '}
              <span className="bg-gray-600 px-1 py-1 rounded-sm text-white">{detail.status}</span>
            </p>
            <p className="text-base text-black font-normal text-left">
              Gaji :{' '}
              <span className="bg-gray-600 px-1 py-1 rounded-sm text-white">
                {formatter(`${detail.salaryFrom}`)} - {formatter(`${detail.salaryTo}`)}
              </span>
            </p>
            <div className="flex justify-end">
              <p className="text-xs text-gray-600">{moment([`${detail.postedDate}`]).fromNow()}</p>
            </div>
          </div>
          <button className="bg-green-400 w-[550px] py-2 font-semibold uppercase mt-3 rounded-sm text-sm">
            kirim lamaran
          </button>
        </div>
      </section>
    </>
  );
};

export default Detail;
