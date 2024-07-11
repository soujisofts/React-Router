import { Link } from "react-router-dom";

const Contacts = () => {
    return (
        <>
          <h1>Contacts</h1>
          <ul>
            <li><Link to={"/contact/1/Instagram"}>Instagram</Link></li>
            <li><Link to={"/contact/2/Linkedin"}>Linkedin</Link></li>
            <li><Link to={"/contact/3/Facebook"}>Facebook</Link></li>
          </ul>
        </>
    );
}
 
export default Contacts;