import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Content from "./Content";
import Register from "./Register";
import Login from "./Login";
import User from "./User";
import Adduser from "./Adduser";
import Showuser from "./Showuser";
import Product from "./Product";
import Pagenotfound from "./Pagenotfound";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2"
import Comp3 from "./Comp3"
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import Comp6 from "./Comp6";
import Comp7 from "./Comp7";
import Company from "./Company"
import Comp9 from "./Comp9";
import Comp10 from "./Comp10";
import Classcycle from "./Classcycle";
import Flag from "./Flag"
import Read from "./Read";
import Create from "./Create";

var projectroute = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<Content />} />
                <Route path="register-page" element={<Register />} />
                <Route path="login-page" element={<Login />} />
                <Route path="user" element={<User />}>
                    <Route path="add" element={<Adduser />} />
                    <Route path="show" element={<Showuser />} />
                </Route>
                <Route path="product/:productId" element={<Product />} />
                <Route path="*" element={<Pagenotfound />} />
                <Route path="props" element={<Comp1 age={20} />} />
                <Route path="state" element={<Comp2 />} />
                <Route path="use1" element={<Comp3 />} />
                <Route path="use2" element={<Comp4/>} />
                 <Route path="use3" element={<Comp5/>} />
                 <Route path="use4" element={<Comp6/>} />
                  <Route path="use5" element={<Comp7/>} />
                  <Route path="company" element={<Company/>} />
                   <Route path="api" element={<Comp9/>} />
                    <Route path="api1" element={<Comp10/>} />
                    <Route path="api3" element={<Classcycle/>} />
                      <Route path="flag" element={<Flag/>} />
                       <Route path="show" element={<Read/>} />
                            <Route path="add" element={<Create/>} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default projectroute;