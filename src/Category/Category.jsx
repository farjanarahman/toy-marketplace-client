import { useState } from "react";
 

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <p className="font-semibold text-blue-500 text-center">Choose your category</p>
      <h3 className="text-center font-bold text-3xl mb-3">Shop By Category</h3>
      <div className="mt-5 container mx-auto">
        <div className="flex justify-center">
          <button
            className={`mr-2 py-2 px-4 rounded ${toggleState === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            onClick={() => toggleTab(1)}
          >
            Remote Controlled Robot
          </button>
          <button
            className={`mr-2 py-2 px-4 rounded ${toggleState === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            onClick={() => toggleTab(2)}
          >
            Dog Robot
          </button>
          <button
            className={`mr-2 py-2 px-4 rounded ${toggleState === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            onClick={() => toggleTab(3)}
          >
            Remoking Robot
          </button>
        </div>

{/* Tab1 */}
        <div className="mt-4">
          <div
            className={`${toggleState === 1 ? "block" : "hidden"
              } bg-white rounded-lg p-4`}
          >
            <hr className="my-4" />
           <div className="cards flex justify-center">
           <div className="card w-96 bg-base-100 shadow-xl mr-3">
              <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/gZWzpPc/Robot-2-removebg-preview.png" alt="Shoes" className="rounded-xl w-60 h-auto" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">MegaBotic</h2>
                <p><span>Price: </span>$30</p>
                <p><span>Rating: </span>4</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
           <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/sVTrQzq/Remote-Control-Robot-removebg-preview.png" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">RoboRacer</h2>
                <p><span>Price: </span>$30</p>
                <p><span>Rating: </span>4</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
           </div>
          </div>
{/* Tab2 */}
          <div
            className={`${toggleState === 2 ? "block" : "hidden"
              } bg-white rounded-lg p-4`}
          >
            <hr className="my-4" />
            <div className="cards flex justify-center">
           <div className="card w-96 bg-base-100 shadow-xl mr-3">
              <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/f2831js/Robot-4-removebg-preview.png" alt="Shoes" className="rounded-xl w-36 h-auto" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">PawBot</h2>
                <p><span>Price: </span>$30</p>
                <p><span>Rating: </span>4</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
           <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/YTbjJLm/Robot-9-removebg-preview.png" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">MechDog</h2>
                <p><span>Price: </span>$30</p>
                <p><span>Rating: </span>4</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
           </div>
          </div>

{/* Tab3 */}
          <div
            className={`${toggleState === 3 ? "block" : "hidden"
              } bg-white rounded-lg p-4`}
          >
            <hr className="my-4" />
            <div className="cards flex justify-center">
           <div className="card w-96 bg-base-100 shadow-xl mr-3">
              <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/jDcJLzf/513-Eu-F4-LRTL-AC-UL320-removebg-preview.png" alt="Shoes" className="rounded-xl w-48 h-auto" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">PawBot</h2>
                <p><span>Price: </span>$30</p>
                <p><span>Rating: </span>4</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
           <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/V94qJVN/images-1-removebg-preview.png" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">MechDog</h2>
                <p><span>Price: </span>$30</p>
                <p><span>Rating: </span>4</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;


