import {Menu, MenuItem, MenuButton, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { AiFillSetting } from "react-icons/ai";


const Navbar = ({isAuth, setIsAuth, signUserOut}: any) => {

    return (
        <div className='mainNav'>
            <Link className='mainNav__link' to="/"> Vita </Link>
            <Menu menuButton={<MenuButton className='mainNav__link' > Coding </MenuButton>} transition>
                <MenuItem><Link className='mainNav__subLink' to="/coding/pet-me-up"> [TS] Pet me Up! </Link></MenuItem>
                <MenuItem><Link className='mainNav__subLink' to="/coding/moviefinder"> [TS] Moviefinder </Link></MenuItem>
                <MenuItem><Link className='mainNav__subLink' to="/coding/akzisemauer"> [webdev/geodata] Akzisemauer </Link></MenuItem>
                <MenuItem><Link className='mainNav__subLink' to="/coding/dai-wordpress-plugin"> [PHP] Wordpress plugin </Link></MenuItem>
                <MenuItem><Link className='mainNav__subLink' to="/coding/least-cost-path-analysis"> [R] Least Cost Path analysis </Link></MenuItem>
                {/* <SubMenu label="Styles">
                    <MenuItem>about.css</MenuItem>
                    <MenuItem>home.css</MenuItem>
                    <MenuItem>index.css</MenuItem>
                </SubMenu> */}
            </Menu>
            <Link className='mainNav__link' to="/archaeology"> Archaeology </Link>
            { isAuth && <Link className='mainNav__link' to="/test-site"> Test site </Link>}
            <Link className='mainNav__link' to="/blog"> Blog </Link>
            { !isAuth && <Link className='mainNav__link' to="/login"> Login </Link>}
            { isAuth && <Link className='mainNav__link' to="/createpost"> Create Post </Link>}
            { isAuth && <button className='mainNav__link' onClick={signUserOut}>Log Out</button>}
            { isAuth && <Link className='mainNav__link' to="/settings"> <AiFillSetting/> </Link>}
        </div>
    );
}

export default Navbar;