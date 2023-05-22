import React from 'react';

const Remote = ({ remote }) => {
    const { toys } = remote;
    return (
        <>
        <div>
            {toys.map(toy =>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={toy.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{toy.name}</h2>
                        <p>{toy.price}</p>
                        <p>{toy.rating}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
            )}
     </div>
        </>
    
    );
};
        
export default Remote;





