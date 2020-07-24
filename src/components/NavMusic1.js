import React, { Component } from 'react';
 import { Link } from 'react-router-dom';

class NavMusic extends Component {
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
 <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-nav">
 <div className="container">
 <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon" />
 </button>
 <div className={`${classOne}`} id="navbarResponsive">
 <ul className="navbar-nav m-auto">
 <li className="nav-item active">
 <Link className="nav-link" to="/store">Books & CDs</Link>
 </li>
 <li className="nav-item">
 <Link className="nav-link" to="/discography">Discography</Link>
 </li>
 <li className="nav-item">
 <Link className="nav-link" to="/media">Media</Link>
 </li>
 </ul>
 </div>
 </div>
 </nav>
 );
 }
 }
export default NavMusic;