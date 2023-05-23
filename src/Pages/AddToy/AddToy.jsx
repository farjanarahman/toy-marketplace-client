import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/useTitle';
 
const AddToy = () => {
  useTitle('Add Toy')
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
        console.log(data);
        // Show SweetAlert success message
        Swal.fire({
          icon: 'success',
          title: 'Toy Added',
          text: 'The toy has been successfully added!',
          confirmButtonText: 'OK'
        });
      })
      .catch(error => {
        console.error(error);
        // Show SweetAlert error message
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while adding the toy.',
          confirmButtonText: 'OK'
        });
      });
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
            value={user?.email || ''}
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
