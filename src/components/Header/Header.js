import React from 'react'
import { useLocation } from 'react-router-dom';
function Header() {
	const withouSidebarRoutes = ["/login", "/register"];

const { pathname } = useLocation();
if (withouSidebarRoutes.some((item) => pathname.includes(item)))
  return null;

	return (
		<div>
			<a href="login">login</a>
			<a href="register">register</a>
		</div>
	)
}

export default Header