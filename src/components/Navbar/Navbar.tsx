import { Link } from 'react-router-dom';
import './Navbar.css'
import { AiFillSetting } from "react-icons/ai";
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { useLocation } from 'react-router-dom'

const Navbar = ({isAuth, signUserOut}: any) => {
    const location = useLocation();

    return (
        <div className='mainNav'>
            { location.pathname !== '/' && <Link className='mainNav__link' to="/"> Blog </Link>}
            { !isAuth && <Link className='mainNav__link' to="/login"> Login </Link>}
            { isAuth && <Link className='mainNav__link' to="/createpost"> Create Post </Link>}
            { isAuth && <span className='mainNav__link' onClick={signUserOut}>Log Out</span>}
            { isAuth && <Link className='mainNav__link' to="/settings"> <AiFillSetting/> </Link>}
            <ThemeSwitch/>
        </div>
    );
}

export default Navbar;