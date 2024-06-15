import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* Card */}
      <div>
        <div className="flex place-content-between">
          
 <nav class="nav font-semibold text-lg">
        <ul class="flex items-center">
            <li class="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer active">
              <Link to="/home">Home</Link>
            </li>
            <li class="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
             <Link to="/settings">Settings</Link>
            </li>
            <li class="p-4 border-b-2 border-white border-opacity-0 hover:border-opacity-100 hover:text-white duration-200 cursor-pointer">
              <Link to="/info">Info</Link>
            </li>
            
        </ul>
    </nav>
          {/* Darkmode test */}
          <div className="flex">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
