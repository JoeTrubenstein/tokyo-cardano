/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import icon from '../images/darumaicon-07.png';
import scrollTo from 'gatsby-plugin-smoothscroll';

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// }
const navigation = [
  { name: 'Home', href: '../../', areaName: '#topArea', current: false },
  { name: 'Speakers', href: '../../', areaName: '#speakerArea', current: false },
  { name: 'Blog', href: '../../', areaName: '#blogArea', current: false }
];
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar({ specialNav }) {
  const [darkMode, setDarkMode] = useState(false);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect((darkMode) => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setDarkMode(darkMode);
    } else {
      localStorage.theme = 'light';
      setDarkMode(!darkMode);
    }
  }, []);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div id="topArea" className="min-h-full">
        <Disclosure as="nav" className="dark:bg-nightBack bg-white border-b dark:border-slate-600">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-8" src={icon} alt="Workflow" />
                    </div>
                    <div className="hidden md:block">
                      {specialNav ? (
                        <div className="ml-10 flex items-baseline space-x-4">
                          <a
                            href={'../../'}
                            key={'homeonly'}
                            className="dark:text-white text-gray-700 dark:text-white hover:bg-babyBlue hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Home
                          </a>
                        </div>
                      ) : (
                        <div className="ml-10 flex items-baseline  space-x-4">
                          {navigation.map((item) => (
                            <button
                              onClick={() => scrollTo(item.areaName)}
                              key={item.name}
                              className={classNames(
                                item.current
                                  ? 'bg-babyBlue text-white'
                                  : 'text-gray-700 dark:text-white hover:bg-babyBlue hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}>
                              {item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        className="text-babyBlue dark:text-nightBlue"
                        onClick={(e) => {
                          e.preventDefault();
                          if (localStorage.theme === 'dark') {
                            localStorage.theme = 'light';
                            document.documentElement.classList.remove('dark');
                            setDarkMode(!darkMode);
                            console.log("you toggled the theme")
                          } else if (localStorage.theme === 'light') {
                            localStorage.theme = 'dark';
                            document.documentElement.classList.add('dark');
                            setDarkMode(!darkMode);
                            console.log("you toggled the theme")
                          } else {
                            localStorage.theme = 'light';
                            console.log("setting theme to light")
                          }
                        }}>
                        {darkMode ? (
                          <svg
                            className="w-8 h-8 md:w-10 md:h-10 text-babyBlue dark:text-nightBlue"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-8 h-8 md:w-10 md:h-10 text-babyBlue dark:text-nightBlue"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        )}
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        {/* <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div> */}
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95">
                          {/* <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items> */}
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex dark:text-white items-center justify-center p-2 rounded-md focus:outline-none  ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="dark:text-white block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                {specialNav ? (
                  <div className="px-2 text-center pt-2 pb-3 space-y-1 sm:px-3">
                    <Disclosure.Button
                      key="homeonlykeybro"
                      as="a"
                      href="../../"
                      className="text-babyBlue dark:text-nightBlue text-gray-700 dark:text-white
                                      block px-3 py-2 rounded-md font-medium">
                      Home
                    </Disclosure.Button>
                  </div>
                ) : (
                  <div className="m-0 px-2 text-center flex flex-col pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((item) => (
                      <button
                        onClick={() => scrollTo(item.areaName)}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? 'text-babyBlue dark:text-nightBlue'
                            : 'text-gray-700 dark:text-white',
                          'block px-3 py-2 rounded-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}

                <div className="pt-4 pb-3">
                  <div className="flex px-5 justify-center">
                    {/* <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>s
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div> */}
                    {/* <button
                      type="button"
                      className="ml-auto bg-gray-800 justify-center flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                    </button> */}
                    <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (localStorage.theme === 'dark') {
                            localStorage.theme = 'light';
                            document.documentElement.classList.remove('dark');
                            setDarkMode(!darkMode);
                            console.log("you toggled the theme")
                          } else if (localStorage.theme === 'light') {
                            localStorage.theme = 'dark';
                            document.documentElement.classList.add('dark');
                            setDarkMode(!darkMode);
                            console.log("you toggled the theme")
                          } else {
                            localStorage.theme = 'light';
                            console.log("setting theme to light")
                          }
                        }}>
                      {darkMode ? (
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-babyBlue dark:text-nightBlue"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-babyBlue dark:text-nightBlue"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  {/* <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>

          </div>
        </main> */}
      </div>
    </>
  );
}
