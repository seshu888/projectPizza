import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ImgBg from '../../images/pizza-3.jpg';

export const MainContainer = styled.div`
	
	height: 100vh;

	background-position: center;
	background-size: cover;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
	background-color:red;
	@media screen and (max-width: 450px) {
		overflow:hidden !important;
		width:100%;
	}
`;
export const Nav = styled.nav`
	height: 80px;
	width: 100%;
	display: flex;
	margin:0;
	paddding:0;
	justify-content: space-between;
`;
export const NavLink = styled.nav`
	color: white;
	font-size: 3rem;
	font-weight: bold;
	line-spacing: 1px;
	text-decoration: none;
	cursor: pointer;
	padding: 10px;
`;
export const NavIcon = styled.div`
	position: absolute;
	right: 20px;
	margin:0;
	paddding:0;
	top: 0;
	color: #fff;
	font-size: 2 rem;
	p {
		font-weight: bold;
		font-size: 1.3rem;
	}
`;
export const BannerContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	margin:0;
	paddding:0;
	height: calc(100vh - 80px);
	max-height: 100%;
	padding: 0 20px;
	justify-content: center;
	width: 350px;

	@media screen and (max-width: 550px) {
		width: 100%;
			padding:0;
	}
`;
export const Bannerh1 = styled.h1`
	font-size: 3rem;
	color: white;
	box-shadow: 3px 5px #e9ba23;
	letter-spacing: 3px;
	@media screen and (max-width: 900px) {
		font-size: 2rem;
	}
`;
export const BannerP = styled.p`
	font-size: 1.4rem;
	color: white;
`;
export const BannerButton = styled.button`
	background: #e31837;
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	color: white;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
export const SidebarContainer = styled.aside`
	position: fixed;
	margin:0;
	paddding:0;
	z-index: 999;
	width: 350px;
	height: 100%;
	background: #ffc500;

	align-items: center;
	top: 0;
	transition: 0.3s ease-in-out;
	right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;
