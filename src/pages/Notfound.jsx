import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <>
            <h3>Página não encontrada</h3>
            <h4>Erro 404</h4>
            <Link to={"/"}>Voltar</Link>
        </>
    );
}
 
export default Notfound;