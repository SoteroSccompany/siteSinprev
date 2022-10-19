import { Routes, Route } from 'react-router-dom';
import RouterWrapper from './Route.jsx';
import Home from '../views/Home';
import Istitucional from '../views/Institucional/index.jsx';
import About from '../views/About/index.jsx';
import Faq from '../views/Faq/index.jsx';
import Filiate from '../views/Filiate/index.jsx';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<RouterWrapper component={Home} />} />
            <Route path="/institucional" element={<RouterWrapper component={Istitucional} />} />
            <Route path="/about" element={<RouterWrapper component={About} />} />
            <Route path="/faq" element={<RouterWrapper component={Faq} />} />
            <Route path="/filiate" element={<RouterWrapper component={Filiate} />} />
        </Routes>
    )
}