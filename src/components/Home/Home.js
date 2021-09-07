import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <LatestNews />
        </div>
    );
};

export default Home;