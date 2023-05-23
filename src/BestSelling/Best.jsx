import React from 'react';
import GallerySection from '../Pages/Home/Home/Gallery/Gallery';

const Best = () => {
    return (
        <div>
            <p className='text-blue-500 font-semibold text-center'>Our most popular</p>
            <h2 className='font-bold text-center text-3xl'>Best Selling Toys</h2>
            <GallerySection></GallerySection>
        </div>
    );
};

export default Best;