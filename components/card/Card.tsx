import React, {useState} from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from "framer-motion"

interface CardProps{
    imgUrl: string,
    size: "sm"|"md"|"lg",
}

// const sizeMap = {
//     // lg: "large",
// }

const Card: React.FC<CardProps> = ({ imgUrl, size }) => {
    const [imgSrc, setImgSrc] = useState<string>(imgUrl);

    const handleImageError = () => {
        setImgSrc("/static/david.jpg");
    }
  return (
    <Wrap whileHover={{scale:1.1}} className={size||"md"}>
        <Image src={imgSrc} layout="fill" alt="image" onError={handleImageError} />
    </Wrap>
  )
}

export default Card
const Wrap = styled(motion.div)`
position: relative;
border-radius: 10px;
cursor: pointer;
margin-right: 0.5rem;
&:hover{
    z-index:1;
}
&.lg{
    height: 25rem;
    min-height: 25rem;
    width: 15rem;
    min-width: 15rem;
}
&.md{
    height: 20rem;
    width: 10rem;
}
&.sm{
    height: 10rem;
    width: 15rem
}

img{
    display:block;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    object-position: center;
    
border-radius: 10px;
}
    

`


