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





