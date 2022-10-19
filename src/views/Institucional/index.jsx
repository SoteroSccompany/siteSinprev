import { Link } from "react-router-dom";
import Footer from "../../components/Foooter";
import Header from "../../components/Header";



export default function Istitucional() {
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center p-[50px] bg-[#001850]">
                <h1 className="text-white text-[40px] sm:text-[50px]">O SINPREV</h1>
                <div className="flex flex-row">
                    <Link to="/" className="text-gray-200">Pagina inicial</Link>
                    <span className="text-white ml-2 "> &rsaquo; O Sinprev </span>
                </div>
            </div>
            <div className="flex flex-col items-center p-[50px] pb-[50px] bg-[#F4F4F4]">
                <h1 className="text-[#001850] text-[50px]">Presidencia</h1>
                <div className="flex flex-col mt-16 sm:flex-row">
                    <div className="flex flex-col jutify-start mr-26 mb-16 sm:mr-64">
                        <h1 className="text-[20px]">Presidente do Sinprev</h1>
                        <h1 className="text-[40px] text-[#001850]">Robledo Pinto Coimbra</h1>
                    </div>
                    <div className="flex flex-col jutify-start">
                        <h1 className="text-[20px]">Vice-presidente SINPREV</h1>
                        <h1 className="text-[40px] text-[#001850]">Rogério Ulisses Guimarães</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-[50px] pb-[50px] bg-[#FFFF]">
                <h1 className="text-[#001850] text-[50px]">Diretoria</h1>
                <div className="flex flex-col items-center juntify-center sm:flex-row items-center  mt-10">
                    <div className="flex flex-col  mb-16 mr-16">
                        <h1 className="text-[20px] ">Diretor Juridico</h1>
                        <h1 className="text-[40px] text-[#001850]">Odair J. P. Da Silva</h1>
                    </div>
                    <div className="flex flex-col  mb-16 mr-16">
                        <h1 className="text-[20px]">Diretor Financeiro</h1>
                        <h1 className="text-[40px] text-[#001850]">Alberto</h1>
                    </div>
                    <div className="flex flex-col  mb-16 mr-16">
                        <h1 className="text-[20px]">Diretor Administrativo</h1>
                        <h1 className="text-[40px] text-[#001850]">Rogério Machado</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-[60px] pb-[100px] bg-[#F4F4F4]">
                    <h1 className="text-[#001850] text-[50px]">Junte-se a nós</h1>
                    <Link to='/filiate'  className="inline-block w-[200px] h-[50px] px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Quero me Associar</Link>
                </div>
            <Footer />
        </div>
    )
}