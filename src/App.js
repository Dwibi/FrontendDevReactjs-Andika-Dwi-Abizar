import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RestaurantDetail from "./Pages/RestaurantDetail/RestaurantDetail";

function App() {
  return (
    <div
      style={{ scrollbarGutter: "stable" }}
      className="p-4 flex justify-center min-h-screen"
    >
      <div className="w-full max-w-6xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
