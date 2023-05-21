import { Link } from 'react-router-dom';

const Tab1 = ({ item }) => {
    const { id, name, picture, price, rating } = item;

    return (
        <div>
            <div className="cards flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl mx-5">
                    <figure><img src={picture} alt="Toy" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>Price: {price}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/toys/${id}`}><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab1;
