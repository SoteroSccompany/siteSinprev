import Header from '../../components/Header'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import './home.css'
import { Link } from 'react-router-dom'

import { CheckIcon } from '@heroicons/react/24/outline'
import Footer from '../../components/Foooter'

const features = [
    {
        name: 'Pioneirismo e vanguarda',
        description: `O SINPREV surgiu do vácuo sindical, pela falta de uma entidade sindical com finalidade especifica de defesa dos participantes dos fundos de pensão. Nossa luta é atemporal, lutamos por nós, por aqueles que nos antecederam e para que a luta de nossos sucessores seja menos árdua.`,
    },
    {
        name: 'Garantia de respaldo jurídico',
        description: `O SINPREV em sua luta diária para recuperar o patrimônio dos Participantes das Entidades Fechadas de Previdência Complementar busca sempre parcerias robustas e embasamento para que as ações sejam conduzidas da melhor forma possível.

    O SINPREV sempre atuará na proteção do interesse daqueles a quem representa, assumindo a liderança em ações que visem a recuperação do nosso patrimônio.`,
    },
    {
        name: 'Acesso a Benefícios',
        description: `O SINPREV busca criar benefícios, transpondo as vantagens sindicais para outros aspectos importantes da vida dos associados, como em educação e saúde. Através de planos de saúde, seguro de vida e planos PET.

    São descontos permanentes ou temporários, promoções e demais ações pontuais que são promovidas de maneira constante em benefício dos associados.`,
    },
    {
        name: 'Fontes de informação',
        description: `Na era da informação, o acesso a conteúdo de alta qualidade com severo filtro anti- Fake News é de suma importância para que os associados encontrem notícias relevantes sobre os fundos de pensão. Assim como, promover lives com conteúdos de extrema relevância para os associados.`,
    },
    {
        name: 'Possibilidade de negociações coletivas',
        description: `A ação de natureza coletiva, em geral, como a ação civil pública e o mandado de segurança coletivo, trazem vantagens relacionadas com a economia processual e com a celeridade do Poder Judiciário, de modo a evitar a propositura de ações de mesma natureza, promovendo a rápida consolidação jurisprudencial.`,
    },
    {
        name: 'Aumento da força da categoria',
        description: `Sabemos que a união faz a força e ser associado ao SINPREV fortalece a nossa luta.

    Juntos na luta pela recuperação do nosso patrimônio.`,
    },

]

const incentives = [
    {
      name: 'Funcef',
      description: "Fundação dos Economiários Federais",
      imageSrc: 'https://www.funcef.com.br/lumis-theme/br/com/funcef/portal/theme/funcef/images/icones/logo_funcef.png',
    },
    {
      name: 'Petros',
      description: 'Fundação Petrobras de Seguridade Social',
      imageSrc: 'https://files.petros.com.br/images/logo_petros_header.png',
    },
    {
      name: 'Postalis',
      description: "O Postalis – Instituto de Previdência Complementa",
      imageSrc: 'http://www.postalis.org.br/wp-content/uploads/2020/08/logo-postalis-web-alta.png',
    },
    {
      name: 'Aerus',
      description: "Instituto Aerus de Seguridade Social.",
      imageSrc: 'https://autoatendimento.aerus.com.br/Images/Aerus/logo_extrajudicial_topo.png',
    },
  ]
  

const supportLinks = [
    {
        name: 'Equipe de Atendimento',
        href: '/',
        description:
            'Entre em contato com nossa equipe de atendimento, estamos disponiveis',
        icon: PhoneIcon,
    },
    {
        name: 'Suporte juridico',
        href: '/',
        description:
            'Tenha acesso ao nosso time juridico e obtenha suporte tecnico dos advogados do SINPREV',
        icon: LifebuoyIcon,
    },
    {
        name: 'Estatuto',
        href: '/',
        description:
            `Acesse o estatuto do SINPREV. Tenha acesso ao estatuto vigente do sinprev`,
        icon: NewspaperIcon,
    },
]

