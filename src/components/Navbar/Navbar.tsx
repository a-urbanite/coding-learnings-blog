import {Menu, MenuItem, MenuButton, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = ({isAuth, setIsAuth, signUserOut}: any) => {

    return (
        <div className='NavbarWrapper'>
            <Link className='mainMenuLink' to="/"> Vita </Link>
            <Menu menuButton={<MenuButton className='NavbarButton' > Coding </MenuButton>} transition>
                <MenuItem><Link className='subMenuLink' to="/coding/pet-me-up"> [TS] Pet me Up! </Link></MenuItem>
                <MenuItem><Link className='subMenuLink' to="/coding/moviefinder"> [TS] Moviefinder </Link></MenuItem>
                <MenuItem><Link className='subMenuLink' to="/coding/akzisemauer"> [webdev/geodata] Akzisemauer </Link></MenuItem>
                <MenuItem><Link className='subMenuLink' to="/coding/dai-wordpress-plugin"> [PHP] Wordpress plugin </Link></MenuItem>
                <MenuItem><Link className='subMenuLink' to="/coding/least-cost-path-analysis"> [R] Least Cost Path analysis </Link></MenuItem>
                {/* <SubMenu label="Styles">
                    <MenuItem>about.css</MenuItem>
                    <MenuItem>home.css</MenuItem>
                    <MenuItem>index.css</MenuItem>
                </SubMenu> */}
            </Menu>
            <Link className='mainMenuLink' to="/archaeology"> Archaeology </Link>
            {/* <Menu menuButton={<MenuButton className='NavbarButton'><Link className='mainMenuLink' to="/archaeology"> Archaeology </Link></MenuButton>} transition>
                <MenuItem>Saasdve</MenuItem>
                <MenuItem>Cloasdsase Window</MenuItem>
                <SubMenu label="Styles">
                    <MenuItem>absadasout.css</MenuItem>
                    <MenuItem>homesad.css</MenuItem>
                    <MenuItem>indesaddsx.css</MenuItem>
                </SubMenu>
            </Menu> */}
            { isAuth && <Link className='mainMenuLink' to="/test-site"> Test site </Link>}
            <Link className='mainMenuLink' to="/blog"> Blog </Link>
                { !isAuth ? <Link className='mainMenuLink' to="/login"> Login </Link> : 
                <>
                <Link className='mainMenuLink' to="/createpost"> Create Post </Link>
                <button onClick={signUserOut}>Log Out</button>
                </>
                }
        </div>
    );
}

export default Navbar;