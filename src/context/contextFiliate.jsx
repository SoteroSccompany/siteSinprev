import { useState, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [sexo, setSexo] = useState('')
    const [estadoCivil, setEstadoCivil] = useState('')
    const [escolaridade, setEscolaridade] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [cidadeNascimento, setCidadeNascimento] = useState('')
    const [estadoNascimento, setEstadoNascimento] = useState('')
    const [rg, setRg] = useState('')
    const [rgExpedicao, setRgExpedicao] = useState('')
    const [nomePai, setNomePai] = useState('')
    const [nomeMae, setNomeMae] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [matricula, setMatricula] = useState('')
    const [aposentado, setAposentado] = useState('')
    const [fundo, setFundo] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [identifier, setIdentifier] = useState('')
    const [method, setMethod] = useState('')
    const [number, setNumber] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [verification_value, setVerification_value] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [sendData, setSendData] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)




    const clearAll = () => {
        setNome('')
        setSobrenome('')
        setCpf('')
        setSexo('')
        setEstadoCivil('')
        setEscolaridade('')
        setDataNascimento('')
        setCidadeNascimento('')
        setEstadoNascimento('')
        setRg('')
        setRgExpedicao('')
        setNomePai('')
        setNomeMae('')
        setEmpresa('')
        setMatricula('')
        setAposentado('')
        setFundo('')
        setEmail('')
        setCelular('')
        setCep('')
        setLogradouro('')
        setNumero('')
        setComplemento('')
        setBairro('')
        setCidade('')
        setEstado('')
        setIdentifier('')
        setMethod('')
        setNumber('')
        setFirst_name('')
        setLast_name('')
        setVerification_value('')
        setMonth('')
        setYear('')
        setSendData(false)
        setSuccess(false)
        setError(false)

    }

    const states = {
        nome,
        sobrenome,
        cpf,
        sexo,
        estadoCivil,
        escolaridade,
        dataNascimento,
        cidadeNascimento,
        estadoNascimento,
        rg,
        rgExpedicao,
        nomePai,
        nomeMae,
        empresa,
        matricula,
        aposentado,
        fundo,
        email,
        celular,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        identifier,
        method,
        number,
        first_name,
        last_name,
        verification_value,
        month,
        year,
        sendData,
        success,
        error,
        name: `${nome} ${sobrenome}`,
        endereco: logradouro,

    }

    const setters = {
        setNome,
        setSobrenome,
        setCpf,
        setSexo,
        setEstadoCivil,
        setEscolaridade,
        setDataNascimento,
        setCidadeNascimento,
        setEstadoNascimento,
        setRg,
        setRgExpedicao,
        setNomePai,
        setNomeMae,
        setEmpresa,
        setMatricula,
        setAposentado,
        setFundo,
        setEmail,
        setCelular,
        setCep,
        setLogradouro,
        setNumero,
        setComplemento,
        setBairro,
        setCidade,
        setEstado,
        setIdentifier,
        setMethod,
        setNumber,
        setFirst_name,
        setLast_name,
        setVerification_value,
        setMonth,
        setYear,
        setSendData,
        setSuccess,
        setError,
    }

    const createSubscription = async () => {
        setSendData(true)
        try {
            const data = await axios.post("https://sinprev.com.br/wpprev/associate/subscribe", states);
            //Tratar bem o erro para o usuario saber que nao pode se cadastrar
            //UTILIZAR EXITUSER
            clearAll()
            setSuccess(true)
            console.log(data)
        } catch (err) {
            //TRATAR O ERRO => SE FOR APENAS DE CARTAO NAO APAGA TUDO??            
            clearAll()
            setError(true)
            console.log(err)
        }

    }

    return (
        <AuthContext.Provider value={{ states, setters, clearAll, createSubscription }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider