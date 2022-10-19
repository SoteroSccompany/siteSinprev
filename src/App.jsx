import AuthProvider from './context/contextFiliate'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes'


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}