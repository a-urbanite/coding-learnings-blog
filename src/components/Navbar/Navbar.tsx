import { Link } from 'react-router-dom';
import './Navbar.css'
import { AiFillSetting } from "react-icons/ai";


const Navbar = ({isAuth, setIsAuth, signUserOut}: any) => {

    return (
        <div className='mainNav'>
            <Link className='mainNav__link' to="/"> Blog </Link>
            { !isAuth && <Link className='mainNav__link' to="/login"> Login </Link>}
            { isAuth && <Link className='mainNav__link' to="/createpost"> Create Post </Link>}
            { isAuth && <button className='mainNav__link' onClick={signUserOut}>Log Out</button>}
            { isAuth && <Link className='mainNav__link' to="/settings"> <AiFillSetting/> </Link>}
        </div>
    );
}

export default Navbar;