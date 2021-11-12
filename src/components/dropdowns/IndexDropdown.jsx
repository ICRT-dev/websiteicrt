import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function IndexDropdown() {
  return (
    <div className="text-center">
      <Menu as="div" className="relative inline-block">
        <div>
          <Menu.Button className="inline-flex justify-center my-1 font-bold
                            text-gray-700
                            dark:text-gray-200
                            hover:text-blue-500
                            dark:hover:text-blue-400
                            md:mx-4 md:my-0 duration-300 border-b-4 py-4 border-transparent hover:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            About
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 mt-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-36 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none duration-300">
            <div className="px-1 py-1 duration-300">
              <Menu.Item>
                {({ active }) => (
                  <a href="#team"
                    className={`${
                      active ? 'bg-violet-500 text-blue-500' : 'text-gray-700'
                    } group flex rounded-md items-center duration-300 font-bold  w-full px-2 py-2`}
                  >
                    {/* {active ? (
                      <EditActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )} */}
                    Team
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-blue-500' : 'text-gray-700'
                    } group flex rounded-md items-center duration-300 font-bold  w-full px-2 py-2`}
                  >
                    
                    Structure
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-blue-500' : 'text-gray-700'
                    } group flex rounded-md items-center duration-300 font-bold  w-full px-2 py-2`}
                  >
                    
                    Member
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
