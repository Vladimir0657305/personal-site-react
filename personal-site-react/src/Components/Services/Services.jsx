import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Vladimir Bakanov.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';

const Servoces = () => {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
            <span>services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam officiis 
                <br />
                deleniti modi iusto a adipisci excepturi quis.
            </span>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
            </a>
            
            <div className='blur s-blur1' style={{background: '#abf1ff'}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                
                {/* first card */}
                <motion.div 
                    whileInView={{left: '30rem'}}
                    initial={{left: '14rem'}}
                    transition={transition}
                    style={{top: '-8rem', left: '44rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Photoshop, Adobe, Adobe XD'}
                    />
                </motion.div>

                {/* second card */}
                <motion.div 
                    whileInView={{ left: '4rem' }}
                    initial={{ left: '-25%' }}
                    transition={transition}
                    style={{top: '6rem', left: '-24rem'}}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'HTML, CSS, JavaScript, React'}
                    />
                </motion.div>

                {/* third card */}
                <motion.div 
                    whileInView={{ left: '30rem' }}
                    initial={{ left: '14rem' }}
                    transition={transition}
                    style={{ top: '19rem', left: '0rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, non?"}
                    />
                </motion.div>
                <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Servoces