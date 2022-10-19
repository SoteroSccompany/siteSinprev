import Footer from "../../components/Foooter"
import Header from "../../components/Header"
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import FormContact from "../../components/FormContact"

const faqsJuriFaq = [
    {
        question: "Adesão a ações jurídicas",
        answer:
            "Antes de aderir a algum processo, é preciso verificar se o seu cadastro está correto, principalmente quanto à informação sobre a empresa (em que trabalha ou se aposentou) e a patrocinadora.Atenção! Somente com o cadastro correto será possível entrar na opção de processos judiciais e escolher aquele ao qual você deseja aderir.Antes de fazer a adesão, verifique se você preenche os requisitos necessários.Ao clicar nos processos, você encontra as explicações para cada um deles, incluindo os requisitos exigidos.",
    },
    {
        question: "Quais ações jurídicas estão relacionadas à Funcef?",
        answer: "Atualmente há duas ações promovidas pelo SINPREV voltadas aos filiados que têm relação com a Funcef, patrocinadora da Caixa Econômica Federal (CEF). São elas: 1. Dr.Paulo Ervedosa, pagando honorários – Escritório Ervedosa.  2. Dr. Domingos, Escritório Araújo. Não consta. Quando for executar uma ação, irá disponibilizar no site para decisão dos filiados do SINPREV. Em atendimento aos objetivos sociais do SINPREV, especificamente quanto à defesa na esfera judicial dos associados, foi contratado o Escritório Ervedosa & Ervedosa Advocacia S/C – LTDA, com sede em Fortaleza (CE), para atuação em ações de interesse dos filiados vinculados à FUNCEF.",
    },
    {
        question: "Quais ações jurídicas estão relacionadas à Petros?",
        answer: "Atualmente há três ações promovidas pelo SINPREV voltadas aos filiados que têm relação com a Petros, patrocinadora da Petrobras e da BR Distribuidora. São elas: 1. Ajuizamento da ação judicial para equiparação dos chamados PRÉ-70 BR aos PRÉ-70 PETROBRAS de forma eximi-los das responsabilidades dos equacionamentos de déficits do Plano Petros do Sistema Petrobras.  2. Ajuizamento da ação judicial para pleitear a implantação dos reajustes de benefícios dos chamados NÃO-REPACTUADOS do Plano Petros do Sistema Petrobras, que estão sem reajustes de benefícios desde 2017.  3. Ações para transferência de responsabilidade das contribuições extraordinárias do PED e do NPP da PETROS para PATROCINADORA."
    },
    {
        question: "Termos ligados aos planos de previdência da Petros",
        answer: `PED – Plano de Equacionamento de Déficit (2015).

        NPP – Novo Plano de Equacionamento de Déficit (2020) que substituiu o PED.
        
        PRE-70 – Pessoas que entraram na Petrobras antes de 1970 e, portanto, são considerados “fundadores” da Petros se à Petros se filiaram quando de sua criação.
        
        Os PRE-70 Petrobras não pagam PED e nem NPP pois a Petrobras assumiu o compromisso com estes déficits;
        
        Os PRE-70 da Petrobras, que se desligaram da PETROBRAS em 1972 e depois entraram na BR imediatamente, para viabilizar a criação da BR, ainda estão pagando PED e NPP.
        
        PP3 – Novo Plano da Petros, na modalidade CD que vem sendo oferecido.
        
        PP2 – Plano Petrobras, modalidade CV, criado em 2007 após o fechamento do PPSP em 2003.
        
        PPSP – Plano Petros do Sistema Petrobras, modalidade BD, criado em 1970 e que esteve aberto até 2003.
        
        PPSP-R – é o PPSP das pessoas que nos idos de 2006 concordaram em alterar a metodologia de seus reajustes de benefícios, passando a adotar o INPC no lugar dos índices aplicados aos ativos.
        
        PPSP-NR – é o plano para aqueles que não concordaram em mudar o critério de reajuste de seus benefícios.
        
        RMNR – Remuneração Mínima por Nível e Regime – forma de equilibrar a remuneração por região e regime de trabalho.
        
        A forma de remuneração entre as empresas do Sistema Petrobras é parecida mas não igual, porque tem peculiaridades. Por exemplo, a BR não tem marítimos e nem plataformas em alto mar onde as pessoas podem ficar distantes da terra por 15 dias ou mais.
        
        Os Planos de Previdência são comuns às empresas, salvo o PP3 que não está sendo oferecido ao pessoal da BR.`
    }
    // More questions...
]

const faqsSigup = [ 
    {
        question: "Senha - Como Cadastrar",
        answer: `Para cadastrar uma senha, na tela inicial do sistema de acesso à ficha de filiação, informe o CPF e clique na opção “Registrar senha” indicada na tela abaixo. Ela só estará disponível se você ainda não realizou esse passo.`
    },
    {
        question: "Senha - Como Recuperar",
        answer: `Se você cadastrou uma senha, mas não se lembra qual é, digite o seu CPF no campo respectivo da tela inicial do sistema de acesso da ficha de filiação. Depois, digite qualquer informação para a senha e clique em “Entrar”. Será exibida uma mensagem de senha incorreta e ao final da página a opção de recuperar senha`
    }
]

const faqFiliate = [
    {
        question: "Como se Associar - Veja os passos",
        answer: `Clique em filiar-se. Apos isso voce sera redirecionado para uma pagina para preencher as informacoes pessoais e de cobranca. ATENCAO: Voce recebera em seu e-mail a confirmacao da sua filiacao e um outro e-mail contendo o login e senha da sua area do associado`
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
//SE COLOCA A CLASSE ASSIM PARA REALIZAR A ESTILIZACAO CONDICIONAL. ISSO QUE COLOCA NO APP, POREM NO CONTEXTO WEB

export default function Faq() {
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center p-[50px] bg-[#001850]">
                <h1 className="text-white text-[40px] sm:text-[50px]">Perguntas e Respostas Frequentes - (FAQ)</h1>
                <div className="flex flex-row">
                    <Link to="/" className="text-gray-200">Pagina inicial</Link>
                    <span className="text-white ml-2 "> &rsaquo; Perguntas e Respostas Frequentes (FAQ) </span>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Ações Jurídicas
                        </h2>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {faqsJuriFaq.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt className="text-lg">
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <ChevronDownIcon
                                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base text-gray-500">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Cadastro
                        </h2>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {faqsSigup.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt className="text-lg">
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <ChevronDownIcon
                                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base text-gray-500">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Filiacao
                        </h2>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {faqFiliate.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dt className="text-lg">
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <ChevronDownIcon
                                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-base text-gray-500">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            {
                /*<FormContact/>*/
            }
            
            <Footer />
        </div>

    )
}