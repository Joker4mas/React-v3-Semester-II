// import React from 'react';
import { Link } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
const About = () => {
  return (
    <MainLayout>
    <div>
      
        <div className="text-center my-6">
        <h1>Hello Welcome &#x1F615; To ABout us</h1>
        <p className="my-24">
          {" "}
          Take a trip back &#x27A1;
          <button className="text-green-400 p-1">
            <Link to="/">Home</Link>
          </button>
        </p>
      </div>
       
    </div>
    </MainLayout>
  )
};

export default About;
