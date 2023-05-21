import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const SingleToy = ({item}) => {
    const toy = useLoaderData();
    console.log(toy);
    const { name, picture, seller_name, seller_email, price, rating, quantity, description } = toy;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{seller_name}</p>
                    <p>{seller_email}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{quantity}</p>
                    <p>{description}</p>
                    <Rating
                      placeholderRating={rating}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-warning"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;