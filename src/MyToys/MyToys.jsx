import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [user]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/mytoys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = toys.filter(toy => toy?._id !== id);
                        setToys(remaining);
                    }
                });
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead className='bg-blue-300'>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map(toy =>
                        <tr className='bg-blue-300' key={toy?._id}>
                            <th>{toy?.sellerEmail}</th>
                            <td>{toy?.toyname}</td>
                            <td>{toy?.subcategory}</td>
                            <td>{toy?.price}</td>
                            <td>{toy?.quantity}</td>
                            <td>
                                <Link to={`/updatetoys/${toy?._id}`}>
                                    <button className="btn btn-info me-2"><FaEdit /></button>
                                </Link>
                                <button onClick={() => handleDelete(toy?._id)} className="btn btn-error"><FaTrash /></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
