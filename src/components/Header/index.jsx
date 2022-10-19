import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    DocumentChartBarIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: Squares2X2Icon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: ArrowPathIcon,
    },
    {
        name: 'Reports',
        description: 'Get detailed reports that will help you make more informed decisions ',
        href: '#',
        icon: DocumentChartBarIcon,
    },
]
const institucional = [
    {
        name: 'Quem Somos',
        description: 'Venha conhecer mais um pouco sobre o SINPREV',
        href: '/about',
    },
    {
        name: 'Presidencia & Diretoria',
        description: 'Conheca a diretoria por tras do sinprev', href: '/institucional'
    },
]

const transparencia = [
    {
        name: 'Enquetes',
        description: '',
        href: 'https://www.sinprev.org.br/enquetes/?_ga=2.17760121.1574732978.1658149124-899403804.1652134753&_gl=1*gfuctc*_ga*ODk5NDAzODA0LjE2NTIxMzQ3NTM.*_ga_QKZ2JPXEXX*MTY1ODIzNDI3NS4zMi4xLjE2NTgyMzQyNzguMA..',
    },
    { name: 'Votacao', description: '', href: 'https://sinprev.org.br/assembleia_virtual/' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}





export default function Header() {


    function Url(to) {
        window.location.href = `https://${to}`
    }


    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return (
        <>
            <div className="flex flex-col items-center bg-[#0E1D3D] h-[55px]">
                <div className="flex flex-row justify-center">
                    <div className="flex flex-row font-medium text-white">
                        <h1 className='flex sm:mr-4 mt-2 '><AiOutlineWhatsApp size={20} className='mt-[2px] mr-[4px]' /><a href='https://api.whatsapp.com/send?phone=5531997539083'>(31) 99753-9083</a></h1>
                        <h1 className='flex  sm:mr-4 mt-2'><AiOutlineWhatsApp size={20} className='mt-[2px] mr-[4px]' /><a href='https://api.whatsapp.com/send?phone=5531971366684'>(31) 97136-6684</a> </h1>
                        <h1 className='flex mr-4 mt-2'><AiOutlineWhatsApp size={20} className='mt-[2px] mr-[4px]' /> <a href='https://api.whatsapp.com/send?phone=553198207056'>(31) 9820-7056</a></h1>
                        <h1 className='flex mr-7 mt-2 text-[12px]'><AiOutlineMail size={20} className='mt-[2px] mr-[4px] ' /> contato@sinprev.org.br </h1>

                    </div>
                </div >
            </div >
            <Popover className="relative bg-white p-8">
                <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                    <div>
                        <i href="#" className="flex">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-16"
                                src="https://sinprev.org.br/wp-content/uploads/2022/08/logo-sinprev-resp.png"
                                alt=""
                            />
                        </i>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                        <Popover.Group as="nav" className="flex space-x-10">
                            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900 focus:ring-blue-500">
                                HOME
                            </Link>

                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : 'text-gray-500',
                                                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
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
                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {institucional.map((item) => (
                                                            <Link key={item.name} to={item.href} className="-m-3 block rounded-md p-3 hover:bg-gray-50">

                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>

                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : 'text-gray-500',
                                                'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                                            )}
                                        >
                                            <span>Transparencia</span>
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
                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {transparencia.map((item) => (
                                                            <Link key={item.name} className="-m-3 block rounded-md p-3 hover:bg-gray-50" onClick={() => {
                                                                Url(item.href)

                                                            }}>
                                                                <p className="text-base font-medium text-gray-900" >{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>



                            <Link to="/faq" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                FAQ
                            </Link>

                        </Popover.Group>
                        <div className="flex items-center md:ml-12">
                            <Link
                                to="/filiate"
                                className="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                            >
                                Associe-se
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
                    {
                        /*
                        PAINEL QUANDO ESTA NO MOBILE
                        Painel
                        absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0
                        */
                    }
                    <Popover.Panel focus className="absolute inset-x-0 z-10 top-0  origin-top-right transform p-2 transition md:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://sinprev.org.br/wp-content/uploads/2022/08/logo-sinprev-resp.png"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>

                            {
                                /* Menu responsivo */
                            }
                            <div className="py-6 px-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Home
                                    </Link>
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={classNames(
                                                        open ? 'text-gray-900' : 'text-gray-500',
                                                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                                                    )}
                                                >
                                                    <span>Transparencia</span>
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
                                                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0 w-[190px]">
                                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                {transparencia.map((item) => (
                                                                    <Link key={item.name} className="-m-3 block rounded-md p-3 hover:bg-gray-50" onClick={() => {
                                                                        Url(item.href)

                                                                    }}>
                                                                        <p className="text-base font-medium text-gray-900" >{item.name}</p>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                    <Link to="/faq" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Faq
                                    </Link>
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={classNames(
                                                        open ? 'text-gray-900' : 'text-gray-500',
                                                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
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
                                                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0 w-[190px]" >
                                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                                {institucional.map((item) => (
                                                                    <Link key={item.name} to={item.href} className="-m-3 block rounded-md p-3 hover:bg-gray-50">

                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                </div>
                                <div className="mt-6">
                                    <Link
                                        to="/filiate"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                                    >
                                        Associar-se
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
