import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import {Dropdown, NavItem, NavLink} from 'react-bootstrap'

class Nav extends Component {
 constructor(props) {
 super(props);
 this.toggleNavbar = this.toggleNavbar.bind(this);
 this.state = {
 collapsed: true,
 };
 }
 toggleNavbar() {
 this.setState({
 collapsed: !this.state.collapsed,
 });
 }
 render() {
 const collapsed = this.state.collapsed;
 const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
 const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
 return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
 <div className="container">
 <a className="navbar-brand" href="#">Adam Woolf</a>
 <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon" />
 </button>
 <div className={`${classOne}`} id="navbarResponsive">
 <ul className="navbar-nav m-auto">
 <li className="nav-item active">
 <Link className="nav-link" to="/">Home</Link>
 </li>
 <li className="nav-item">
 <Link className="nav-link" to="/webdev">Web Developer</Link>
 </li>
 <Dropdown as={NavItem}>
  <Dropdown.Toggle as={NavLink}>Musician</Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item> <Link to="/musician">Biography</Link>
    </Dropdown.Item>
    <Dropdown.Item> <Link to="/store">Books & CDs</Link>
    </Dropdown.Item>
    <Dropdown.Item> <Link to="/media">Media</Link>
    </Dropdown.Item>
    <Dropdown.Item> <Link to="/discography">Recordings</Link>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
 <li className="nav-item">
 <Link className="nav-link" to="/photos">Photography</Link>
 </li>
 
 <li className="nav-item">
 <Link className="nav-link" to="/posts">Blog</Link>
 </li>
 <li className="nav-item">
 <Link className="nav-link" to="/contact">Contact</Link>
 </li>
 </ul>
 </div>
 </div>
 </nav>
 );
 }
 }
export default Nav;