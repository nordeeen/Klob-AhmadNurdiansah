import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLoker, setKlobSlicer } from 'store/klobSlicer';
import Header from './Header';

const textForm = [
  {
    id: 1,
    title: 'Logo Perusahaan',
    placeholder: 'Ketikan Logo Perusahaan',
    link: 'Dalam bentuk link dan url',
    name: 'logo',
  },
  {
    id: 2,
    title: 'Nama Perusahaan',
    placeholder: 'Ketikan Nama Perusahaan',
    name: 'namaPerusahaan',
  },
  {
    id: 3,
    title: 'Nama Lowongan',
    placeholder: 'Ketikan Nama Lowongan',
    name: 'namaLoker',
  },
  {
    id: 4,
    title: 'Status Karyawan',
    placeholder: 'Ketikan Status Karyawan',
    name: 'statusKaryawan',
  },
  {
    id: 5,
    title: 'Kisaran Gaji Karyawan',
    textCenter: 'sampai dengan',
    placeholderOne: '1000.000',
    placeholderTwo: '10.000.000',
    name: 'kisaranGaji',
    name1: 'sampaiGaji',
  },
  {
    id: 6,
    title: 'Tanggal Posting',
    placeholder: 'dd/mm/yyyy',
    name: 'tanggal',
  },
];

const InputForm = (props) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-normal text-left mb-2">{props.title}</label>
      <input
        type={props.type}
        name={props.name}
        onChange={props.onChange}
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
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholderOne}
          className="w-[225px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
        />
        <p className="mx-auto">{props.textCenter}</p>
        <input
          name={props.name1}
          type="number"
          placeholder={props.placeholderTwo}
          className="w-[225px] px-1 py-1 border-2 border-gray-400 rounded-[4px]"
        />
      </div>
    </div>
  );
};

const Form = () => {
  const {
    arrLoker,
    logo,
    namaPerusahaan,
    namaLoker,
    statusKaryawan,
    kisaranGaji,
    sampaiGaji,
    tanggal,
  } = useSelector((state) => state);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!arrLoker.length) {
      dispatch(getLoker());
    }
  }, [dispatch, arrLoker]);

  console.log(arrLoker, 'arrLoker');

  const handleChangeValue = (e) => {
    let { name, value } = e.target;
    console.log(name, 'nameeee inpit');
    dispatch(
      setKlobSlicer({
        key: name,
        value: value,
      }),
    );
  };

  const handleSend = (e) => {
    e.preventDefault();
    const newObject = {
      jobVacancyCode: 'adq08329',
      positionName: 'Karyawan swasta',
      corporateId: 'qdbqudbuq',
      corporateName: namaPerusahaan,
      status: statusKaryawan,
      descriptions: 'adq9qhdq',
      corporateLogo: logo,
      applied: false,
      postedDate: tanggal,
      salaryFrom: kisaranGaji,
      salaryTo: sampaiGaji,
    };
    const newArrLoker = [...arrLoker];
    newArrLoker?.push(newObject);
    dispatch(
      setKlobSlicer({
        key: 'arrLoker',
        value: newArrLoker,
      }),
    );

    navigate('/');
  };

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
                    name={val.name}
                    name1={val.name1}
                    title={val.title}
                    type="text"
                    placeholderOne={val.placeholderOne}
                    placeholderTwo={val.placeholderTwo}
                    textCenter={val.textCenter}
                    onChange={handleChangeValue}
                  />
                );
              } else {
                return (
                  <InputForm
                    name={val.name}
                    key={val.id}
                    title={val.title}
                    link={val.link}
                    type={val.id === 6 ? 'date' : 'text'}
                    placeholder={val.placeholder}
                    onChange={handleChangeValue}
                  />
                );
              }
            })}
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white text-xs px-2 py-2 rounded-md mt-2 uppercase"
            >
              simpan
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
