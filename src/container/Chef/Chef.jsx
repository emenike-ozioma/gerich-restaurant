import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reerse">
            <img src={images.chef} alt="chef" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title={"Chef's Word"} />
            <h1 className="headtext__cormorant">What we believe in</h1>

            <div className="app__chef-content">
                <p className="p__opensans">
                    <img src={images.quote} alt="quote" className="app__chef-content_quote" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere 
                    architecto aliquam suscipit, expedita ullam labore amet, illum, 
                    perspiciatis impedit ipsum obcaecati distinctio ipsam. Quasi 
                    fugit rem, fuga perspiciatis unde laudantium ad provident aliquam 
                    amet est cupiditate sit dolores! 
                </p>
            </div>

            <div className="app__chef-sign">
                <p>kevin lou</p>
                <p className="p__opensans">Chef and Founder</p>
                <img src={images.sign} alt="sign" />
            </div>
        </div>
    </div>
);

export default Chef;
