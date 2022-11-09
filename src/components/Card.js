import React from 'react';

const Card = (props) => {
  return (
    <>
      <section className="w-[200px] h-auto bg-white px-4 py-4 rounded-md border-gray-400 border-2">
        <img
          src={props.imgLogo}
          alt="logo-text"
          className="w-[200px] h-[80px] object-contain mx-auto"
        />
        <div>
          <p className="text-base text-black font-semibold text-left">{props.positionName}</p>
          <p className="text-base text-gray-400 font-semibold mb-1">
            Status :
            <span className="bg-gray-600 px-1 py-1 rounded-sm text-center text-xs">
              {props.status}
            </span>
          </p>
          <p className="text-base text-gray-400 font-semibold mb-1">
            Gaji:
            <span className="bg-gray-600 px-1 py-1 rounded-sm text-xs">
              {props.salaryFrom} - {props.salaryTo}
            </span>
          </p>
        </div>
        <div className="flex justify-end items-center mt-1">
          <p className="text-red font-normal text-xs">{props.postDate}</p>
        </div>
        <div className="flex justify-start items-center">
          <a href="/#" className="text-xs text-blue-500 font-semibold underline mb-4">
            Baca Detail
          </a>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-green-600 px-8 py-2 rounded-[10px] text-center text-white text-sm">
            kirim lamaran
          </button>
        </div>
      </section>
    </>
  );
};

export default Card;
