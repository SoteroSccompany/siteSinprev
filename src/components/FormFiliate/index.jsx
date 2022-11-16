import { useContext, useState } from 'react';
import { AuthContext } from '../../context/contextFiliate.jsx';
import axios from 'axios';

export default function Example() {

  const { states, setters, createSubscription } = useContext(AuthContext);
  const [checkOut, setCheckOut] = useState(false);
  const [creditCard, setCreditCard] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  const sex = [
    { id: 'H', title: 'Homem' },
    { id: 'M', title: 'Mulher' },
  ]
  const civilState = [
    { id: 'solteiro', title: 'Solteiro(a)' },
    { id: 'casado', title: 'Casado(a)' },
    { id: 'divorciado', title: 'Divorciado(a)' },
    { id: 'viuvo', title: 'Viuvo(a)' },

  ]

  const aposent = [
    { id: 1, value: true, title: "Sim" },
    { id: 2, value: false, title: "Não" }
  ]

  const fundo = [
    { id: 'Func', title: "Funcef" },
    { id: 'PT', title: "Petros Petrobras" },
    { id: 'PTBR', title: "Petros BR" },
    { id: 'PV', title: "Previ" },
    { id: 'PST', title: "Postalis" },
    { id: 'AER', title: "Aerus" },
    { id: 'ot', title: "Outro" },
  ]

  const handdleSubscription = (e) => {
    e.preventDefault()
    setCheckOut(true)
  }

  const setPay = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'credit_card') {
      setters.setMethod(e.target.value)
      setCreditCard(true)
    } else {
      setters.setMethod(e.target.value)
      setCreditCard(false)
      setters.setNumber('')
      setters.setFirst_name('')
      setters.setLast_name('')
      setters.setVerification_value('')
      setters.setMonth('')
      setters.setYear('')
    }
  }

  const henddleMonth = e => {
    const message = e.target.value.slice(0, 2)
    setters.setMonth(message)
  }

  const henddleYear = e => {
    const year = e.target.value.slice(0, 4)
    setters.setYear(year)
  }

  const henddleCvv = e => {
    const cvv = e.target.value.slice(0, 4)
    setters.setVerification_value(cvv)
  }

  const handdleFinishSubscritption = e => {
    e.preventDefault()
    createSubscription()
    console.log(states)
  }

  const handleCep = async () => {
    setReadOnly(true)
    const { data } = await axios.get(`https://viacep.com.br/ws/${states.cep}/json/`)
    setters.setLogradouro(data.logradouro)
    setters.setBairro(data.bairro)
    setters.setCidade(data.localidade)
    setters.setEstado(data.uf)
    setReadOnly(false)
  }

  const sexo = (e) => {
      if(states.sexo === undefined){
          return e.title
      }else{
        return states.sexo
      }
  }



  return (
    <>

      <div className="bg-white pb-16" />


      {
        !checkOut ? (
          <form onSubmit={handdleSubscription} >
            <div className="overflow-hidden shadow sm:rounded-md ">
              <div className="bg-gray-100 px-4 py-5  sm:p-6">
                <h1 className="text-center mb-9 text-[30px]">Dados de Cadastro</h1>
                <div className="grid grid-cols-6 gap-6 ">


                  <div className="col-span-6 sm:col-span-3 ">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                        placeholder="Digite seu nome"
                        required
                        value={states.nome}
                        onChange={(e) => setters.setNome(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3 ">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                        Sobrenome
                      </label>
                      <input
                        type="text"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                        placeholder="Digite seu sobrenome"
                        required
                        value={states.sobrenome}
                        onChange={(e) => setters.setSobrenome(e.target.value)}
                      />
                    </div>
                  </div>


                  <div className="col-span-6 ">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                        CPF
                      </label>
                      <input
                        type="number"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                        placeholder="Digite seu CPF"
                        required
                        value={states.cpf}
                        onChange={(e) => setters.setCpf(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-base font-medium text-gray-900">Sexo</label>
                    <p className="text-sm leading-5 text-gray-500"></p>
                    <fieldset className="mt-4" >
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {sex.map((notificationMethod) => (
                          <div key={notificationMethod.id} className="flex items-center">
                            <input
                              id={notificationMethod.id}
                              name="sex"
                              type="radio"
                              defaultChecked={notificationMethod.id === 'email'}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              required
                              value={notificationMethod.title }
                              onChange={e => setters.setSexo(e.target.value)}
                            />
                            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                              {notificationMethod.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="col-span-6 sm:col-span-4 md:col-span-2">
                    <label className="text-base font-medium text-gray-900">Estado Civil</label>
                    <p className="text-sm leading-5 text-gray-500"></p>
                    <fieldset className="mt-4" >
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {civilState.map((notificationMethod) => (
                          <div key={notificationMethod.id} className="flex items-center">
                            <input
                              id={notificationMethod.id}
                              name="estadoCivil"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              required
                              value={notificationMethod.title}
                              onChange={e => setters.setEstadoCivil(e.target.value)}
                            />
                            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                              {notificationMethod.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>

                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label  className="block text-sm font-medium text-gray-700">
                        Escolaridade
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Digite sua escolaridade"
                          required
                          value={states.escolaridade}
                          onChange={(e) => setters.setEscolaridade(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label  className="block text-sm font-medium text-gray-700">
                        Data de nascimento
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="date"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="DD/MM/YYYY"
                          required
                          value={states.dataNascimento}
                          onChange={(e) => setters.setDataNascimento(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Cidade de Nascimento
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Digite sua cidade de nascimento"
                          required
                          value={states.cidadeNascimento}
                          onChange={(e) => setters.setCidadeNascimento(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Estado de Nascimento
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Digite seu estado de nascimento"
                          required
                          value={states.estadoNascimento}
                          onChange={(e) => setters.setEstadoNascimento(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-span-6">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Digite seu RG
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Digite seu RG"
                          required
                          value={states.rg}
                          onChange={e => setters.setRg(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Data de expedicao
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="date"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="DD/MM/YYYY"
                          required
                          value={states.rgExpedicao}
                          onChange={(e) => setters.setRgExpedicao(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Nome do Pai
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Digite o nome do seu pai"
                          required
                          value={states.nomePai}
                          onChange={(e) => setters.setNomePai(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Nome da Mae
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Digite o nome da sua mae"
                          required
                          value={states.nomeMae}
                          onChange={(e) => setters.setNomeMae(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>



                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Empresa
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm ">
                        <select
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-gray-100 "
                          placeholder="Selecione uma empresa"
                          onChange={(e) => setters.setEmpresa(e.target.value)}
                          value={states.empresa}
                          required
                        >
                          <option>Selecione uma empresa</option>
                          <option>Banco do Brasil SA</option>
                          <option>Caixa Economica Federal</option>
                          <option>Empresa Brasileira de Correios e Telegrafos</option>
                          <option>Funcacao dos Economimarios FUNCEF</option>
                          <option>Petrobras Distribuidora SA BR</option>
                          <option>Petroleo Brasileiro SA BR</option>
                          <option>Outra</option>
                        </select>

                      </div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Matricula da empresa
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="number"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Digite a sua matricula"
                          required
                          value={states.matricula}
                          onChange={(e) => setters.setMatricula(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 xl:col-span-1">
                    <label className="text-base font-medium text-gray-900">Aposentado</label>
                    <p className="text-sm leading-5 text-gray-500"></p>
                    <fieldset className="mt-4" >
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {aposent.map((notificationMethod) => (
                          <div key={notificationMethod.id} className="flex items-center">
                            <input
                              id={notificationMethod.id}
                              name="aposentado"
                              type="radio"
                              defaultChecked={notificationMethod.id === 'email'}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              required
                              value={notificationMethod.value}
                              onChange={e => setters.setAposentado(e.target.value)}
                            />
                            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                              {notificationMethod.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="col-span-6 xl:col-span-5 ">
                    <label className="text-base font-medium text-gray-900">Fundo</label>
                    <p className="text-sm leading-5 text-gray-500"></p>
                    <fieldset className="mt-4" >
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                        {fundo.map((notificationMethod) => (
                          <div key={notificationMethod.id} className="flex items-center">
                            <input
                              id={notificationMethod.id}
                              name="fundo"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              required
                              value={notificationMethod.title}
                              onChange={e => setters.setFundo(e.target.value)}
                            />
                            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                              {notificationMethod.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <h1 className="text-center mb-9 text-[30px] col-span-6 mt-6">Dados de Contato</h1>
                  <div className="col-span-6 ">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Seu e-mail
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="exemplo@example.com"
                          required
                          value={states.email}
                          onChange={e => setters.setEmail(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Seu celular
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="number"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="31999999999"
                          required
                          value={states.celular}
                          onChange={(e) => setters.setCelular(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Seu CEP
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="number"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="00000000"
                          value={states.cep}
                          onChange={(e) => setters.setCep(e.target.value)}
                          onBlur={handleCep}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 ">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Logradouro
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Seu endereco"
                          value={states.logradouro}
                          onChange={(e) => setters.setLogradouro(e.target.value)}
                          readOnly={readOnly}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Cidade
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Seu endereco"
                          value={states.cidade}
                          onChange={(e) => setters.setCidade(e.target.value)}
                          readOnly={readOnly}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Seu Bairro
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Seu bairro"
                          value={states.bairro}
                          onChange={(e) => setters.setBairro(e.target.value)}
                          readOnly={readOnly}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Estado
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Seu estado"
                          value={states.estado}
                          onChange={(e) => setters.setEstado(e.target.value)}
                          readOnly={readOnly}
                        />
                      </div>
                    </div>
                  </div>


                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Numero da residencia
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Numero da sua casa"
                          onChange={e => setters.setNumero(e.target.value)}
                          value={states.numero}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Complemento
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-0 sm:text-sm bg-gray-100"
                          placeholder="Digite o complemento"
                          value={states.complemento}
                          onChange={e => setters.setComplemento(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Concluir
                </button>
              </div>
            </div>
          </form>

        ) : (
          <form onSubmit={handdleFinishSubscritption}>
            <div className="overflow-hidden shadow sm:rounded-md ">
              <div className="bg-gray-100 px-4 py-5 sm:p-6">
                <h1 className="text-center mb-9 text-[30px]">Dados de checkout</h1>
                <div className="grid grid-cols-6 gap-6 p-6 m-6">

                  <div className="col-span-6  ">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Selecione um plano
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">

                        <select
                          id="plan"
                          name="plan"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-gray-100"

                          onChange={(e) => setters.setIdentifier(e.target.value)} required>
                          <option value=''>Selecione um plano</option>
                          <option value='sinprev_menssalidade'>Plano Mensal - R$ 26.97</option>
                          <option value='Plano_trimestral'>Plano Trimestral - R$ 80.91</option>
                          <option value='Plano_semestral'>Plano Trimestral - R$ 161.82</option>
                          <option value='Plano_anual'>Plano Trimestral - R$ 323.64</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6  ">
                    <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-without:border-blue-300 focus-within:ring-1 focus-within:ring-blue-600">
                      <label   className="block text-sm font-medium text-gray-700">
                        Selecione o metodo de pagamento
                      </label>
                      <div className="relative mt-1 rounded-md shadow-sm">

                        <select
                          id="methhod"
                          name="method"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-gray-100"
                          defaultValue=""
                          onChange={(e) => setPay(e)}
                          required>
                          
                          <option value="">Selecione uma opcao</option>
                          <option value='credit_card'>Cartao de credito</option>
                          <option value='bank_slip'>Boleto Bancario</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {
                    creditCard ? (
                      <div className="col-span-6  ">
                        <div className="mt-10 border-t border-gray-200 pt-10">
                          <h2 className="text-lg font-medium text-gray-900">Payment</h2>

                          <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                            <div className="col-span-4">
                              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                Numero do seu cartao
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  id="card-number"
                                  name="card-number"
                                  autoComplete="cc-number"
                                  value={states.number}
                                  onChange={e => setters.setNumber(e.target.value)}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-span-2">
                              <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                Primeiro Nome
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  id="name-on-card"
                                  name="name-on-card"
                                  autoComplete="given-name"
                                  value={states.first_name}
                                  onChange={e => setters.setFirst_name(e.target.value)}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-span-2">
                              <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                Segundo Nome
                              </label>
                              <div className="mt-1">
                                <input
                                  value={states.last_name}
                                  onChange={e => setters.setLast_name(e.target.value)}
                                  type="text"
                                  id="last-name-on-card"
                                  name="last-name-on-card"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  required
                                />
                              </div>
                            </div>


                            <div className='col-span-2'>
                              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                Mes
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="month"
                                  id="month"
                                  value={states.month}
                                  onChange={e => henddleMonth(e)}
                                  autoComplete="cc-exp-month"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  required
                                />
                              </div>
                            </div>

                            <div className='col-span-2'>
                              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                Ano
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="year"
                                  id="year"
                                  value={states.year}
                                  onChange={e => henddleYear(e)}
                                  autoComplete="cc-exp-year"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  required
                                />
                              </div>
                            </div>

                            <div className='col-span-4'>
                              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                CVV
                              </label>
                              <div className="mt-1">
                                <input
                                  required
                                  type="number"
                                  name="cvc"
                                  id="cvc"
                                  value={states.verification_value}
                                  onChange={e => henddleCvv(e)}
                                  autoComplete="csc"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <span></span>
                    )
                  }



                </div>
              </div>

              <div className='flex justify-center'>

                {
                  checkOut ? (<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      onClick={() => setCheckOut(false) && setCreditCard(false)}

                      className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Voltar
                    </button>
                  </div>
                  ) : (<span></span>)
                }


                <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Concluir
                  </button>
                </div>



              </div>
            </div>
          </form>

        )
      }



      <div className="bg-white pb-16" />


    </>
  )
}
