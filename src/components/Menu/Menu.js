import { Component } from "react";
import {Route, Link} from 'react-router-dom';

const menus = [
    {
        name : 'Trang Chủ',
        to : '/',
        exact : true
    },
    {
        name : 'Quản Lí Sản Phẩm',
        to : '/product-list',
        exact : false
    }
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return(
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({match}) =>{
                var active = match ? 'active' : '' ;
                return (
                    <li className="nav-item">
                        <Link to={to} className={`nav-link ${active}`}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-10">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {this.showMenu(menus)}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu, index) => {
                return(
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}
export default Menu;