import { Link } from "react-router-dom";
import Footer from "../../components/Foooter";
import Header from "../../components/Header";
import { CalendarIcon } from "@heroicons/react/24/outline"
import PdfReader from '../../components/PdfRead'

import { Disclosure } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'


const faqs = [
    {
        id: 1,
        question: "Ata de fundação - 16/01/2016",
        link: 'http://localhost:3000/estatutos/Ata-de-Fundacao-16-01-2016-pag.-1.pdf',
    },
    {
        id: 2,
        question: "Estatuto aprovado - 16/03/2016",
        link: 'http://localhost:3000/estatutos/Estatuto-aprovado-em-16-03-2016-pag.-1.pdf',
    }
    , {
        id: 3,
        question: "Ata de alteração do estatuto de 16-03/2016 a 21/06/2016",
        link: 'http://localhost:3000/estatutos/Ata-de-alteracao-do-Estatuto-de-16-03-2016-em-21-06-2016-pag.-1.pdf',
    }
    , {
        id: 4,
        question: "Ata de Ratificação e Retificação do Estatuto de Fundação de 16/03/2016 em 25/04/2018",
        link: 'http://localhost:3000/estatutos/Ata-de-Ratificacao-e-Retificacao-do-Estatuto-de-Fundacao-de-16-03-2016-em-25-04-2018-pag.-1.pdf',
    },
    {
        id: 5,
        question: "Estatuto Aprovado em 25/04/2018",
        link: 'http://localhost:3000/estatutos/Estatuto-Aprovado-em-25-04-2018-pag.-1.pdf',
    },
    {
        id: 6,
        question: "Ata de alteração do Estatuto em 18/12/2018",
        link: 'http://localhost:3000/estatutos/Ata-de-alteracao-do-Estatuto-em-18-12-2018-pag.-1.pdf',
    },
    {
        id: 7,
        question: "Ata de alteração em 17/01/2020",
        link: 'http://localhost:3000/estatutos/Alteracao-do-Estatuto-17-01-2020-pag.-1.pdf',
    },
    {
        id: 8,
        question: "Ata de posse em 17/03/2020",
        link: 'http://localhost:3000/estatutos/20200317-Ata-de-Posse-1.pdf',
    },
    {
        id: 9,
        question: "Ata AGE realizada em 01/03/2021",
        link: 'http://localhost:3000/estatutos/Ata-AGE-01-03-2021.pdf',
    },
    {
        id: 10,
        question: "Ata AGE realizada em 01/03/2021 – renúncia e autorizações",
        link: 'http://localhost:3000/estatutos/Ata-AGE-renuncia-e-autorizacoes-1.pdf',
    },
    {
        id: 11,
        question: "Estatuto consolidado em 17/01/2021",
        link: 'http://localhost:3000/estatutos/estatuto-consolidado-17-01.pdf',
    }
    // More questions...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const edital = () => {
    window.location.href = 'https://sinprev.com.br/estatuto-2022.pdf'
}

export default function Istitucional() {
    return (
        <div>
            <Header />

            <div className="flex flex-col justify-center items-center p-[67px] bg-[url('https://sinprev.com.br/images/bg-afiliese-copy-1.webp')]">
                <h1 className="flex sm:flex-row  flex-col items-center junstify-center font-['Be Vietnam Bold'] font-bold text-white text-[50px] sm:text-[45px] w-full sm:w-[22%] ml-[8%]">Estatuto</h1>
                <div className="sm:flex flex-row hidden">
                    <Link to="/" className="text-gray-200">Pagina inicial</Link>
                    <span className="text-white ml-2 "> &rsaquo; Institucional </span>
                </div>
            </div>
            <div className="flex flex-col items-center p-[50px] pb-[50px] bg-[#0000]">
                <h1 className=" font-['Be Vietnam Bold'] text-center mr-6 sm:mr-[0%]">Veja aqui o Estatuto do Sindicato Nacional dos Participantes das Entidades Fechadas de Previdência Complementar (SINPREV) e alterações.</h1>
                <button className="flex items-center mt-16 flex-col mr-[19%] sm:mr-[4%]" onClick={edital}>
                    <p className="font-['Poppins-Semi Bold']  sm:text-[34px] text-[18px]  text-[#133067] mt-6 ">Estatuto Vigente</p>
                    <img src="https://sinprev.com.br/images/pdf-copy-2.webp" className="sm:w-[30%] w-[50%] mt-8" alt="" />
                    <div className="bg-[#379AD5] h-px w-[55%] mt-6 h-[7px]"></div>
                    <span className="flex flex-row items-center justify-center mt-3 mr-5">
                        <CalendarIcon className="sm:w-[7%] w-[12%] sm:mt-5 mt-[0%]" />
                        <h1 className="mt-0 sm:mt-5 ml-2">25/05/2022</h1>
                    </span>
                    <div>

                    </div>
                </button>
            </div>

            <div className="mt-4 sm:ml-16 sm:mr-16 sm:p-16 p-8">

                <div className="flex flex-col justify-center">
                    <h2 className="text-left text-3xl font-['Be Vietnam Bold'] font-bold tracking-tight text-gray-900 sm:text-[25px]">
                        Atas e Documentos
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


            <Footer />
        </div>
    )
}