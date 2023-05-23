import React from 'react';

const images = [
    {
      id: 1,
      src: 'https://i.ibb.co/qgcgVsZ/Robot-1-removebg-preview.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://i.ibb.co/gZWzpPc/Robot-2-removebg-preview.png',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://i.ibb.co/jDcJLzf/513-Eu-F4-LRTL-AC-UL320-removebg-preview.png',
      alt: 'Image 3',
    }
]
const Best = () => {
    return (
        <div className='mt-5'>
            <p className='text-blue-500 font-semibold text-center'>Our most popular</p>
            <h2 className='font-bold text-center text-3xl'>Best Selling Toys</h2>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center  rounded shadow">

{images.map((image) => (
          <div key={image.id} className="bg-violet-400 flex justify-center items-center rounded-lg m-3">
            <img
              src={image.src}
              alt={image.alt}
              className="w-60 h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
        </div>
    );
};

export default Best;