import Footer from "../../components/Foooter"
import Header from "../../components/Header"
import { Disclosure } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import FormContact from "../../components/FormContact"

const faqs = [
    {
        id: 1,
        question: "Adesão a ações jurídicas",
        answer: <p className=" ml-16 text-gray-500">Antes de aderir a algum processo, é preciso verificar se o seu cadastro está correto, principalmente quanto à informação sobre a empresa (em que trabalha ou se aposentou e a patrocinadora. <br /> Atenção! Somente com o cadastro correto será possível entrar na opção de processos judiciais e escolher aquele ao qual você deseja aderir.  Antes de fazer a adesão, verifique se você preenche os requisitos necessários. Ao clicar nos processos, você encontra as explicações para cada um deles, incluindo os requisitos exigidos.</p>,
    },
    {
        id: 2,
        question: "Quais ações jurídicas estão relacionadas à Funcef?",
        answer: <p className=" ml-16 text-gray-500">Atualmente há duas ações promovidas pelo SINPREV voltadas aos filiados que têm relação com a Funcef, patrocinadora da Caixa Econômica Federal (CEF). São elas: <br />
            1. Dr.Paulo Ervedosa, pagando honorários – Escritório Ervedosa.<br />

            2. Dr. Domingos, Escritório Araújo. Não consta. Quando for executar uma ação, irá disponibilizar no site para decisão dos filiados do SINPREV. <br />
            É importante você sempre conferir os prazos para aderir às ações judiciais. Lembre-se de que você também pode consultar informações sobre a adesão aos processos <Link to='/filiate' className="text-[blue] hover:text-[#313131]">acessando a sua ficha de filiação. </Link>
        </p>,
    },
    {
        id: 3,
        question: "Quais ações jurídicas estão relacionadas à Petros?",
        answer:
            <p className=" ml-16 text-gray-500">Atualmente há três ações promovidas pelo SINPREV voltadas aos filiados que têm relação com a Petros, patrocinadora da Petrobras e da BR Distribuidora. São elas:<br />
                1. Ajuizamento da ação judicial para equiparação dos chamados PRÉ-70 BR aos PRÉ-70 PETROBRAS de forma eximi-los das responsabilidades dos equacionamentos de déficits do Plano Petros do Sistema Petrobras.<br />
                2. Ajuizamento da ação judicial para pleitear a implantação dos reajustes de benefícios dos chamados NÃO-REPACTUADOS do Plano Petros do Sistema Petrobras, que estão sem reajustes de benefícios desde 2017.<br />
                3. Ações para transferência de responsabilidade das contribuições extraordinárias do PED e do NPP da PETROS para PATROCINADORA. <br />
                É importante você sempre conferir os prazos para aderir às ações judiciais. Lembre-se de que você também pode consultar informações sobre a adesão aos processos <Link to='/filiate' className="text-[blue] hover:text-[#313131]">acessando a sua ficha de filiação. </Link>
            </p>
    },
    {
        id: 4,
        question: "Termos ligados aos planos de previdência da Petros",
        answer: <p className=" ml-16 text-gray-500">Atualmente há três ações promovidas pelo SINPREV voltadas aos filiados que têm relação com a Petros, patrocinadora da Petrobras e da BR Distribuidora. São elas:<br />
            PED – Plano de Equacionamento de Déficit (2015).<br />
            NPP – Novo Plano de Equacionamento de Déficit (2020) que substituiu o PED.<br />
            PRE-70 – Pessoas que entraram na Petrobras antes de 1970 e, portanto, são considerados “fundadores” da Petros se à Petros se filiaram quando de sua criação.<br />
            Os PRE-70 Petrobras não pagam PED e nem NPP pois a Petrobras assumiu o compromisso com estes déficits;<br />
            Os PRE-70 da Petrobras, que se desligaram da PETROBRAS em 1972 e depois entraram na BR imediatamente, para viabilizar a criação da BR, ainda estão pagando PED e NPP.<br />
            PP3 – Novo Plano da Petros, na modalidade CD que vem sendo oferecido.<br />
            PP2 – Plano Petrobras, modalidade CV, criado em 2007 após o fechamento do PPSP em 2003.<br />
            PPSP – Plano Petros do Sistema Petrobras, modalidade BD, criado em 1970 e que esteve aberto até 2003.<br />
            PPSP-R – é o PPSP das pessoas que nos idos de 2006 concordaram em alterar a metodologia de seus reajustes de benefícios, passando a adotar o INPC no lugar dos índices aplicados aos ativos.<br />
            PPSP-NR – é o plano para aqueles que não concordaram em mudar o critério de reajuste de seus benefícios.<br />
            RMNR – Remuneração Mínima por Nível e Regime – forma de equilibrar a remuneração por região e regime de trabalho.<br />
        </p>
    },
    // More questions...
]


const faqsSignIn = [
    {
        id: 1,
        question: "Senha - Como Cadastrar",
        answer: <p className=" ml-16 text-gray-500">Para cadastrar uma senha, na tela inicial do sistema de acesso à ficha de filiação, informe o CPF e clique na opção “Registrar senha” indicada na tela abaixo. Ela só estará disponível se você ainda não realizou esse passo.</p>,
    },
    {
        id: 2,
        question: "Senha - Como Recuperar",
        answer: <p className=" ml-16 text-gray-500">Se você cadastrou uma senha, mas não se lembra qual é, digite o seu CPF no campo respectivo da tela inicial do sistema de acesso da ficha de filiação. Depois, digite qualquer informação para a senha e clique em “Entrar”. Será exibida uma mensagem de senha incorreta e ao final da página a opção de recuperar senha  </p>,
    },
    // More questions...
]

const faqsFiliate = [
    {
        id: 1,
        question: "Como se Associar - Veja os passos",
        answer:
            <p className=" ml-16 text-gray-500">
                1. Na página inicial, clique em “Filie-se ao SINPREV” para iniciar.<br />
                2. Digite o seu CPF no campo indicado..<br />
                3. Clique em entrar. <br />
                4. Preencha a ficha e revise todas as informações. Fique atento às mensagens sobre cada campo do formulário. <br />
                5. Após preencher a ficha de filiação com os dados pedidos, certifique-se de que a “Forma de Pagamento” está marcada como “1-PagSeguro”. <br />
                6. Marque o termo de compromisso e clique em “Ir para o PagSeguro”. <br />
                7. Na primeira tela do PagSeguro, informe o seu e-mail, escolha a opção “Comprar sem cadastro” e clique em “Avaçar”. <br />
                8. Na tela seguinte, preencha os dados pedidos e clique em “Confirmar o pagamento”. <br />
                9. Na próxima tela, clique em “Voltar para loja”. <br />
                10. Por fim, digite o seu CPF no campo respectivo e clique em “Prosseguir” para terminar. <br />
            </p>
    },
    {
        id: 2,
        question: "Ficha de Associação – cuidados na hora de se associar ou atualizar o cadastro",
        answer: <p className=" ml-16 text-gray-500">Se você cadastrou uma senha, mas não se lembra qual é, digite o seu CPF no campo respectivo da tela inicial do sistema de acesso da ficha de filiação. Depois, digite qualquer informação para a senha e clique em “Entrar”. Será exibida uma mensagem de senha incorreta e ao final da página a opção de recuperar senha  </p>,
    },
    {
        id: 3,
        question: "PagSeguro – como concluir o pagamento da taxa",
        answer: <p className=" ml-16 text-gray-500">
            1. Na ficha de filiação, confira se a “Forma de pagamento” está na opção correta, marque o termo de compromisso e clique em “Ir para o PagSeguro”.<br />
            2. Você será direcionado ao ambiente do PagSeguro. Na primeira tela, informe o seu e-mail, escolha a opção “Comprar sem cadastro” e clique em “Avançar”.<br />
            3. Na tela seguinte, preencha os dados pedidos e clique em “Confirmar o pagamento”. <br />
            4. Na próxima tela, clique em “Voltar para loja”.<br />
            5. Por fim, digite o seu CPF no campo respectivo e clique em “Prosseguir” para terminar..<br />
        </p>
    },
    // More questions...
]

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}



