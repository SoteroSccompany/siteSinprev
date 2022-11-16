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
    const [createdAt, setCreatedAt] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [url, setUrl] = useState('')




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
        setCreatedAt('')
        setErrorMsg('')
        setUrl('')

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
        createdAt,
        errorMsg,
        url

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
        setCreatedAt,
        setErrorMsg,
        setUrl
    }

    const date = (e) => {
        const timeElapsed = new Date();
        const year = timeElapsed.getFullYear();
        const mounthPure = timeElapsed.getMonth() + 1;
        const mounth = mounthPure < 10 ? '0' + mounthPure : mounthPure;
        const day = timeElapsed.getDate();
        if (e === 'yearFirst') {
            setCreatedAt(`${year}/${mounth}/${day}`)
        } else {
            setCreatedAt(`${day}/${mounth}/${year}`)
        }
    }

    const createSubscription = async () => {
        setSendData(true)
        date("dayFirst")
        const url = `https://sinprev.bitrix24.com.br/rest/1/0uniwtcm3dl3kgut/crm.contact.add.json?FIELDS[NAME]=${nome}&FIELDS[LAST_NAME]=${sobrenome}&FIELDS[EMAIL][0][VALUE]=${email}&FIELDS[PHONE][0][VALUE]=${celular}&FIEDLS[UF_CRM_1659677848]=${cpf}&FIELDS[UF_CRM_1659655739]=${sexo}&FIELDS[UF_CRM_1659655757]=${estadoCivil}&FIELDS[UF_CRM_1659655774]=${escolaridade}&FIELDS[UF_CRM_1660177894]=${dataNascimento}&FIELDS[UF_CRM_1659655789]=${cidadeNascimento}&FIELDS[UF_CRM_1659655811]=${estadoNascimento}&FIELDS[UF_CRM_1659655937]=${rg}&FIELDS[UF_CRM_1659655974]=${rgExpedicao}&FIELDS[UF_CRM_1659655992]=${nomePai}&FIELDS[UF_CRM_1659656004]=${nomeMae}&FIELDS[UF_CRM_1659656017]=${empresa}&FIELDS[UF_CRM_1659656033]=${matricula}&FIELDS[UF_CRM_1659546478]=${fundo}&FIELDS[UF_CRM_1659656069]=${aposentado}&FIELDS[UF_CRM_1660163288]=${cep}&FIELDS[UF_CRM_1660163305]=${logradouro}&FIELDS[ADDRESS_CITY]=${cidade}&FIELDS[ADDRESS_PROVINCE]=${estado}&FIELDS[UF_CRM_1659677870]=${numero}&FIELDS[ADDRESS_2]=${complemento}& FIELDS[UF_CRM_1666623156]=${identifier}&FIELDS[UF_CRM_1660117528]=${bairro}&FIELDS[UF_CRM_1660117571]=${estado}&FIELDS[UF_CRM_1663193718]=${estado}&FIELDS[UF_CRM_1659677848]=${cpf}&FIELDS[UF_CRM_1660165909]=${createdAt}`
        await axios.post(url)
        try {
            date("yearFirst")
            await axios.post("https://api.sinprev.com.br/wpprev/associate/subscribe", states);
            setSendData(false)
            clearAll()
            setUrl('/')
            setSuccess(true)
        } catch (err) {
            setSendData(false)
            console.log(err)
            if (err.response.data.msg.msg === 'Usuario ja cadastrado') {
                clearAll()
                setUrl('/')
                setErrorMsg('Usuario ja cadastrado')
                setError(true)
            } else if (err.response.data.msg.msg === 'Erro ao cadastrar token') {
                setUrl('/filiate')
                setErrorMsg('Erro ao cadastrar seu cartao de credito. Tente novamente!')
                setError(true)
            } else {
                clearAll()
                setUrl('/')
                setErrorMsg('Erro ao realizar seu cadastrar. Tente novamente mais tarde!')
                setError(true)
            }
        }

    }

    return (
        <AuthContext.Provider value={{ states, setters, clearAll, createSubscription }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider