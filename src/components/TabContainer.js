import React from "react";

import { Link } from "react-router-dom";
function TabContainer() {
  return (
    <div className="">
      <div className="font-medium   border-b-2 border-gray-300">
        <ul className="flex flex-wrap -mb-px">
          <li className="">
            <Link
              to="upcoming"
              className="inline-block
              text-light-black p-4 border-b-4 border-light-black rounded-t-lg "
            >
              Upcoming
            </Link>
            <Link
              to="completed"
              className="inline-block p-4 border-b-2 
              text-gray-400 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Completed
            </Link>
            <Link
              to="real-time-tracking"
              className="inline-block 
              text-gray-400 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Real-Time Tracking
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TabContainer;
