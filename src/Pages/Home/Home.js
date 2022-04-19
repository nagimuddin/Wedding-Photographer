import React from 'react';
import Services from '../Services/Services';
import Bennar from '../Shared/Bennar/Bennar';
import MyBlog from '../Shared/MyBlog/MyBlog';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <Services></Services>
            <MyBlog></MyBlog>
        </div>
    );
};

export default Home;