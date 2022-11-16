import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import {  AiOutlineMail } from 'react-icons/ai'

const navigation = [
    { name: '(31) 99753-9083', href: 'https://api.whatsapp.com/send?phone=5531997539083&text=Ola!%20', current: false, img: 'http://tubodeensaio.com.br/wp-content/uploads/2022/05/whats-1.png' },
    { name: '(31) 97136-6684', href: 'https://api.whatsapp.com/send?phone=5531971366684&text=Ola!%20', current: false, img: 'http://tubodeensaio.com.br/wp-content/uploads/2022/05/whats-1.png' },
    { name: 'contato@sinprev.org.br', href: 'mailto:contato@sinprev.com.br', current: false, icon: <AiOutlineMail />},
]


export default function Example() {
    return (
        <Disclosure as="nav" className="bg-gray-800 hidden mw:block">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                        <div className="relative flex h-10 items-center pr-6">

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start pr-[12%] mr-[5%]">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className='text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                <div className='flex items-center '>
                                                <span className='mr-3 text-[15px]'>{item.name}</span>
                                                {
                                                    item.img ? <img src={item.img} alt="whatsapp" className="w-4 h-4" /> : item.icon
                                                }
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6  sm:pr-0">
                                <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    
                                </button>

                                
                            </div>
                        </div>
                    </div>

                   
                </>
            )}
        </Disclosure>
    )
}
