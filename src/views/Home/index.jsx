import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../../components/Foooter'

export default function Home() {

    const history = useNavigate()

    const [descNumUm, setDescNumUm] = useState({ num: 0, content: '' })
    const [descNumDois, setDescNumDois] = useState({ num: 0, content: '' })
    const [descNumTres, setDescNumTres] = useState({ num: 0, content: '' })
    const [descNumQuatro, setDescNumQuatro] = useState({ num: 0, content: '' })

    const dateNum = [
        {
            id: 1,
            num: 1,
            content: 'Único sindicato que representa os assitidos pela previdência complementar',
        },
        {
            id: 2,
            num: 26,
            content: 'Sindicato que mais cresce no Brasil',
        },
        {
            id: 3,
            num: 100,
            content: 'Mais de 100 ações judiciasi em defesa dos aposentados',
        },
        {
            id: 4,
            num: 2697,
            content: 'Valor de nossa mensalidade',
        }
    ]

    const dataValues = [
        {
            id: 1,
            src: 'http://tubodeensaio.com.br/wp-content/uploads/2022/07/pioneirismo.webp',
            title: 'Pioneirismo e vanguarda',
            desc: 'O SINPREV surgiu do vácuo sindical, pela falta de uma entidade sindical com finalidade especifica de defesa dos participantes dos fundos de pensão. Nossa luta é atemporal, lutamos por nós, por aqueles que nos antecederam e para que a luta de nossos sucessores seja menos árdua.'
        },
        {
            id: 2,
            src: 'http://tubodeensaio.com.br/wp-content/uploads/2022/07/juridico.webp',
            title: 'Garantia de respaldo jurídico',
            desc: 'O SINPREV em sua luta diária para recuperar o patrimônio dos Participantes das Entidades Fechadas de Previdência Complementar busca sempre parcerias robustas e embasamento para que as ações sejam conduzidas da melhor forma possível.  O SINPREV sempre atuará na proteção do interesse daqueles a quem representa, assumindo a liderança em ações que visem a recuperação do nosso patrimônio.'

        },
        {
            id: 3,
            src: 'http://tubodeensaio.com.br/wp-content/uploads/2022/07/beneficios.webp',
            title: 'Acesso a Benefícios',
            desc: 'O SINPREV busca criar benefícios, transpondo as vantagens sindicais para outros aspectos importantes da vida dos associados, como em educação e saúde. Através de planos de saúde, seguro de vida e planos PET. São descontos permanentes ou temporários, promoções e demais ações pontuais que são promovidas de maneira constante em benefício dos associados.',
        },
        {
            id: 4,
            src: 'http://tubodeensaio.com.br/wp-content/uploads/2022/07/fake-news.webp',
            title: 'Fonte de informações',
            desc: 'Na era da informação, o acesso a conteúdo de alta qualidade com severo filtro anti- Fake News é de suma importância para que os associados encontrem notícias relevantes sobre os fundos de pensão. Assim como, promover lives com conteúdos de extrema relevância para os associados.'
        },
        {
            id: 5,
            src: 'http://tubodeensaio.com.br/wp-content/uploads/2022/07/grupo.webp',
            title: 'Possibilidade de negociações coleticas',
            desc: 'A ação de natureza coletiva, em geral, como a ação civil pública e o mandado de segurança coletivo, trazem vantagens relacionadas com a economia processual e com a celeridade do Poder Judiciário, de modo a evitar a propositura de ações de mesma natureza, promovendo a rápida consolidação jurisprudencial.'
        },
        {
            id: 6,
            src: 'http://tubodeensaio.com.br/wp-content/uploads/2022/07/forca.webp',
            title: 'Aumento da força da caregoria',
            desc: 'Sabemos que a união faz a força e ser associado ao SINPREV fortalece a nossa luta. Juntos na luta pela recuperação do nosso patrimônio.'
        }
    ]


    const news = [
        {
            id: 1,
            title: 'Recuperação dos fundos de pensão',
            desc: 'O SINPREV está trabalhando para a divulgação de uma proposta elaborada pelo presidente Robledo Coimbra para recuperação dos Fundos de Pensão'
        },
        {
            id: 2,
            title: 'Ofício enviado pelo SINPREV à Previc sobre a Petros',
            desc: 'O SINPREV encaminhou à Superintendência Nacional de Previdência Complementar (PREVIC) um ofício pedindo esclarecimentos sobre a aprovação das alterações propostas ao regulamento do Plano Petros do Sistema Petrobrás (PPSP).'
        },
        {
            id: 3,
            title: 'Área do Associado do site do SINPREV instável',
            desc: 'Olá, associado! Gostaríamos de informar que a área do associado apresenta instabilidade, pois o SINPREV está passando por uma restruturação tecnológica'
        }
    ]

    const advogados = [
        {
            id: 1,
            esc1: 'https://sinprev.com.br/images/araujo.jpg',
            esc2: 'https://sinprev.com.br/images/bertoldo.jpg',
            esc3: 'https://sinprev.com.br/images/gilberto.jpg',
            esc4: 'https://sinprev.com.br/images/ervedosa.jpg',
            active: 'active',
        },
        {
            id: 2,
            esc1: 'https://sinprev.com.br/images/amaral.webp',
            esc2: 'https://sinprev.com.br/images/silva-netto.jpg',
            esc3: 'https://sinprev.com.br/images/araujo.jpg',
            esc4: 'https://sinprev.com.br/images/bertoldo.jpg',
            active: '',
        },
        {
            id: 3,
            esc1: 'https://sinprev.com.br/images/gilberto.jpg',
            esc2: 'https://sinprev.com.br/images/ervedosa.jpg',
            esc3: 'https://sinprev.com.br/images/amaral.webp',
            esc4: 'https://sinprev.com.br/images/silva-netto.jpg',
            active: '',
        }
    ]


    const route = () => {
        history("/about")

    }

    const filiate = () => {
        
        history("/filiate")

    }


    useEffect(() => {
        dateNum.forEach(item => {
            if (item.id === 1) {
                setDescNumUm(item)
            }
            if (item.id === 2) {
                setDescNumDois(item)
            }
            if (item.id === 3) {
                setDescNumTres(item)
            }
            if (item.id === 4) {
                setDescNumQuatro(item)
            }

        })

    }, [])


    return (
        <>
            <div className='content '>
                <Header />

                <div className='carrousel flex sm:mb-[3%]   '>
                    <div
                        id="carouselDarkVariant"
                        className="carousel slide carousel-fade carousel-dark relative"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner relative w-full overflow-hidden ">
                            <div className="carousel-item active relative float-left w-full ">
                                <img
                                    src="https://sinprev.com.br/images/banner-01.jpg"
                                    className="hidden w-full sm:block max-w-full h-auto"
                                    alt="Motorbike Smoke"
                                />
                                <img
                                    src="https://sinprev.com.br/images/banner-1-mobile.jpg"
                                    className="block w-full sm:hidden"
                                    alt="Motorbike Smoke"
                                />
                            </div>


                            <div className="carousel-item relative float-left w-full ">
                                <img
                                    src="https://sinprev.com.br/images/banner-02.jpg"
                                    className="hidden w-full h-full sm:block"
                                    alt="Woman Reading a Book"
                                />
                                <img
                                    src="https://sinprev.com.br/images/banner-02-mobile.jpg"
                                    className="block w-full h-full sm:hidden"
                                    alt="Woman Reading a Book"
                                />
                            </div>
                        </div>

                        <button
                            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselDarkVariant"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row mt-[3%] pb-10 max-[640px]:items-center ≈'>
                    <img
                        src="https://sinprev.com.br/images/quem-somos-home.webp"
                        alt="..."
                        className='md:w-[35%] ls:w-[45%] w-[75%] mt-6 ml-8 md:ml-9'
                    />

                    <div className='flex flex-col ml-12  pb-8 mt-[8%] md:mt-[10%]'>
                        <h2 className='font-serif pb-1 text-[20px] font["Popins"]'>Quem Somos</h2>
                        <h1 className=''>
                            <span className='text-[35px] md:text-[47px] lh:text-[60px] text-[#313131] font-["Be Vietnam Bold"] font-bold '>Conheça o <br /></span>
                            <span className='text-[35px] md:text-[37px] lh:text-[55px] text-[#1565AE] font-["Be Vietnam Bold"] font-bold'>SINPREV</span>
                        </h1>
                        <p className='w-[90%] text-star font-["Popins"] text-[20px]'>
                            Somos um sindicato que representa de forma ética os interesses dos aposentados vinculados a entidades fechadas de previdência complementar no Brasil.
                        </p>
                        <div className=''>
                            <button type="button" onClick={route}  className="w-[55%] sm:w-[35%]  h-[60px] mt-8 px-2 py-2.5 bg-[#036B1D] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">SAIBA MAIS</button>
                        </div>
                    </div>
                </div>

                <div className='bg-[url("https://sinprev.com.br/images/bg-numeros-copy.webp")] bg-right pb-16'  >
                    <div className='flex flex-col justify-center items-center  text-center pt-[25%] sm:pt-[5%]'>
                        <h1 className='text-white font-["Popins"] text-[22px]'>Porque se afiliar</h1>
                        <span className='text-white font-["Popins"] text-[54px] mb-0'>Veja os nossos números</span>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-center items-center mr-[5%]'>
                        <div className='flex flex-col items-center  pt-5 ml-[5%]'>
                            <span className='text-white font-["Be Vietnam Bold"] text-[70px] mb-0 text-[#379AD5]'>{descNumUm.num}</span>
                            <span className='text-white font-["Be Vietnam Bold"] text-[22px] w-[55%] text-center'>{descNumUm.content}</span>
                        </div>
                        <div className='flex flex-col items-center  pt-5 mr-[5%]'>
                            <span className='text-white font-["Be Vietnam Bold"] text-[70px] mb-0 text-[#379AD5]'>{descNumDois.num}</span>
                            <span className='text-white font-["Be Vietnam Bold"] text-[22px] w-[55%] text-center'>{descNumDois.content}</span>
                        </div>
                        <div className='flex flex-col items-center  pt-5 mr-[5%]'>
                            <span className='text-white font-["Be Vietnam Bold"] text-[70px] mb-0 text-[#379AD5]'>{descNumTres.num}</span>
                            <span className='text-white font-["Be Vietnam Bold"] text-[22px] w-[55%] text-center'>{descNumTres.content}</span>
                        </div>
                        <div className='flex flex-col items-center  pt-5 mr-[5%]'>
                            <span className='text-white font-["Be Vietnam Bold"] text-[70px] mb-0 text-[#379AD5]'>{descNumQuatro.num / 100}</span>
                            <span className='text-white font-["Be Vietnam Bold"] text-[22px] w-[55%] text-center'>{descNumQuatro.content}</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center'>
                    <div className='title flex flex-col justify-center items-center pt-16'>
                        <h1 className='text-blue font-["Popins"] text-[20px]'>Porque se afiliar</h1>
                        <div className='flex flex-col sm:flex-row justify-center items-center p-2'>
                            <span className='text-[#133268] font-["Be Vietnam Bold"] font-bold text-[55px] mb-0'>Nossos </span>
                            <span className='text-[#379ad5] font-["Be Vietnam Bold"] text-[55px] font-bold mb-0 pl-6'>Diferenciais</span>
                        </div>
                        <p className='text-["Be Vietnam Bold"] text-[18px] pb-8 text-center pr-6 pl-6'>
                            O Sinprev, defende os interesses de aposentados vinculados a entidades fechadas de previdência complementar no Brasil.
                        </p>

                    </div>
                    <div className='body flex flex-row justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-6 pb-6'>

                            {
                                dataValues.map(item => {
                                    return (
                                        <div key={item.id} className='col-span-6 md:col-span-2 mr-[18%]'>
                                            <div className='flex flex-row items-center justify-start w-[80%] mt-6 ml-[14%]'>
                                                <img src={item.src} alt="..." className='w-[50px] h-[50px]' />
                                                <span className='text-[#133268] font-["Be Vietnam Bold"] font-bold text-[20px] mb-0 ml-4'>{item.title}</span>
                                            </div>
                                            <div className='flex flex-row pl-[10%] w-[90%] mt-6 ml-[15%] pb-6'>
                                                <p className='text-[#133268] font-["Be Vietnam Bold"] font-bold text-[15px] mb-0 ml-4 text-justify'>{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className=' bg-[url("https://sinprev.com.br/images/bg-afiliese-copy-1.webp")] bg-right pb-16'  >
                    <div className='flex flex-col justify-center items-center text-center pt-[10%] sm:pt-[5%]'>
                        <h1 className='flex flex-col sm:flex-row text-white font-["Be Vietnam Bold"] text-[38px]  '>Associe-se agora ao
                            <span className='text-white font-["Be Vietnam Bold"] text-[39px] mb-0 pl-[0.4em]'>SINPREV</span>
                        </h1>
                        <button onClick={filiate} className='bg-[#068e27] text-white font-["Be Vietnam Bold"] text-[20px] sm:w-[30%] sm:h-[50px] h-[60px] w-[190px]  mt-6  rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'>Quero me associar</button>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center text-center pb-[35%] sm:pb-[4%] pt-[5%] sm:pt-[0%]'>
                    <div className='flex flex-col justify-center items-center text-center pt-[10%] sm:pt-[5%]'>
                        <h1 className='text-[#133268] font-["Be Vietnam Bold"] font-bold text-[38px] sm:text-[48px] mr-[2%] sm:mr-[0%] pb-12'>Últimas <span className='text-[#389AD5]'>Notícias</span></h1>
                        <div className='grid grid-cols-1 sm:grid-cols-6 ml-[5%]'>

                            {
                                news.map(item => {
                                    return (
                                        <div key={item.id} className='col-span-6 md:col-span-2 '>
                                            <div className='w-[80%] flex flex-col  '>
                                                <span className='text-[black] font-["Be Vietnam Bold"] font-bold text-[22px] mb-0 ml-4 text-justify pb-4'>{item.title}</span>
                                                <p className='text-[black] font-["Be Vietnam Bold"]  text-[15px] mb-0 ml-4 text-justify'>{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className=' bg-[url("https://sinprev.com.br/images/bg-escritorios.webp")] bg-right pb-16'  >
                    <div className='flex flex-col justify-center items-center text-center pt-[10%] sm:pt-[5%]'>
                        <h1 className='flex flex-col sm:flex-row text-black font-["Be Vietnam Bold"] font-bold   '>Escritórios de Advocacia </h1>
                        <h1 className='flex flex-col sm:flex-row text-[#133268] font-["Be Vietnam Bold"] font-bold text-[42px]'>Escritórios <span className='text-[#389ad5] ml-3'>parceiros</span>
                        </h1>
                        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div className="carousel-inner relative w-full overflow-hidden">
                                {
                                    advogados.map(item => {

                                        if (item.id === 1) {
                                            return (
                                                <div key={item.id} className="carousel-item active relative float-left w-full">
                                                    <div className=" px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                                                        <div className="flex flex-wrap -m-1 md:-m-2">
                                                            <div className="flex flex-wrap w-1/2 sm:w-1/4">
                                                                <div className="w-full p-1 md:p-2">
                                                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                                        src={item.esc1} />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap w-1/2 sm:w-1/4">
                                                                <div className="w-full p-1 md:p-2">
                                                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                                        src={item.esc2} />
                                                                </div>
                                                            </div>
                                                            <div className="sm:flex hidden flex-wrap w-1/4">
                                                                <div className="w-full p-1 md:p-2">
                                                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                                        src={item.esc3} />
                                                                </div>
                                                            </div>
                                                            <div className="sm:flex hidden flex-wrap w-1/4">
                                                                <div className="w-full p-1 md:p-2">
                                                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                                        src={item.esc4} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={item.id} className="carousel-item  relative float-left w-full">
                                                    <div className=" px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                                                        <div className="flex flex-wrap -m-1 md:-m-2">
                                                            <div className="flex flex-wrap w-1/2 sm:w-1/4">
                                                                <div className="w-full p-1 md:p-2">
                                                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                                        src={item.esc1} />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap sm:w-1/4 w-1/2">
                                                                <div className="w-full p-1 md:p-2">
                                                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                                        src={item.esc2} />
                                                                </div>
                                                            </div>
                                                            <div className="sm:flex hidden flex-wrap w-1/4">
                                                                <div className="w-full p-1 md:p-2">
                                                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                                        src={item.esc3} />
                                                                </div>
                                                            </div>
                                                            <div className="sm:flex hidden flex-wrap w-1/4">
                                                                <div className="w-full p-1 md:p-2">
                                                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                                        src={item.esc4} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <button
                                className=" carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon inline-block  bg-no-repeat bg-[black]" aria-hidden="true"></span>
                                <span className="visually-hidden ">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon inline-block bg-no-repeat bg-[black]" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}