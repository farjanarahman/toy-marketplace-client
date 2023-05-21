import { useState } from 'react';
import useTitle from '../hooks/useTitle';

const AddToyPage = () => {
  useTitle('Add A Toy')
  const [pictureUrl, setPictureUrl] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic
    // You can access the form field values from the state variables above
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a Toy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label htmlFor="pictureUrl" className="label">
            Picture URL
          </label>
          <input
            type="text"
            id="pictureUrl"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            className="input input-bordered"
            placeholder="Enter the picture URL of the toy"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
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
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="input input-bordered"
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
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            className="input input-bordered"
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
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input input-bordered"
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
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="input input-bordered"
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
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input input-bordered"
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input input-bordered"
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

export default AddToyPage;