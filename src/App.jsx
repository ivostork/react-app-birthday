import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[320px] md:w-xl bg-white p-4 space-y-8">
        <h1 className="text-3xl">Card</h1>
        <ul className="space-y-8">
          {people.map((item) => {
            const { id, name, age, image } = item;
            return (
              <li className="flex gap-4" key={id}>
                <img
                  src={image}
                  alt=""
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl">{name}</h3>
                  <p className="text-gray-400">{age}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setPeople([])}
          className="w-full inline-block py-1 bg-fuchsia-500 text-white"
        >
          Clear all
        </button>
      </div>
    </div>
  );
};
export default App;
