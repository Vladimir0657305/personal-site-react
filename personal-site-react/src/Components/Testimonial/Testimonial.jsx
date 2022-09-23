import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePicl from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import {Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
    const clients = [
        {
            img: profilePicl,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur reiciendis totam eligendi ad magni vero sed inventore voluptatem aliquam expedita. Sunt accusamus neque ipsum voluptate explicabo, hic excepturi pariatur dignissimos iusto atque, aliquam consequuntur velit alias! Consequuntur possimus totam id, porro dolor libero dolorem deleniti provident autem eveniet nostrum asperiores."
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur reiciendis totam eligendi ad magni vero sed inventore voluptatem aliquam expedita. Sunt accusamus neque ipsum voluptate explicabo, hic excepturi pariatur dignissimos iusto atque, aliquam consequuntur velit alias! Consequuntur possimus totam id, porro dolor libero dolorem deleniti provident autem eveniet nostrum asperiores."
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur reiciendis totam eligendi ad magni vero sed inventore voluptatem aliquam expedita. Sunt accusamus neque ipsum voluptate explicabo, hic excepturi pariatur dignissimos iusto atque, aliquam consequuntur velit alias! Consequuntur possimus totam id, porro dolor libero dolorem deleniti provident autem eveniet nostrum asperiores."
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur reiciendis totam eligendi ad magni vero sed inventore voluptatem aliquam expedita. Sunt accusamus neque ipsum voluptate explicabo, hic excepturi pariatur dignissimos iusto atque, aliquam consequuntur velit alias! Consequuntur possimus totam id, porro dolor libero dolorem deleniti provident autem eveniet nostrum asperiores."
        }
    ]
    
    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exeptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
                <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
            </div>
            {/* slider */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            
            
            >
                {clients.map((client, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt=""/>
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    )
}

export default Testimonial