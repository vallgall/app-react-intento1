import React from 'react';
import Search from './Search';
import './Menu.css';



function Menu(props) {
    return (
        <div className="container">
            <div className="subcontainer">
                <div className="titulo">
                    {props.title}
                </div>
                <div className="search">
                    <Search />
                </div>
                <div className="actions">
                    <button className="button btn-blue">+ Añadir nuevo GIF</button>
                </div>
            </div>
        </div>
        );
}

export default Menu;