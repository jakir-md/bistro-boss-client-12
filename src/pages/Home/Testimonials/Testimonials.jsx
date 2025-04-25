import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Testimonials = () => {

    const [reviews, setReveiws] = useState([]);

    useEffect(()=>{
        fetch('reveiws.json').then(res => res.json()).then(data => setReveiws(data));
    }, [])

    return (
        <div>
            <section>
                <SectionTitle heading={"Testimonails"} subHeading={"What our client says?"}></SectionTitle>
            </section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(item => <SwiperSlide key={item._id}>
                        <div>
                            
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;