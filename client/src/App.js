import { useEffect } from "react";
import TodoList from "./components/TodoList";
import WeatherCard from "./components/WeatherCard";

import SearchEngine from "./components/SearchEngine";
import Clock from "./components/Clock";
import Greating from "./components/Greating";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="">

      <div>
        <Greating />
      </div>
      <div className="mb-10 mt-4 max-w-4xl mx-auto">
        <SearchEngine />
      </div>
      <div>

      </div>
      <div className="flex justify-between p-4">
        <div className="w-96 max-w-md">
          <WeatherCard />
        </div>
        <div className="w-96 max-w-md">
          <Gallery />
        </div>
        <div className="w-96 max-w-md">
          <TodoList />
        </div>
        <div className="max-w-md">

        </div>
      </div>
    </div>
  );
}

export default App;