import { useState } from "react";
import Tab1 from "./Tab1";
import { useLoaderData } from "remix";


function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const data = useLoaderData();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-5">Shop By Category</h2>
      <div className="flex justify-center space-x-4 mb-4">
        {data.tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`py-2 px-4 ${
              toggleState === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => toggleTab(index + 1)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 mt-4">
        {data.tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`${toggleState === index + 1 ? "block" : "hidden"}`}
          >
            <h2 className="text-xl font-bold mb-2 text-center">{tab.name}</h2>
            <hr className="w-16 border-2 border-black mb-2" />
            {tab.toys.map((toy) => (
              <Tab1 key={toy.id} item={toy} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
