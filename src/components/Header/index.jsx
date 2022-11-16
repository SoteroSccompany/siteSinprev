import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  XMarkIcon,

} from '@heroicons/react/24/outline'

import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Bar from '../Bar'

const solutions = [
  {
    name: 'Editais de convocação',
    href: '/edital',

  },
  {
    name: 'Enquetes',
    href: '#',
  },
  {
    name: 'Estatuto',
    href: '/estatuto',
  },
  {
    name: 'Votação',
    href: '#',
  },
]

const institucional = [
  {
    name: 'Quem somos',
    href: '/about',

  },
  {
    name: 'O sinprev',
    href: '/institucional',
  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const acoes = () => {
  window.location.href = "https://sinprev.com.br/informativo.pdf"
}

const Header = () => {
  return (
    <>
      <Bar />
      <Popover className=" relative  bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex pb-12 items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start  flex-1 ">
              <i href="#" className='w-[150px]'>
                <span className="sr-only">Your Company</span>
                <img
                  className=""
                  src="https://sinprev.com.br/images/logo-sinprev-resp.png"
                  alt=""
                />
              </i>
            </div>
            <div className="-my-2 -mr-2 ls:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#0F4799] p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden  space-x-10 ls:flex w-[80%]">

              <Link to="/" className="text-base font-medium text-gray-500 hover:border-b-[5px] pt-3 lg:ml-[10%] border-[#389ad5]">
                HOME
              </Link>

              <Popover className="relative ">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white pt-3 text-base font-medium hover:border-b-[5px] ml-[10%] border-[#389ad5]'
                      )}
                    >
                      <span>INSTITUCIONAL</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {institucional.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >

                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative ">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white pt-3 text-base font-medium hover:border-b-[5px] ml-[10%] border-[#389ad5]'
                      )}
                    >
                      <span>TRANSPARÊNCIA</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >

                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link onClick={acoes} className="text-base font-medium text-gray-500  hover:border-b-[5px] pt-3 ml-[10%] border-[#389ad5]">
                AÇÕES JUDICIAIS
              </Link>
              <Link to="/faq" className="text-base font-medium text-gray-500  hover:border-b-[5px] pt-3 ml-[10%] border-[#389ad5]">
                FAQ
              </Link>

            </Popover.Group>
            <div className="hidden  pr-16 items-center justify-end ls:flex mt-2  lg:w-0">
              <Link
                to="/filiate"
                className="ml-8 inline-flex text-center  h-[50px] text-[21px] items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-[#016A1C] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
              >
                <span className='w-[110px]'>
                  Associe-se
                </span>
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 z-[100] top-0 origin-top-right transform p-2 transition ls:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://sinprev.com.br/images/logo-sinprev-resp.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only ">Close menu</span>
                      <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {institucional.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >

                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </Link>
                    ))}
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >

                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div>
                  <Link
                    to="/filiate"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                  >
                    Associe-se
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}

export default Header;