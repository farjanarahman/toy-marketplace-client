// import { useState } from 'react';
// import useTitle from '../hooks/useTitle';
// import Swal from 'sweetalert2'

// const AddToyPage = () => {
//   useTitle('Add A Toy')
//   const handleAddToy = event => {
//     event.preventDefault();

//     const form = event.target;

//     const name = form.name.value;
//     const pictureUrl = form.pictureUrl.value;
//     const sellerName = form.sellerName.value;
//     const sellerEmail = form.sellerEmail.value;
//     const subCategory = form.subCategory.value;
//     const price = form.price.value;
//     const quantity = form.quantity.value;
//     const description = form.description.value;

//     const newToy = { name, sellerName, sellerEmail, subCategory, price, quantity, description, pictureUrl }
//     console.log(newToy)

//     //send data to the server
//     fetch('http://localhost:5000/toy', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(newToy)
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         if(data.insertedId){
//           Swal.fire({
//             title: 'Success!',
//             text: 'Added successfully',
//             icon: 'success',
//             confirmButtonText: 'Cool'
//           })
//         }
//       })
//   }
//   const [pictureUrl, setPictureUrl] = useState('');
//   const [name, setName] = useState('');
//   const [sellerName, setSellerName] = useState('');
//   const [sellerEmail, setSellerEmail] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [rating, setRating] = useState('0');
//   const [quantity, setQuantity] = useState('');
//   const [description, setDescription] = useState('');

import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { AuthContext } from '../providers/AuthProvider';
 
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/addtoy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    console.log(data)
  };

  return (
    <div className="max-w-md mx-auto bg-violet-300 p-5 rounded mb-5">
      {errors.exampleRequired && <span>This field is required</span>}
      <h2 className="text-2xl font-bold mb-4 text-center">Add a Toy</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control">
          <label htmlFor="pictureUrl" className="label">
            Picture URL
          </label>
          <input
            type="text"
            id="pictureUrl"
            // value={pictureUrl}
            // onChange={(e) => setPictureUrl(e.target.value)}
            className="input input-bordered"
            {...register("image")}
            placeholder="Enter the picture URL of the toy"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="name" className="label">
            Toy Name
          </label>
          <input
            type="text"
            id="name"
            // value={toyname}
            // onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            {...register('toyname')}
            placeholder="Enter the name of the toy"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="sellerName" className="label">
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            // value={sellerName}
            // onChange={(e) => setSellerName(e.target.value)}
            className="input input-bordered"
            {...register("sellername", { required: true })}
            placeholder="Enter the seller name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="sellerEmail" className="label">
            Seller Email
          </label>
          <input
            type="email"
            id="sellerEmail"
            value={user?.email}
            // onChange={(e) => setSellerEmail(e.target.value)}
            className="input input-bordered"
            {...register("sellerEmail")}
            placeholder="Enter the seller email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="subCategory" className="label">
            Sub-category
          </label>
          <input
            type="text"
            id="subCategory"
            // value={subCategory}
            // onChange={(e) => setSubCategory(e.target.value)}
            {...register("subcategory")}
            className="input input-bordered"
            placeholder="Enter the sub-category of the toy"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="price" className="label">
            Price
          </label>
          <input
            type="number"
            id="price"
            // value={price}
            // onChange={(e) => setPrice(e.target.value)}
            className="input input-bordered"
            {...register("price", { required: true })}
            placeholder="Enter the price of the toy"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="rating" className="label">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            // value={rating}
            // onChange={(e) => setRating(e.target.value)}
            className="input input-bordered"
            {...register("rating")}
            placeholder="Enter the rating of the toy"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="quantity" className="label">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            // value={quantity}
            // onChange={(e) => setQuantity(e.target.value)}
            className="input input-bordered"
            {...register("quantity")}
            placeholder="Enter the available quantity of the toy"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="description" className="label">
            Description
          </label>
          <textarea
            id="description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered"
            {...register("description")}
            placeholder="Enter a detailed description of the toy"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToy;
