import React from "react";
import libertyLogo from "../../assets/Liberty-logo.svg";
import winWise from "../../assets/Winwise.svg";
import wisper from "../../assets/wisper-logo.svg";
import payBox from "../../assets/Paybox.svg";
import libertyPay from "../../assets/Liberty-pay.svg";
import vuscular from "../../assets/Vuzual Plus.svg";

const Partners: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section className={`${flexBetween} w-full py-36 border-b border-gray-800`} id="partners">
      <div className="flex flex-col items-center mx-auto justify-center text-center w-11/12 container gap-20">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-3xl font-bold font-opensans text-center">Partners and Sponsors</h1>
          </div>
          <div>
            <p className="text-sm font-montserrat font-normal text-center">Getlinked Hackathon 1.0 is honored to have the following major <br /> 
              companies as its partners and sponsors
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-0 justify-center border border-span rounded-md w-full p-10 bg-mixed-partner">
          <div className="flex items-center justify-center gap-0">
            <div className="flex items-center justify-center w-[20rem] border-r border-b border-span cursor-pointer h-[8.5rem] p-10">
              <img src={wisper} alt="liberty-logo" />
            </div>
            <div className="flex items-center justify-center w-[20rem] border-none border-span cursor-pointer h-[8.5rem] p-10">
              <img src={libertyPay} alt="liberty-logo" />
            </div>
            <div className="flex items-center justify-center w-[20rem] border-l border-b border-span cursor-pointer h-[8.5rem] p-10">
              <img src={vuscular} alt="liberty-logo" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-0">
            <div className="flex items-center justify-center w-[20rem] border-r border-span cursor-pointer h-[8.5rem] p-10">
              <img src={libertyLogo} alt="liberty-logo" />
            </div>
            <div className="flex items-center justify-center w-[20rem] border-t border-span cursor-pointer h-[8.5rem] p-10">
              <img src={winWise} alt="liberty-logo" />
            </div>
            <div className="flex items-center justify-center w-[20rem] border-l border-span cursor-pointer h-[8.5rem] p-10">
              <img src={payBox} alt="liberty-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
