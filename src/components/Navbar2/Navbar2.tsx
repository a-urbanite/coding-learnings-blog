import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';
import './Navbar2.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

    return (
        <div className='Navbar2Wrapper'>
            <Link className='mainMenuLink' to="/"> Home </Link>
            <Menu menuButton={<MenuButton className='NavbarButton' ><Link className='mainMenuLink' to="/coding"> Coding </Link></MenuButton>} transition>
                <MenuItem>Pet me Up</MenuItem>
                <MenuItem>MovieFinder</MenuItem>
                <MenuItem>Akzisemauer</MenuItem>
                <SubMenu label="Styles">
                    <MenuItem>about.css</MenuItem>
                    <MenuItem>home.css</MenuItem>
                    <MenuItem>index.css</MenuItem>
                </SubMenu>
            </Menu>
            <Menu menuButton={<MenuButton className='NavbarButton'><Link className='mainMenuLink' to="/archaeology"> Archaeology </Link></MenuButton>} transition>
                <MenuItem>Saasdve</MenuItem>
                <MenuItem>Cloasdsase Window</MenuItem>
                <SubMenu label="Styles">
                    <MenuItem>absadasout.css</MenuItem>
                    <MenuItem>homesad.css</MenuItem>
                    <MenuItem>indesaddsx.css</MenuItem>
                </SubMenu>
            </Menu>
        </div>
    );
}

export default Navbar;