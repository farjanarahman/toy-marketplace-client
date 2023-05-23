import Banner from './Banner/Banner';
import GallerySection from './Gallery/Gallery';
import Category from '../../../Category/Category';
import useTitle from '../../../hooks/useTitle';
import Best from '../../../BestSelling/Best';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner />
            <GallerySection />
            <Category />
            <Best></Best>
        </div>
    );
};

export default Home;
