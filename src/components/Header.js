import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },
];

export default function Header() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen px-2 sm:px-6 lg:px-8 border-b-2 border-black border-solid">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-[54px] w-auto lg:hidden items-center"
                    src="/images/logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-[54px] w-auto lg:block items-center"
                    src="/images/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 flex justify-center items-center sm:flex">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        end
                        className={({ isActive }) => {
                          return (
                            "px-3 py-2 rounded-md text-base font-medium no-underline" +
                            (!isActive
                              ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                              : " bg-white text-black ")
                          );
                        }}
                        to={item.href}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-5">
              {navigation.map((item) => (
                <NavLink
                  end
                  className={({ isActive }) => {
                    return (
                      "px-3 py-2 rounded-md text-base font-medium m-1 no-underline" +
                      (!isActive
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                        : " bg-white text-black ")
                    );
                  }}
                  to={item.href}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
