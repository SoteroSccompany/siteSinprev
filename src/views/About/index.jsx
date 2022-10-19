import Footer from "../../components/Foooter";
import Header from "../../components/Header";
import { Link } from "react-router-dom";


export default function About() {
    return (
        <div>
            <Header />

            <div className="flex flex-col justify-center items-center p-[50px] bg-[#001850]">
                <h1 className="text-white text-[40px] sm:text-[50px]">Quem Somos</h1>
                <div className="flex flex-row">
                    <Link to="/" className="text-gray-200">Pagina inicial</Link>
                    <span className="text-white ml-2 "> &rsaquo; Sobre o SINPREV </span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  mt-10 mb-10">
                <div className="flex flex-row md:w-[40%] items-center justify-center">
                    <img
                        className="sm:w-[80%] sm:h-[40%]"
                        src="https://sinprev.org.br/wp-content/uploads/2022/08/logo-sinprev-resp.png"
                        alt=""
                    />
                </div>
                <div className="flex flex-row md:w-[60%] p-7">
                    <div className="flex flex-col mt-6 ">
                        <p className="text-justify whitespace-pre-line pb-6 text-[18px] font-serif italic">
                            Foram 14 anos de troca de ideias e um sonho: defender os fundos de pensão, de forma transparente e apartidária e com atuação dos seus participantes. Nos últimos cinco anos, empenhados e obstinados, lutando contra adversidades e estrategicamente comedidos, alcançamos o objetivo. Em 16 de março de 2016, foi publicado o registro oficial do SINPREV, Sindicato Nacional dos Participantes das Entidades Fechadas de Previdência Complementar.

                        </p>
                        <p className="text-justify whitespace-pre-line pb-6 font-serif text-[18px] italic">
                            A vitória é grande, possível devido aos filiados que confiaram nos nossos pilares: gestão transparente e participativa, apoio às todas mobilizações de luta pelo mesmo ideal, iniciativas legislativas, fomento ao conhecimento previdenciário e ações de recuperação dos déficits. A direção do SINPREV agradece a cada um dos filiados pelo apoio, nosso alimento para nunca desistir.
                        </p>
                        <p className="text-justify whitespace-pre-line pb-6 font-serif text-[18px] italic">
                            Na nossa trilha, muitos obstáculos: falta de recursos, viagens, carência de pessoal, entraves burocráticos, mas muitas realizações, dentre outras: dois congressos nacionais em parceria com a UFMG e um projeto de lei complementar que visa isentar o IR sobre a parcela de equacionamento destinada à cobertura de déficit.
                        </p>
                        <p className="text-justify whitespace-pre-line pb-6 font-serif text-[18px] italic">
                            O SINPREV foi concebido e criado sem qualquer vínculo partidário (poder econômico ou de central sindical), para defender os fundos de pensão como importante fonte de poupança interna no Brasil, que ao longo de décadas, foram alvo de ingerência política e patrimonialismo, sofrendo ataques que comprometem o futuro de seus verdadeiros donos: os participantes, beneficiários e assistidos.
                        </p>
                        <p className="text-justify whitespace-pre-line pb-6 font-serif text-[18px] italic">
                            A fundação do SINPREV significa a mudança de postura dos Participantes, de entes passivos para agentes proativos na recuperação econômico–financeira e garantia de recebimento dos direitos contratados com esses Fundos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-[60px] pb-[100px] bg-[#F4F4F4]">
                <h1 className="text-[#001850] text-[45px] text-center">Nossa luta até agora foi grande, mas sabemos que só começamos.</h1>
                <h1 className="text-[#379ad5] text-[45px] text-center">Junte-se a nós!</h1>
                <Link to="/filiate" type="button" className="mt-6 inline-block w-[200px] h-[50px] px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Quero me Associar</Link>
            </div>
            <Footer />
        </div>
    )

}