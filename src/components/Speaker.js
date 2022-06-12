import React from 'react';
import Yunya from '../images/Yunya.png';
import Ryu from '../images/Ryu.png';
import Kriss from '../images/Kriss.png';

const Speakers = () => {
  return (
    <section id="speakerArea">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="mb-12 pb-4 border-b border-gray-600">
          <h3 className="text-xl font-semibold leading-6 text-gray-800 dark:text-white">
            Speakers
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/*  */}
          <div className="flex flex-col w-full max-w-lg mb-12 text-left lg:mx-auto">
            <div className="inline-flex items-center w-full mb-4">
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
            </div>
            <span className="inline-flex justify-start sm:mt-0">
              {/* Facebook Icon */}
              {/* <a href="../../" className="text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a> */}
              {/* Twitter Icon */}
              <a
                href="https://twitter.com/blustyuri1?s=21&t=J4zOrUYXiUYjlf6H0dK0rA"
                className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
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
              {/* Insta Icon */}
              {/* <a href="../../" className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
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
              </a> */}
              {/* Discord Icon */}
              <a
                href="https://discord.com/invite/5TnyMrHGb9"
                className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
              {/*  */}
            </span>
            <p className="mx-auto mt-6 text-base leading-relaxed text-gray-500 dark:text-white">
              Founder of CNFT is Community, The East Meets West CNFT Festival, and Cardano community
              leader in Japan.
            </p>
          </div>
          {/*  */}

          {/*  */}
          <div className="flex flex-col w-full max-w-lg mb-12 text-left lg:mx-auto">
            <div className="inline-flex items-center w-full mb-4">
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
            </div>
            <span className="inline-flex justify-start sm:mt-0">
              <a
                href="https://twitter.com/OtodojoNodes?s=20&t=jPGu4jes4tziByGm03-fgQ"
                className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
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
              {/* Discord Icon */}
              <a
                href="https://discord.com/invite/De3bR9SHuU"
                className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
              {/*  */}
            </span>
            <p className="mx-auto mt-6 text-base leading-relaxed text-gray-500 dark:text-white">
              Co-founder of Otodojo Nodes, martial artist, gamer, and fururist tech entrepreneur.
            </p>
          </div>
          {/*  */}

          {/*  */}
          <div className="flex flex-col w-full max-w-lg mb-12 text-left lg:mx-auto">
            <div className="inline-flex items-center w-full mb-4">
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
            </div>
            <span className="inline-flex justify-start sm:mt-0">
              <a
                href="https://twitter.com/krissbaird"
                className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
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
              <a
                href="https://www.linkedin.com/in/krissbaird"
                className="ml-3 text-babyBlue dark:text-nightBlue hover:text-blue-200 dark:hover:text-blue-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
            <p className="mx-auto mt-6 text-base leading-relaxed text-gray-500 dark:text-white">
              Product Manager of The Project Catalyst Investment Fund at Input Output (IOHK)
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};
export default Speakers;
