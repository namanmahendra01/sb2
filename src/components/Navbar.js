import React, { Component } from 'react'
import './navbar.css'
import { FaWhatsapp } from 'react-icons/fa';

export class Navbar extends Component {
    render() {
        
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup =<a className="menu__link" href={link.link}>{link.label}</a>;
            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });
        return (
            <div>
                <nav className="navbar">
                    <img src={this.props.logo} alt="Logo" className="logo"/>
                    <ul className="menu__list">
                        
                        <li>
                            <p><i><FaWhatsapp className="whatsapp"/></i>{linksMarkup}</p>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar

