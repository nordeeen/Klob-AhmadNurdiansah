import React from 'react';
import Header from './Header';

const textForm = [
  {
    id: 1,
    title: 'Logo Perusahaan',
    placeholder: 'Ketikan Logo Perusahaan',
    link: 'Dalam bentuk link dan url',
  },
  {
    id: 2,
    title: 'Nama Perusahaan',
    placeholder: 'Ketikan Nama Perusahaan',
  },
  {
    id: 3,
    title: 'Nama Lowongan',
    placeholder: 'Ketikan Nama Lowongan',
  },
  {
    id: 4,
    title: 'Status Karyawan',
    placeholder: 'Ketikan Status Karyawan',
  },
  {
    id: 5,
    title: 'Kisaran Gaji Karyawan',
    textCenter: 'sampai dengan',
    placeholderOne: '1000.000',
    placeholderTwo: '10.000.000',
  },
  {
    id: 6,
    title: 'Tanggal Posting',
    placeholder: 'dd/mm/yyyy',
  },
];

const InputForm = (props) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-normal text-left mb-2">{props.title}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-[600px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
      />
      <p className="text-xs text-gray-400 font-normal">{props.link}</p>
    </div>
  );
};

const InputSalary = (props) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-normal text-left mb-2">{props.title}</label>
      <div className="flex">
        <input
          type="number"
          placeholder={props.placeholderOne}
          className="w-[225px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
        />
        <p className="mx-auto">{props.textCenter}</p>
        <input
          type="number"
          placeholder={props.placeholderTwo}
          className="w-[225px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
        />
      </div>
    </div>
  );
};

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
            {textForm.map((val) => {
              if (val.id === 5) {
                return (
                  <InputSalary
                    key={val.id}
                    title={val.title}
                    placeholderOne={val.placeholderOne}
                    placeholderTwo={val.placeholderTwo}
                    textCenter={val.textCenter}
                  />
                );
              } else {
                return (
                  <InputForm
                    key={val.id}
                    title={val.title}
                    link={val.link}
                    placeholder={val.placeholder}
                  />
                );
              }
            })}
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
