import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Vladimir Bakanov.pdf';

const Servoces = () => {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
            <span>My Awesome</span>
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
                <div style={{top: '-8rem', left: '34rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Photoshop, Adobe, Adobe XD'}
                    />
                </div>

                {/* second card */}
                <div style={{top: '6rem', left: '4rem'}}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'HTML, CSS, JavaScript, React'}
                    />
                </div>

                {/* third card */}
                <div style={{ top: '19rem', left: '30rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, non?"}
                    />
                </div>
                <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Servoces