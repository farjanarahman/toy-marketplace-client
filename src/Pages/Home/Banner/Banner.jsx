import banner from '../../../assets/images/Real_banner.png'

const Banner = () => {
    return (
        <div className="carousel bg-violet-300">
            <div className="carousel-item flex justify-between items-center">
                <div className="w-1/2">
                    <h2 className='text-orange-600 bold'>RoboPlayground</h2>
                    <p>Explore a world of robotic wonders! Find the perfect robot companion for endless fun.</p>
                    <button className="btn btn-warning mt-5">Explore</button>
                </div>
                <div className="w-1/2">
                    <img className="h-80" src={banner} alt="Banner" />
                </div>
            </div>
        </div>

    );
};

export default Banner;