import React, { useEffect, useState } from 'react';
import DogCard from './DogCard';

const Tab2 = () => {
    const [dog, setDog] = useState([]);

    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setDog(data));
    }, [])
    return (
        <div>
            {
                dog.map(dog => <DogCard
                    key={dog._id}
                    dog={dog}
                ></DogCard>)
            }
        </div>
    );
};

export default Tab2;





