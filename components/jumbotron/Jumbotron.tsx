import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Button } from './../shared';
import { BsFillPlayFill } from 'react-icons/bs';

interface JumbotronProps {
	title: string;
	subTitle: string;
	imgUrl: string;
}
const Jumbotron: React.FC<JumbotronProps> = ({ title, subTitle, imgUrl }) => {
	return (
		<Wrap className='' imgUrl={imgUrl}>
			<div className='bg'>
				<div className='left'>
					<h2>{title}</h2>
					<p> {subTitle}</p>
					<Button rounded>
						{' '}
						<BsFillPlayFill style={{ marginRight: 10 }} /> Play
					</Button>
				</div>
				<div className='right'>right homie</div>
			</div>
			{/* <Image src={imgUrl} alt='...' height={100} width={100} /> */}
			{/* <div className='bg'></div> */}
		</Wrap>
	);
};

export default Jumbotron;

const Wrap = styled.div<{ imgUrl: string }>`
	/* display: flex; */
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
		/* background-color: var(--red); */
		position: absolute;
		/* top: 0;
		left: 0; */
		bottom: 0px;
		--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0));
		background-color: linear-gradient(to top,var(--tw-gradient-stops))
		--tw-gradient-from: var(--black); 
		pointer-events: none;
		&:hover{
		background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) ), url(${({ imgUrl }) => imgUrl});

		}
		
 /* background-blend-mode: darken; */

		/* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('landingpagepic.jpg'); */
   

		/* z-index: 0; */
		display: flex;

		.left{
			display: flex;
			flex-direction: column;
			flex: 1;
			margin: 0 6rem;
			/* align-items: center; */
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
