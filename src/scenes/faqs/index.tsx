import React from "react";
import faq from "../../assets/faq.png";
import FAQ from "./faq"

const FAQs: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section className={`${flexBetween} w-full border-b border-gray-800 py-10`} id="faq">
      <div className={`flex mx-auto w-4/5 gap-16 container`}>
        <div className="flex flex-col gap-14 w-1/2">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-4xl font-bold font-opensans capitalize">frequently Asked
              <br /><span className="text-span">Question</span></h1>
            </div>
            <div>
              <p className="text-white font-montserrat text-sm font-normal leading-loose">We got answers to the questions that you <br /> might
                  want to ask about getlinked Hackathon 1.0
              </p>
            </div>
          </div>
          <div>
            <FAQ/>
          </div>
        </div>
        <div className="w-1/2">
          <img src={faq} alt="faq-avatar"/>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
