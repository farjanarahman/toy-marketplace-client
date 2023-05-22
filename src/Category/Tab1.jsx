import React, { useEffect, useState } from 'react';
// import Remote from './RemoteCard';

const Tab1 = () => {
    // conts remote = () => {
    const [remote, setRemote] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setRemote(data));
    }, [])

    const T1 = remote.find(({name}) => name === 'Tab_1');
    const { toys } = T1;

    return (
        <div>
    {
      toys && toys.map(toy =>
        <div>
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
        </div>
      )
    }
  </div>  
    );               
};

export default Tab1;












{/* {
                remote.map(remote => <Remote
                    key={remote._id}
                    remote={remote}
                ></Remote>)
            } */}