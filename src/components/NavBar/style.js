import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavBarContainer = styled.nav``

export const StyledNavBarItem = styled.li``

export const StyledMobileNavBar = styled.div``

export const NavigationListMobileStyle = styled.ul`
  margin: 0;
	padding: 0 ${ props => props.theme.paddings.mainHorizontal };
	display: flex;
	height: fit-content;
	background-color: ${ props => props.theme.colors.backgroundMagniola };
	width: ${ props => props.theme.widths.full };
	flex-direction: column;
	position: absolute;
	top: ${ props => props.theme.heights.header };
	left: 0;
	z-index: 1;

	& li{
		display: flex;
		border-bottom: .1rem solid ${ props => props.theme.colors.blue };
		&:last-child{
			border-bottom: none;
		}
	}
`

export const StyledNavLink = styled(Link)`
	width: ${ props => props.theme.widths.full };
	padding: ${ props => props.theme.paddings.navListItem } 0;
	font-size: ${ props => props.theme.fontSizes.main };
	color: ${ props => props.theme.colors.blue };
	cursor: pointer;
`

export const NavigationListDesktopStyle = styled.ul``
