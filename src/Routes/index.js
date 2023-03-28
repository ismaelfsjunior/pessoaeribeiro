import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Contato from "../Views/Contato";
import Familia from "../Views/Familia";
import Trabalho from "../Views/Trabalho";

export default function Rotas() {
    return(
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/Familia" element={ <Familia />} />
                <Route path="/Trabalho" element={ <Trabalho />} />
                <Route path="/Contato" element={ <Contato />} />
                {/* <Route path="/Newpage" element={ <Newpage />} /> 
                <Route path="/Newcad" element={ <Formcadastro />} /> 
                <Route path="/consultacadastro" element={ <Consultacadastro />} /> 
                <Route path="/lerqrcode" element={ <ReadQrCode />} /> 
                <Route path="/lista" element={ <Lista />} /> 
                <Route path="/impressao" element={ <Impressao />} />  */}
            </Routes>
    );
}