export default function Home() {
    return (
        <div className='content'>
            <Header />
            <div className="bg-white ">
                {/* Header */}
                <div className="imgDesk relative bg-gray-800 pb-32">
                    <div className="absolute inset-0 ">
                        <img
                            className="h-full w-full object-cover  "
                            src="https://sinprev.org.br/wp-content/uploads/2022/08/banner-01.jpg"
                            alt=""
                        />
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8 mb-16 ">
                    </div>
                </div>
                <div className="imgMob relative bg-gray-800 pb-32  ">
                    <div className="absolute inset-0 ">
                        <img
                            className="h-full w-full object-cover  "
                            src="https://sinprev.org.br/wp-content/uploads/2022/08/banner-1-mobile.jpg"
                            alt=""
                        />
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8 mb-16 ">
                    </div>
                </div>

                {/* Overlapping cards */}
                <section
                    className="relative z-0 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
                    aria-labelledby="contact-heading"
                >

                    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 opacity-80">
                        {supportLinks.map((link) => (
                            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                    <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-sky-700 p-5 shadow-lg">
                                        <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                    <p className="mt-4 text-base text-gray-500">{link.description}</p>
                                </div>
                                <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                                    {/*<Link to={link.href} className="text-base font-medium text-sky-700 hover:text-sky-500">
                                        Saiba Mais<span aria-hidden="true"> &rarr;</span>
                                    </Link>*/}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="relative bg-white-800 mb-28  rounded-r-[40px] rounded-l-[80px] bg-white shadow-[35px_30px_60px_15px_rgba(0,0,0,0.3)] m-[10px]">
                <div className="bg-sky-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-l-[40px]">
                    <img
                        className="h-full w-full object-cover  rounded-l-[40px]"
                        src="https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010_1280.jpg"
                        alt=""
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 className="text-lg font-semibold text-black-300">Quem somos</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Conheça o <span className='text-5xl text-[#1565ae]'>SINPREV</span></p>
                        <p className="mt-3 text-lg text-black-300">
                            Somos um sindicato que representa de forma ética os interesses dos aposentados vinculados a entidades fechadas de previdência complementar no Brasil.
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#068E27] px-5 py-3 text-base font-medium text-white hover:bg-green-500 rounded-full"
                                >
                                    Saiba mais
                                    <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#1565ae] mb-16">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                            Por que se filiar ?
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Veja nossos numeros
                        </h2>
                    </div>
                    <dl className="mt-10 p-0 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-4 sm:gap-8">
                        <div className="flex flex-col mr-9">
                            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Único sindicato que representa os assistidos pela previdência complementar</dt>
                            <dd className="order-1 text-5xl font-bold tracking-tight text-white">1</dd>
                        </div>
                        <div className="mt-10 flex flex-col sm:mt-0 ">
                            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Estamos presentes em TODOS os Estados do Brasil</dt>
                            <dd className="order-1 text-5xl font-bold tracking-tight text-white">26</dd>
                        </div>
                        <div className="mt-10 flex flex-col sm:mt-0">
                            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Mais de 100 ações judiciais em defesa dos aposentados</dt>
                            <dd className="order-1 text-5xl font-bold tracking-tight text-white">100</dd>
                        </div>
                        <div className="mt-10 flex flex-col sm:mt-0">
                            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">O valor de nossa mensalidade</dt>
                            <dd className="order-1 text-5xl font-bold tracking-tight text-white">$26.97</dd>
                        </div>
                    </dl>
                </div>
            </div>


            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <p className=" text-lg text-gray-500">
                            Por que se filiar?
                        </p>
                        <h2 className="text-[65px] font-bold tracking-tight text-gray-900"><span className='text-[#133268]'>Nossos</span>  <span className='text-[#389AD5]'>Diferenciais</span></h2>
                    </div>
                    <dl className="mt-12 space-y-10  sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                                    <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>




            <div className="bg-sky-100">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-3xl">
                        <span className="block">Vamos juntos defender nossos fundos de pensao?</span>
                        <span className="block text-blue-700">Associe-se agora mesmo!</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded shadow mr-[250px]">
                            <Link
                                to="/filiate"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                            >
                                Associar-se
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className='flex flex-col justify-center items-center mb-0'> 
                        <h1 className='block mt-5 mb-0 text-[50px] text-blue-700'>Fundos Participantes</h1>
                </div>
                <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 ">
                    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                        {incentives.map((incentive) => (
                            <div key={incentive.name}>
                                <img src={incentive.imageSrc} alt="" className="h-24 w-auto" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{incentive.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}