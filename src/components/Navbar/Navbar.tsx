import './Navbar.css'
import { Link } from 'react-router-dom';
import { AiFillSetting } from "react-icons/ai";
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import AnimatedLogo from './AnimatedLogo/AnimatedLogo';

const Navbar = ({isAuth, signUserOut}: any) => {

    return (
        <div className='navContainer'>
            <AnimatedLogo/>
            <div className='navButtonBar'>
                { !isAuth && <Link className='mainNav__link' to="/login"> Login </Link>}
                { isAuth && <Link className='mainNav__link' to="/createpost"> Create Post </Link>}
                { isAuth && <span className='mainNav__link' onClick={signUserOut}>Log Out</span>}
                { isAuth && <Link className='mainNav__link' to="/settings"> <AiFillSetting/> </Link>}
                <ThemeSwitch/>
            </div>
        </div>
    );
}

export default Navbar;