import React, { useState, useEffect } from 'react';
import { ProductInfo } from '../Products/ProductElements';
import {
	MainContainer,
	Nav,
	NavLink,
	NavIcon,
	BannerContent,
	Bannerh1,
	BannerP,
	BannerButton,
	SidebarNav
} from '../Banner/BannerElements';
import { Close } from '@material-ui/icons';

const Banner = ({ cartItems,total }) => {
	const [ openSidebar, setOpenSideBar ] = useState(false);

	const handleClick = () => {
		setOpenSideBar(!openSidebar);

	};


	console.log(cartItems);
	return (
		<MainContainer>
			<SidebarNav openSidebar={openSidebar}>
				<p onClick={handleClick}>Close the Cart</p>
				{cartItems &&
					cartItems.map((product, index) => {
						return (
							<div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
								<ProductInfo>{product.name}</ProductInfo>
								<ProductInfo>{product.price}</ProductInfo>
							</div>
						);
					})}
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<ProductInfo>total</ProductInfo>
					<ProductInfo>{total}</ProductInfo>
				</div>
			</SidebarNav>
			<Nav>
				<NavLink>SPROUTS</NavLink>

				<NavIcon>
					<p onClick={handleClick}>Menu</p>
				</NavIcon>
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
