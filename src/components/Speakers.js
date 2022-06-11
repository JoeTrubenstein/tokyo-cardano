import React from 'react';
import Yunya from '../images/Yunya.png';
import Ryu from '../images/Ryu.png';
import Kriss from '../images/Kriss.png';

const Speakers = () => {
  return (
    <section id="speakerArea">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div className="p-6">
            <div className=" w-full mb-8 lg:h-48 md:h-36 rounded-xl bg-blue-100 dark:bg-nightBack">
              {' '}
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={Yunya}
                alt="blog"
              />
            </div>

            <h2 className="mb-8 text-xs font-semibold tracking-widest text-babyBlue dark:text-nightBlue uppercase">
              CNFT is Community
            </h2>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 dark:text-white lg:text-3xl">
              Yunya
            </h1>
            <div className="mt-4">
              <a
                href="../#"
                className="inline-flex items-center mt-4 font-semibold text-babyBlue dark:text-nightBlue lg:mb-0 hover:text-neutral-600"
                title="read more">
                {' '}
                Read More »{' '}
              </a>
            </div>
          </div>
          <div className="p-6">
            <div className=" w-full mb-8 lg:h-48 md:h-36 rounded-xl bg-blue-100 dark:bg-nightBack">
              {' '}
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={Ryu}
                alt="blog"
              />
            </div>
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-babyBlue dark:text-nightBlue uppercase">
              Otodojo Nodes
            </h2>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 dark:text-white lg:text-3xl">
              Ryu Goto
            </h1>
            <div className="mt-4">
              <a
                href="../#"
                className="inline-flex items-center mt-4 font-semibold text-babyBlue dark:text-nightBlue lg:mb-0 hover:text-neutral-600"
                title="read more">
                {' '}
                Read More »{' '}
              </a>
            </div>
          </div>
          <div className="p-6">
            <div className=" w-full mb-8 lg:h-48 md:h-36 rounded-xl bg-blue-100 dark:bg-nightBack">
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={Kriss}
                alt="blog"
              />
            </div>
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-babyBlue dark:text-nightBlue uppercase">
              Project Catalyst
            </h2>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 dark:text-white lg:text-3xl">
              Kriss Baird
            </h1>
            <div className="mt-4">
              <a
                href="../#"
                className="inline-flex items-center mt-4 font-semibold text-babyBlue dark:text-nightBlue lg:mb-0 hover:text-neutral-600"
                title="read more">
                {' '}
                Read More »{' '}
              </a>
            </div>
          </div>
          
          {/*  */}
        </div>
      </div>
    </section>
  );
};
export default Speakers;
