import { useState } from "react";
import Tab1 from "./Tab1";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <h3 className="text-center font-bold">Shop By Category</h3>
      <div className="mt-5 container mx-auto">
        <div className="flex justify-center">
          <button
            className={`mr-2 py-2 px-4 rounded ${
              toggleState === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => toggleTab(1)}
          >
            Remote Controlled Robot
          </button>
          <button
            className={`mr-2 py-2 px-4 rounded ${
              toggleState === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => toggleTab(2)}
          >
            Dog Robot
          </button>
          <button
            className={`mr-2 py-2 px-4 rounded ${
              toggleState === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => toggleTab(3)}
          >
            Tab 3
          </button>
        </div>

        <div className="mt-4">
          <div
            className={`${
              toggleState === 1 ? "block" : "hidden"
            } bg-white rounded-lg p-4`}
          >
            <h2 className="text-2xl font-bold">Remote Controlled Robot</h2>
            <hr className="my-4" />
            <p>
              <Tab1></Tab1>
            </p>
          </div>

          <div
            className={`${
              toggleState === 2 ? "block" : "hidden"
            } bg-white rounded-lg p-4`}
          >
            <h2 className="text-2xl font-bold">Dog Robot</h2>
            <hr className="my-4" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>

          <div
            className={`${
              toggleState === 3 ? "block" : "hidden"
            } bg-white rounded-lg p-4`}
          >
            <h2 className="text-2xl font-bold">Content 3</h2>
            <hr className="my-4" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
