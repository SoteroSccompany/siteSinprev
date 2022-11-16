import { Link } from "react-router-dom"
const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    {
      id: 1, name: 'Localização', desc: 'Rua Rio Pomba, 504, Bairro Padre Eustáquio, Belo Horizonte, MG, CEP 30720-290',
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      id: 2, name: 'Horários', desc: '8h às 12h | 13h às 17h',
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3, name: 'Contatos', desc: `(31) 97136-6684      (31) 99753-9083  conntato@sinprev.org.br`,
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

      )
    },
  ],
  company: [
    { id: 1, name: 'Página inicial', href: '/' },
    { id: 2, name: 'institucional', href: '/institucional' },
    { id: 3, name: 'Quem Somos', href: false },
    { id: 4, name: 'Ações Judiciais', href: '#' },
  ],
  legal: [
    { id: 1, name: 'Pergintas Frequentes', href: '/faq' },
    { id: 2, name: 'Editais de convicação', href: '/edital' },
    { id: 3, name: 'Estatuto', href: '/estatuto' },
    { id: 4, name: 'Associe-se', href: '/filiate' },
  ],
  social: [
    {
      id: 1,
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}


const acoesJud = () => {
  window.location.href = "https://sinprev.com.br/informativo.pdf"
}

export default function Example() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <img src="https://sinprev.com.br/logo-sinprev-rodape.png" />
                <div className="mt-6 flex">
                  {navigation.social.map((item) => (
                    <a key={item.id} href={item.href} className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only ">{item.name}</span>
                      <item.icon className="h-6 w-6 mr-2" aria-hidden="true" />

                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                {
                  navigation.support.map((item) => (
                    <span key={item.id}>
                      <h3 className="text-base font-medium text-white mt-6" >{item.name}</h3>
                      <ul role="list" className="mt-4 space-y-4" >
                        <li  >
                          <a href={item.href} className="text-base text-gray-300 hover:text-white text-center">
                            {item.desc}
                          </a>
                        </li>
                      </ul>
                    </span>
                  ))
                }
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 ml-5">
              <div>
                <h3 className="text-base font-medium text-white">Links Rápidos</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) =>
                    item.href !== false ?
                      (
                        <li key={item.id}>
                          <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                            {item.name}
                          </Link>
                        </li>
                      ) : (
                        <li key={item.id}>
                          <Link onClick={acoesJud} className="text-base text-gray-300 hover:text-white">
                            {item.name}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.id}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/*
          <div className="mt-8 xl:mt-0">
            <h3 className="text-base font-medium text-white">Fique por dentro de todas as noticias!</h3>
            <p className="mt-4 text-base text-gray-300">
              Coloque seu melhor e-mail.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Digite seu e-mail"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
           */}
        </div>
        <div className=" mt-8 border-t border-gray-700 pt-8 md:flex md:flex-col md:items-center md:justify-center">
          <p className="text-[white] mb-5">Layout desenvolvido por: </p>
          <img src="http://localhost:3000/images/kwcode-bco-1.png" />
        </div>
      </div>
    </footer>
  )
}