import { Navigate } from "react-router-dom";

export default function RouterWrapper({
    component: Component,
    isPrivate,
    ...childeren
}) {
    const loading = false;
    const signed = false;

    if (loading) {
        return <h1>Carregando...</h1>
    }

    if (!signed && isPrivate) {
        return <Navigate to="/" />;
    }

    if (signed && !isPrivate) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <Component />
    );
} 