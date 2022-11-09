import React from 'react';
import Header from './Header';

const Detail = () => {
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pertamina_Logo.svg/1280px-Pertamina_Logo.svg.png"
              alt="logo-perusahaan"
              className="w-[100px] h-[60px] object-contain"
            />
          </div>
          <div>
            <h2 className="text-lg text-black font-semibold text-left mb-4">
              Sinar Mas Agribusiness and Food
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

            <ul className="list-disc">
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta illo ducimus harum
                molestiae fuga quibusdam.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum natus accusamus
                minima magnam esse quis!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium molestias
                exercitationem blanditiis accusamus maxime cum!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a minima numquam,
                beatae nostrum culpa?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis animi
                quidem quo, doloremque autem.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis accusamus
                perferendis autem qui at?
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, repellat excepturi
                officia porro minima hic.
              </li>
            </ul>
            <h2>Staff Accounting</h2>
            <p className="text-base text-black font-normal text-left">
              Status :{' '}
              <span className="bg-gray-600 px-1 py-1 rounded-sm text-white">Karyawan Tetap</span>
            </p>
            <p className="text-base text-black font-normal text-left">
              Gaji :{' '}
              <span className="bg-gray-600 px-1 py-1 rounded-sm text-white">
                IDR 1.200.000 - IDR 57.500.000
              </span>
            </p>
            <div className="flex justify-end">
              <p className="text-xs text-gray-600">3 tahun yang lalu</p>
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