//SE COLOCA A CLASSE ASSIM PARA REALIZAR A ESTILIZACAO CONDICIONAL. ISSO QUE COLOCA NO APP, POREM NO CONTEXTO WEB

export default function Faq() {
    return (
        <div>
            <Header />

            <div className="flex flex-col justify-center items-center p-[67px] bg-[url('https://sinprev.com.br/images/bg-afiliese-copy-1.webp')]">
                <h1 className="text-white text-[40px] sm:text-[50px]">Perguntas e Respostas Frequentes - (FAQ)</h1>
                <div className="flex flex-row">
                    <Link to="/" className="text-gray-200">Pagina inicial</Link>
                    <span className="text-white ml-2 "> &rsaquo; Perguntas e Respostas Frequentes (FAQ) </span>
                </div>
            </div>

            <div className="mt-4 sm:p-16 p-8">

                <div className="flex flex-col justify-center">
                    <h2 className="text-left text-3xl font-['Be Vietnam Bold'] font-bold tracking-tight text-gray-900 sm:text-[25px]">
                        Ações Jurídicas
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
                                            {faq.answer}
                                        </Disclosure.Panel>

                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>

            </div>

            <div className="mt-6 sm:p-16 p-8">

                <div className="flex flex-col justify-center">
                    <h2 className="text-left text-3xl font-['Be Vietnam Bold'] font-bold tracking-tight text-gray-900 sm:text-[25px]">
                        Cadastro
                    </h2>
                    <dl className="">
                        {faqsSignIn.map((faq) => (
                            <Disclosure as="div" key={faq.id} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg flex pb-6">
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
                                            <p className=" ml-16 text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>

                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>

            </div>

            <div className="mt-6 sm:p-16 p-8">

                <div className="flex flex-col justify-center">
                    <h2 className="text-left text-3xl font-['Be Vietnam Bold'] font-bold tracking-tight text-gray-900 sm:text-[25px]">
                        Filiação
                    </h2>
                    <dl className="">
                        {faqsFiliate.map((faq) => (
                            <Disclosure as="div" key={faq.id} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg flex pb-6">
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
                                            <p className=" ml-16 text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>

                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>

            </div>



            {
                /*<FormContact/>*/
            }

            <Footer />
        </div>

    )
}