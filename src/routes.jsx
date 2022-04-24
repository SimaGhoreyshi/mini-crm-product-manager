import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Span } from "./components";
import { AboutUs, ItemsList } from "./views";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/home" element={<ItemsList />} />
        <Route path="/:id" element={<Span />} />
        <Route exact path="/" element={<ItemsList />} />
      </Routes>
    </BrowserRouter>
  );
};
