import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="nav_bar">
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">GIT-API</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link><Link to="/" style={{ textDecoration: 'none', color: 'rgb(255, 255, 255)'}}>Home</Link></ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link eventKey={2}>
                <Link to="/about" style={{ textDecoration: 'none', color: 'rgb(255, 255, 255)'}}>About</Link>
                </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
                </div>
            </React.Fragment>
        );
    }
}

export default Nav;