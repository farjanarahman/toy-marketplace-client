import Banner from '../Banner/Banner';
import GallerySection from '../../../Gallery/Gallery';
import Category from '../../../Category/Category';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner />
            <GallerySection />
            <Category />
        </div>
    );
};

export default Home;
