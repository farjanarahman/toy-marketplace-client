import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-5">Shop By Category</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded-l ${
            toggleState === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => toggleTab(1)}
        >
          Robo PlayBot
        </button>
        <button
          className={`py-2 px-4 ${
            toggleState === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => toggleTab(2)}
        >
          Cute Robots
        </button>
        <button
          className={`py-2 px-4 rounded-r ${
            toggleState === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => toggleTab(3)}
        >
          Dog Robots
        </button>
      </div>

      <div className="bg-white p-4 mt-4">
        <div
          className={`${toggleState === 1 ? "block" : "hidden"}`}
        >
          <h2 className="text-xl font-bold mb-2 text-center">Robo PlayBot</h2>
          <hr className="w-16 border-2 border-black mb-2" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={`${toggleState === 2 ? "block" : "hidden"}`}
        >
          <h2 className="text-xl font-bold mb-2">Content 2</h2>
          <hr className="w-16 border-2 border-black mb-2" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={`${toggleState === 3 ? "block" : "hidden"}`}
        >
          <h2 className="text-xl font-bold mb-2">Content 3</h2>
          <hr className="w-16 border-2 border-black mb-2" />
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
  );
}

export default Tabs;
