import React from "react";
import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <div>
      <div className="text-center my-36">
        <p className="my-8">Hey you seem lost &#x1F615; !</p>
        <p>Not to worry yeah I got you &#x1F601;</p>

        <div className=" mx-auto my-24" >
          <Link to="/" className="">
            <p>Catch a ride</p>
            <button className="text-green-400 bg-gray-600 p-2 rounded-lg">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
