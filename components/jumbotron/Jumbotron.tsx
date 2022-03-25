// import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Button } from './../shared';
import { BsFillPlayFill } from 'react-icons/bs';
import { motion } from "framer-motion"

interface JumbotronProps {
	title: string;
	subTitle: string;
	imgUrl: string;
}
const Jumbotron: React.FC<JumbotronProps> = ({ title, subTitle, imgUrl }) => {
	return (
		<Wrap className='' imgUrl={imgUrl}>
			<div className='bg'>
				<motion.div whileHover={ {scale: 1.1}}  className='left'>
					<h2>{title}</h2>
					<p> {subTitle}</p>
					<Button rounded>
						{' '}
						<BsFillPlayFill style={{ marginRight: 10 }} /> Play
					</Button>
				</motion.div>
				<div className='right'>right homie</div>
			</div>
			{/* <Image src={imgUrl} alt='...' height={100} width={100} /> */}
			{/* <div className='bg'></div> */}
		</Wrap>
	);
};

export default Jumbotron;

const Wrap = styled.div<{ imgUrl: string }>`
	position: relative;
	height: 85vh;
	color:white;
	.content{
		z-index:99;
		color:red;
	}

	>.bg {
		height: 100%;
		width: 100%;
		background-size: cover;
		background-position: 50% 50%;
		background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2) ), url(${({ imgUrl }) => imgUrl});
		position: absolute;
		bottom: 0px;
		/* --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0)); */
		background-color: linear-gradient(to top,var(--tw-gradient-stops));
		pointer-events: none;
		&:hover{
			transition: all 0.5s ease;
		background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) ), url(${({ imgUrl }) => imgUrl});
		}
		display: flex;
		.left{
			display: flex;
			flex-direction: column;
			flex: 1;
			margin: 0 6rem;
			justify-content: space-between;
			height: 50%;
			max-height: 200px;
			justify-self: center;
			align-self: center;
			align-content: center;
			margin-bottom: 10%;
			 pointer-events: auto;
		}
		.right{
			flex:1;
		}
	}
`;
