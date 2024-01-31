

import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "contact",
    element: <ContactUs/>
  }
]);


function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
