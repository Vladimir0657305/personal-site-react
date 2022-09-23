import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';



const Intro = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color:darkMode?'white':''}}>Hi! I am </span>
                    <span>Volodymyr Bakanov</span>
                    <span>Frontend Developer with high level of experirience in web programming and development, producting the Quality work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/Vladimir0657305" target='_blank'>
                        <img src={Github} alt=""/>
                    </a>
                    
                    <img src={LinkedIn} alt=""/>
                    <img src={Instagram} alt=""/>
                </div>
            </div>
            
            <div className="i-right">
                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy} alt=""/>
                <motion.img 
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                src={glassesimoji} alt=""/>
            <motion.div 
                initial={{top:'-4%', left: '74%'}}
                whileInView={{ left: '68%' }}
                transition={transition}
                style={{top:'-4%', left: '58%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div 
                initial={{ top: '23rem', left: '9rem' }}
                whileInView={{ left: '1.4rem' }}
                transition={transition}
                style={{top: '23rem', left: '1.4rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>
            {/* blur divs ================================================================================*/}
            <div className='blur' style={{background: 'rgb(238 210 255)'}}>
                    <div className="blur" style={{ background: '#72c8d9', top: '29rem', left: '-30rem', width: '21rem', height: '11rem'}}></div>
            </div>
            </div>
        </div>
    )
}

export default Intro