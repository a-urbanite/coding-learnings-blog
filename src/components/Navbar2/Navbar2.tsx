import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar2Wrapper'>
        <Link className='mainMenuLink' to="/coding"> Coding </Link>
        <Menu menuButton={<MenuButton>Open menu</MenuButton>} transition>
            <MenuItem><Link className='mainMenuLink' to="/archaeology"> Archaeology </Link></MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Close Window</MenuItem>
            <SubMenu label="Styles">
                <MenuItem>about.css</MenuItem>
                <MenuItem>home.css</MenuItem>
                <MenuItem>index.css</MenuItem>
            </SubMenu>
        </Menu>
        </div>
    );
}

export default Navbar;