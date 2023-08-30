import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import GeoLocation from "./pages/GeoLocation";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/geolocation" element={<GeoLocation />} />
        </Route>
    )
)