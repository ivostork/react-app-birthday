import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <section className="w-[320px] md:w-xl bg-white p-4 space-y-8">
        <h1 className="text-3xl">Birthday reminder {people.length}</h1>
        <List people={people} />
        <button
          type="button"
          onClick={() => setPeople([])}
          className="w-full inline-block py-1 bg-fuchsia-500 text-white"
        >
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
