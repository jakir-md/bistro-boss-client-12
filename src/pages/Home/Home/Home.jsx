import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularItems from '../PopularItems/PopularItems';
import Featured from '../FeaturedItems/Featured';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Category></Category>
            <PopularItems></PopularItems>
            <Featured></Featured>
        </div>
    );
};

export default Home;