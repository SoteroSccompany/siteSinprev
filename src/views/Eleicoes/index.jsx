import Header from '../../components/Header'
import Footer from '../../components/Foooter'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/outline'

import {
    BoltIcon,
    GlobeAltIcon,
    ScaleIcon,
    ArchiveBoxArrowDownIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'

const transferFeatures = [
    {
        id: 1,
        name: 'Informações disponivies 24 horas',
        description:
            'Fique por dentro e atualizado da eleição da nova diretoria da SINPPREV.',
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: 'Tenha acesso ao Edital',
        description:
            'Clique no botao ao lado e acesse o edital das eleições.',
        icon: ScaleIcon,
    },
]




const faqs = [
    {
        id: 1,
        question: "Documentos para inscrição",
        link: 'https://sinprev.com.br/eleicoes/Documentos-necessários-para-inscrição.pdf'  ,
    },
    {
        id: 2,
        question: "Requerimento para inscrição de chapa",
        link: 'https://sinprev.com.br/eleicoes/Requerimento-chapa.docx'  ,
    }
    ,{
        id: 3,
        question: "Requerimento para inscrição de chapa conselho de ética",
        link: 'https://sinprev.com.br/eleicoes/Requerimento-etica.docx'  ,
    }
    ,{
        id: 4,
        question: "Requerimento para inscrição de chapa conselho de fiscal",
        link: 'https://sinprev.com.br/eleicoes/Requerimento-fiscal.docx'  ,
    },
    {
        id: 5,
        question: "Errata do edital",
        link: 'https://sinprev.com.br/eleicoes/Errata 09-11-2022.pdf',
    }
    // More questions...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const dowload = () => {
    window.location.href = 'https://sinprev.com.br/Edital-de-convocação-eleição.pdf'
}



const Eleicoes = () => {
    return (
        <div className='content'>
            <Header />
            <div className='flex flex-col'>
                <div className="justify-center overflow-hidden bg-gray-50 py-16 lg:py-24">
                    <div className=" relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <svg
                            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
                            width={404}
                            height={784}
                            fill="none"
                            viewBox="0 0 404 784"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                        </svg>

                        <div className="relative">
                            <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                Acompanhe por aqui a eleição da nova diretoria do SINPREV
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
                                Nesta pagina voce poderá acompanhar a eleição da nova diretoria do SINPREV
                            </p>
                        </div>
                        {
                            /*daspidjaosipd */
                        }

                        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                            <div className="relative">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Atualização 24 horas </h3>
                                <dl className="mt-10 space-y-10">
                                    {transferFeatures.map((item) => (
                                        <div key={item.id} className="relative">
                                            <dt>
                                                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                                            </dt>
                                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                                <svg
                                    className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                                    width={784}
                                    height={404}
                                    fill="none"
                                    viewBox="0 0 784 404"
                                >
                                    <defs>
                                        <pattern
                                            id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                                </svg>
                                <button onClick={dowload} type="button" className="ml-16 inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out sm:w-96 w-[60%] h-16">
                                    <div className='flex flex-col'>
                                        <div>
                                            Baixar Edital
                                        </div>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                            className="w-3 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                                            </path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>


                        <svg
                            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
                            width={404}
                            height={784}
                            fill="none"
                            viewBox="0 0 404 784"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                        </svg>


                    </div>
                </div>

                <div className="mt-4 sm:ml-16 sm:mr-16 sm:p-16 p-8">

                <div className="flex flex-col justify-center">
                    <h2 className="text-left text-3xl font-['Be Vietnam Bold'] font-bold tracking-tight text-gray-900 sm:text-[25px]">
                        Documentação e requerimentos
                    </h2>
                    <dl className="">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.id} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg flex ">
                                            <span className=" w-[50px] h-[80px] bg-[#1364AE] flex flex-col justify-center items-center text-[35px] text-[#FFFF]">{faq.id}</span>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                <span className="font-medium text-gray-900 mt-[2%] ml-[2%]">

                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <PlusIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="pr-12 mb-10 ">
                                            <a className=" ml-[8%]  text-[#379ad5] hover:text-gray-500" href={faq.link}>Clique no link para acessar a documentação</a>
                                        </Disclosure.Panel>

                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>

            </div>

            </div>


            <Footer />
        </div>
    )
}

export default Eleicoes