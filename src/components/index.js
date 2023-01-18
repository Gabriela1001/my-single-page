import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/share' >
			Share with your friends
		</NavLink>
		<NavLink to='/events' >
			Modify notes
		</NavLink>
		<NavLink to='/annual' >
			Annual Report
		</NavLink>
		<NavLink to='/team' >
			Organization
		</NavLink>
		<NavLink to='/blogs' >
		Study Group
		</NavLink>
		<NavLink to='/sign-up' >
			Sign Up
		</NavLink>
		{/* Second Nav */}
		<NavLink to='/sign-in'>Press to see the users details</NavLink>
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
