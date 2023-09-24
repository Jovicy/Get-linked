import React from "react";
import Timelines from "./timeline";

const Timeline: React.FC = () => {
  const flexBetween = "flex items-center justify-between";
  return (
    <section className={`${flexBetween} w-full border-b border-gray-800 py-10`} id="timeline">
      <div className={`flex flex-col items-center mx-auto justify-center w-full gap-16 container`}>
        <div>
          <div>
            <h1 className="text-3xl font-bold font-opensans text-center">Timeline</h1>
          </div>
          <div>
            <p className="text-sm font-montserrat font-normal text-center">Here is the breakdown of the time we anticipate <br/> 
              using for the upcoming event.
            </p>
          </div>
        </div>
        
        {/* Include the Timeline component here */}
        <Timelines />
      </div>
    </section>
  );
};

export default Timeline;
