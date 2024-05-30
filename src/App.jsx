import React from "react";
import Home from "./components/page/Home";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/layer/RootLayout";
import Product from "./components/page/Product";
import About from "./components/page/About";
import Contacts from "./components/page/Contacts";
import Login from "./components/page/Login";
import Signup from "./components/page/Signup";
import Myaccount from "./components/page/Myaccount";
import Cart from "./components/page/Cart";
import Checkout from "./components/page/Checkout";
import Error from "./components/page/Error";
import ProductInside from "./components/page/ProductInside";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        // errorElement={<Error />}
      >
        <Route index element={<Home/>} ></Route>
        <Route path="/shop" element={<Product/>}></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contacts" element={<Contacts/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
        <Route path="/myaccount" element={<Myaccount/>} ></Route>
        <Route path="/cart" element={<Cart/>} ></Route>
        <Route path="/checkout" element={<Checkout/>} ></Route>
        <Route path="/error" element={<Error/>} ></Route>
        <Route path="/productinside" element={<ProductInside/>} ></Route>

      </Route>
    )
  );
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App