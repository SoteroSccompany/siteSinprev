import { Link } from "react-router-dom";
import Footer from "../../components/Foooter";
import Header from "../../components/Header";



export default function Istitucional() {
    return (
        <div>
            <Header />

            <div className="flex flex-col justify-center items-center p-[67px] bg-[url('https://sinprev.com.br/images/bg-afiliese-copy-1.webp')]">
                <h1 className="flex flex-row  items-center junstify-center font-['Be Vietnam Bold'] font-bold text-white text-[50px] sm:text-[50px] w-full sm:w-[22%]">O <span className="ml-4">SINPREV</span></h1>
                <div className="sm:flex flex-row hidden">
                    <Link to="/" className="text-gray-200">Pagina inicial</Link>
                    <span className="text-white ml-2 "> &rsaquo; Institucional </span>
                </div>
            </div>
            <div className="flex flex-col items-center p-[50px] pb-[50px] bg-[#0000]" id="#presidencia">
                <h1 className="text-[#001850] text-[50px] font-['Be Vietnam Bold'] font-bold">Presidência</h1>
                <div className="flex flex-col mt-16 sm:flex-row">
                    <div className="flex flex-col jutify-start mr-26 mb-16 sm:mr-[7%]">
                        <img src="https://sinprev.com.br/images/robledo.webp" alt="" />
                        <h1 className="text-[20px]">Presidente do Sinprev</h1>
                        <h1 className="text-[40px] text-[#001850]">Robledo Pinto Coimbra</h1>
                    </div>
                    <div className="flex flex-col jutify-start">
                        <img src="https://sinprev.com.br/images/rogerio.webp" alt="" />
                        <h1 className="text-[20px]">Vice-presidente SINPREV</h1>
                        <h1 className="text-[40px] text-[#001850]">Rogério Ulisses Guimarães</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-[50px] pb-[50px] bg-[#F4F4F4]" id='diretoria'>
                <h1 className="text-[#001850] text-[50px]">Diretoria</h1>
                <div className="flex flex-col items-center juntify-center sm:flex-row items-center  mt-10">
                    <div className="flex flex-col  mb-16 mr-16">
                        <img src="https://sinprev.com.br/images/odair-copy.webp" className="rounded-[10%]" alt="" />
                        <h1 className="text-[20px] ">Diretor Juridico</h1>
                        <h1 className="text-[40px] text-[#001850]">Odair J. P. Da Silva</h1>
                    </div>
                    <div className="flex flex-col  mb-16 mr-16">
                        <img src="https://sinprev.com.br/images/alberto.webp" className="rounded-[10%]" alt="" />
                        <h1 className="text-[20px]">Diretor Financeiro</h1>
                        <h1 className="text-[40px] text-[#001850]">Alberto</h1>
                    </div>
                    <div className="flex flex-col  mb-16 mr-16">
                        <img src="https://sinprev.com.br/images/rogerio-machado.webp" className="rounded-[10%]" alt="" />
                        <h1 className="text-[20px]">Diretor Administrativo</h1>
                        <h1 className="text-[40px] text-[#001850]">Rogério Machado</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-[50px] pb-[50px] bg-[#FFFFFF]">
                <h1 className="text-[#001850] text-[50px]">Conselhos</h1>
                <div className="flex flex-col items-center juntify-center sm:flex-row items-center  mt-10">
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-[60px] pb-[100px] bg-[url('https://sinprev.com.br/images/bg-escritorios.webp')] p-28">
                <h1 className="text-[#379ad5] sm:text-[45px]  text-[33px]  text-center font-['Be Vietnam Bold']">Junte-se a nós!</h1>
                <Link to="/filiate" type="button" className="flex flex-col justify-center mt-6 inline-block w-[200px] h-[50px] px-6 py-2.5 bg-green-700 text-white text-center font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"><span className="text-[14px]">Quero me Associar</span></Link>
            </div>
            <Footer />
        </div>
    )
}