import React, { useEffect, useState } from 'react';
import Card from './Card';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';

import { getLoker, setKlobSlicer } from 'store/klobSlicer';
import { data } from 'autoprefixer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { arrLoker } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!arrLoker.length) {
      dispatch(getLoker());
    }
  }, [dispatch, arrLoker]);

  const handleClick = (e) => {
    const newArr = arrLoker.find((data) => data.corporateId === e);
    dispatch(
      setKlobSlicer({
        key: 'detail',
        value: newArr,
      }),
    );
    navigate('/detail');
  };

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
                    onClick={handleClick.bind(null, item.corporateId)}
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
