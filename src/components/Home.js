import React, { useEffect } from 'react';
import Card from './Card';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';

import { getLoker } from 'store/klobSlicer';

const Home = () => {
  const { arrLoker } = useSelector((state) => state);

  console.log(arrLoker, 'arrr comp');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoker());
  }, [dispatch]);
  return (
    <>
      <section className="w-full h-auto bg-red-500">
        <Header />
        <div className="w-full h-auto px-4 py-6 bg-white">
          <h2 className="text-2xl font-semibold mb-6">Lowongan Pekerjaan :</h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-4 gap-6">
              {/* Card */}
              {arrLoker.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imgLogo={item.corporateLogo}
                    status={item.status}
                    positionName={item.positionName}
                    salaryFrom={item.salaryFrom}
                    salaryTo={item.salaryTo}
                    postDate={item.postedDate}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
