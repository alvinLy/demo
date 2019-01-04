import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Sidebar extends Component {	
	getYear() {
		return new Date().getFullYear();
	}

	render() {
		const itemMenus = [
			{
				name: 'Home',
				pathname: '/'
			},
			{
				name: 'Skills',
				pathname: '/Skills'
			},
			{
				name: 'Education',
				pathname: '/Education'
			},
			{
				name: 'Company History',
				pathname: '/Company'
			},
			{
				name: 'Work',
				pathname: '/Work'
			},
			{
				name: 'Contact',
				pathname: '/Contact'
			}
		]

		const rowMenu = itemMenus.map((item, index) =>{
	     	return(
	            <li key={index}><NavLink to={item.pathname} activeClassName="active" exact={true}>{item.name}</NavLink></li>
	     	)
  		})

	    return (
	    	<aside id="colorlib-aside" className="border js-fullheight">
				<div className="text-center">
					<div className="author-img" style={{backgroundImage: 'url(/assets/images/about.jpg)'}} />
					<h1 id="colorlib-logo"><Link to="/">Vinh An</Link></h1>
					<span className="position"><Link to="/">Front-end developer</Link> in Viet Nam</span>
				</div>
				<nav id="colorlib-main-menu" role="navigation" className="navbar" aria-expanded="false">
					<div id="navbar" className="collapse">
						<ul>{rowMenu}</ul>
					</div>
				</nav>
				<div className="colorlib-footer">
					<p><small>&copy; Copyright &copy;{this.getYear()} by Anlvin</small></p>
					<ul>
						<li><a href="https://facebook.com/anlvin" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
						<li><a href="https://www.instagram.com/_anlvin_/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
						<li><a href="https://www.linkedin.com/in/an-vĩnh-b6ba06176/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
					</ul>
				</div>
   		</aside>
    	);
  	}
}

export default Sidebar;
