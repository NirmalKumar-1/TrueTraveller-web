import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Destinations from './components/Destinations/Destinations.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import TravelGuides from './components/TravelGuides/TravelGuides.jsx';
import TravelPackages from './components/TravelPackages/TravelPackages.jsx';
import "leaflet/dist/leaflet.css";
import './index.css'
import SubscribeSuccess from './components/Footer/SubscribeSuccess.jsx';
import ContactSuccess from './components/Contact/ContactSuccess.jsx';
import BookingSuccess from './components/Contact/BookingSuccess.jsx';
import ExploreTravelGuide from './components/TravelGuides/ExploreTravelGuide.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="destinations" element={<Destinations />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="guides" element={<TravelGuides />} />
      <Route path="packages" element={<TravelPackages />} />
      <Route path="subscribed" element={<SubscribeSuccess />} />
      <Route path="contact-success" element={<ContactSuccess />} />
      <Route path="booking-success" element={<BookingSuccess />} />
      <Route path="explore-travel-guide" element={<ExploreTravelGuide />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    basename: "/TrueTraveller-web", // ✅ CRITICAL
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
