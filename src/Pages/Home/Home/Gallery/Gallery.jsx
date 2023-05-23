const GallerySection = () => {
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
    },
    {
      id: 4,
      src: 'https://i.ibb.co/f2831js/Robot-4-removebg-preview.png',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: 'https://i.ibb.co/R97Cm76/Robot-10-removebg-preview.png',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: 'https://i.ibb.co/rfCd5cN/battle-Bot3-removebg-preview.png',
      alt: 'Image 6',
    },
  ];

  return (
    <section className="container mx-auto py-8">
       <p className='text-blue-500 font-semibold text-center'>Explore our</p>
      <h2 className="text-3xl font-bold mb-4 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center  rounded shadow">

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
    </section>
  );
};

export default GallerySection;

