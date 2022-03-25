import Link from 'next/link';
import React, {useState} from 'react';
import styled from 'styled-components';
import { Button } from '../components/shared';
import {RiArrowDropDownLine} from "react-icons/ri"

const Navbar = () => {
	const [showSignOutButton, setShowSignOutButton] = useState<boolean>(false)
	return <div>
		<Nav>
<h3>VidFlix</h3>
			<ul>
				<li> <Link href="/my-list">Mylist</Link> </li>
				<li className="user-info" onClick={() => setShowSignOutButton(!showSignOutButton)} > {"Email and username"}<RiArrowDropDownLine style={{cursor:"pointer", fontSize:"1.6rem"}}/>
				
				{showSignOutButton && <Button inverted onClick={()=>setShowSignOutButton(!showSignOutButton)}> Sign Out</Button>}
				</li>
			</ul>
		</Nav>
	</div>
};

const Nav = styled.nav`
	height: 3rem;
	line-height: 3rem;
	/* background-color: #fff; */
	background-image: linear-gradient(to bottom, #141414, rgba(255,255,255,0));
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	padding: 0 5rem;

	ul{
		display: flex;
				align-items: center; 
		list-style: none;
		li{ 
			padding: 1rem 2rem;
			&.user-info{
				display: flex;
				align-items: center; 
				position: relative;
				>button{
					position: absolute;
					top: 70px;
					width: 8rem;
				}
			}
		}
	}
`;

export default Navbar;
