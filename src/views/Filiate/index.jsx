import Footer from "../../components/Foooter";
import Header from "../../components/Header";
import { Link, Navigate } from "react-router-dom";
import FormFiliate from '../../components/FormFiliate'
import { AuthContext } from '../../context/contextFiliate'
import { useContext } from 'react'

export default function Filiate() {

    const { states, setters } = useContext(AuthContext);

    const succcess = () => {
        setters.setSuccess(false)
    }

    const error = () => {
        setters.setError(false)

    }
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center p-[20px] bg-[#001850]">
                <h1 className="text-white text-[40px] sm:text-[50px]">Pagina de Filiacao</h1>
                <div className="flex flex-row ml-16 sm:ml-0">
                    <Link to="/" className="text-gray-200">Pagina inicial</Link>
                    <span className="text-white ml-2 "> &rsaquo; Ficha de filiacao </span>
                    <span className="text-white ml-2 ">&rsaquo; Pagamento e Conclusao</span>
                </div>
            </div>
            <div className="flex flex-col items-center p-16 h-full p-10">
                <div className="bg-gray-50">
                    {
                        states.sendData ? (
                            <div className="mt-16 mb-16 p-16 ">
                                <div className="bg-green-700 rounded-[50px]">
                                    <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                            <span className="block animate-pulse">CARREGANDO...</span>
                                            <div className="
                                                spinner-border
                                                animate-spin
                                                inline-block
                                                w-16
                                                h-16
                                                border-4
                                                rounded-full
                                                text-blue-500
                                                mt-6
                                            " role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </h2>
                                    </div>
                                </div>

                            </div>) : (<span></span>)
                    }
                    {
                        !states.sendData && !states.error && !states.success ? (<FormFiliate />) : (<span></span>)
                    }
                    {
                        /*Remover o link*/
                        !states.sendData && !states.error && states.success ? (
                            <div className="mt-16 mb-16">
                                <div className="bg-blue-900">
                                    <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                            <span className="block">Sua filiacao foi realizada com sucesso!</span>
                                        </h2>
                                        <p className="mt-4 text-lg leading-6 text-indigo-200">
                                            Voce recebera instrucoes no seu e-mail em relacao ao pagamento e seu login para a area do associado
                                        </p>
                                        <i onClick={succcess}>
                                            <Link
                                                to={states.url}
                                                className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-indigo-50 sm:w-auto"
                                            >
                                                Clique aqui para retornar
                                            </Link>
                                        </i>
                                    </div>
                                </div>

                            </div>
                        ) : (<span></span>)
                    }

                    {
                        !states.sendData && states.error && !states.success ? (
                            <div className="mt-16 mb-16">
                                <div className="bg-red-900">
                                    <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
                                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                            <span className="block">Ops! Ocorreu um erro com o processo de filiacao</span>
                                        </h2>
                                        <p className="mt-8 text-[29px] leading-6 text-white">
                                            {states.errorMsg}
                                        </p>

                                        {states.url !== "/" ?
                                            (
                                                <i onClick={error}>
                                                    <Link
                                                        to={states.url}
                                                        className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-indigo-50 sm:w-auto"
                                                    >
                                                        Clique aqui para ir par home
                                                    </Link>
                                                </i>
                                            ) :
                                            (
                                                <i onClick={error}>
                                                <Link
                                                    to={states.url}
                                                    className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-indigo-50 sm:w-auto"
                                                >
                                                    Clique aqui para ir par home
                                                </Link>
                                                </i>

                                            )
                                        }
                                    </div>
                                </div>

                            </div>) : (<span></span>)
                    }

                </div>
            </div>


            <Footer />
        </div>
    )
}