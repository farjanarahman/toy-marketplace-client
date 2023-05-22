import React, { useEffect, useState } from 'react';

const Tab2 = () => {
    const [dog, setDog] = useState([]);

    useEffect
    return (
        <div>
            
        </div>
    );
};

export default Tab2;



import React, { useEffect, useState } from 'react';
import Remote from './RemoteCard';

const Tab1 = () => {
    // conts remote = () => {
    const [remote, setRemote] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setRemote(data));
    }, [])

    return (
        <div>
            {
                remote.map(remote => <Remote
                    key={remote._id}
                    remote={remote}
                ></Remote>)
            }
        </div>
    );
};

export default Tab1;





