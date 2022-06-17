import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';

const Navbar3Func = () => {

  return (
    <div>
      <div >
        <Menu mode="horizontal" onClick={() => console.log('click ')}>
          <MenuItem key="1">1</MenuItem>
          <SubMenu key="2" title="2">
            <MenuItem key="2-1">2-1</MenuItem>
          </SubMenu>
          <SubMenu key="3" title="3">
            <MenuItem key="3-1">3-1</MenuItem>
            <MenuItem key="3-2">3-2</MenuItem>
          </SubMenu>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar3Func