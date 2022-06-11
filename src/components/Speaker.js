import React from 'react';
import Yunya from '../images/Yunya.png';
import Ryu from '../images/Ryu.png';
import Kriss from '../images/Kriss.png';

const Speakers = () => {
  return (
    <section id="speakerArea">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/*  */}
          <div className="flex flex-col w-full max-w-lg mb-12 text-left lg:mx-auto">
            <a href="../../" className="inline-flex items-center w-full mb-4">
              <img
                alt="blog"
                src={Yunya}
                className="flex-shrink-0 object-cover object-center w-32 h-32 rounded-full"
              />
              <span className="flex flex-col flex-grow pl-3">
                <h2 className="text-sm font-semibold tracking-widest text-babyBlue dark:nightBlue uppercase">
                  Yunya
                </h2>
                <span href="#" className="font-semibold text-gray-500 lg:mb-0 dark:text-white">
                  CNFT is Community{' '}
                </span>
              </span>
            </a>
            <span className="inline-flex justify-start sm:mt-0">
              <a href="../../" className="text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
            <p className="mx-auto mt-6 text-base leading-relaxed text-gray-500 dark:text-white">
              Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind
              CSS, HTML &amp; Next.js.
            </p>
          </div>
          {/*  */}

          {/*  */}
          <div className="flex flex-col w-full max-w-lg mb-12 text-left lg:mx-auto">
            <a href="../../" className="inline-flex items-center w-full mb-4">
              <img
                alt="blog"
                src={Ryu}
                className="flex-shrink-0 object-cover object-center w-32 h-32 rounded-full"
              />
              <span className="flex flex-col flex-grow pl-3">
                <h2 className="text-sm font-semibold tracking-widest text-babyBlue dark:nightBlue uppercase">
                  Ryu Goto
                </h2>
                <span href="#" className="font-semibold text-gray-500 lg:mb-0 dark:text-white">
                  Otodojo Nodes
                </span>
              </span>
            </a>
            <span className="inline-flex justify-start sm:mt-0">
              <a href="../../" className="text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
            <p className="mx-auto mt-6 text-base leading-relaxed text-gray-500 dark:text-white">
              Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind
              CSS, HTML &amp; Next.js.
            </p>
          </div>
          {/*  */}

          {/*  */}
          <div className="flex flex-col w-full max-w-lg mb-12 text-left lg:mx-auto">
            <a href="../../" className="inline-flex items-center w-full mb-4">
              <img
                alt="blog"
                src={Kriss}
                className="flex-shrink-0 object-cover object-center w-32 h-32 rounded-full"
              />
              <span className="flex flex-col flex-grow pl-3">
                <h2 className="text-sm font-semibold tracking-widest text-babyBlue dark:nightBlue uppercase">
                  Kriss Baird
                </h2>
                <span href="#" className="font-semibold text-gray-500 lg:mb-0 dark:text-white">
                  Project Catalyst
                </span>
              </span>
            </a>
            <span className="inline-flex justify-start sm:mt-0">
              <a href="../../" className="text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
            <p className="mx-auto mt-6 text-base leading-relaxed text-gray-500 dark:text-white">
              Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind
              CSS, HTML &amp; Next.js.
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};
export default Speakers;
