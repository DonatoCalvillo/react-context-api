import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import FourOFour from "../views/404";
import PokeDetail from "../views/PokeDetail";
import ScrollToTop from "../components/useScrollToTop";

const RoutesP = () => {
    return(
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>} exact/>  
                <Route path="/pokemon/:id" element={<PokeDetail/>} />  
                <Route path='*' element={<FourOFour/>} />  
            </Routes>
        </Router>
    );
}

export default RoutesP;