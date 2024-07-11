import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import PageLayout from "../layouts/PageLayout";
import Notfound from "../pages/Notfound";
import Contact from "../pages/contact";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>} >
                    <Route index element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/contact/:id/:nome" element={<Contact />} />
                    </Route>
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;