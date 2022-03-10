import React, { useState, useEffect } from 'react';

import {
	MainContainer,
	Nav,
	NavLink,
	NavIcon,
	BannerContent,
	Bannerh1,
	BannerP,
	BannerButton,SidebarContainer
} from '../Banner/BannerElements';
import Sidebar from '../Sidebar';


const Banner = () => {
	const [ openSidebar, setOpenSideBar ] = useState(false);
	const handleClick = () => {
		setOpenSideBar(true);
	};
	return (
		<MainContainer>
			<Nav>
				<NavLink>SPROUTS</NavLink>
			
					<NavIcon onClick={handleClick}>
						<p>Menu</p>
					</NavIcon>
					{openSidebar ? (
						<SidebarContainer >seshu</SidebarContainer>
					) : ""}
			</Nav>

			<BannerContent>
				<Bannerh1>Greatest Pizza Ever</Bannerh1>
				<BannerP>Ready in 60 seconds</BannerP>
				<BannerButton>Place Order</BannerButton>
			</BannerContent>
		</MainContainer>
	);
};
export default Banner;
