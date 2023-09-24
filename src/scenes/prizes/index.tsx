import React from "react";
import bigCup from "../../assets/big-cup.svg";
import silverCoin from "../../assets/silver_medal 1.svg";
import goldCoin from "../../assets/gold_medal 1.svg";
import bronzeCoin from "../../assets/bronze_medal 1.svg";
import './prizes.css';

const Prizes: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section className={`${flexBetween} w-full py-36 border-b border-gray-800 prizes`} id="prizes">
      <div className="flex mx-auto w-11/12 container gap-20">
        <div className="w-2/5">
          <img src={bigCup} alt="big-cup" />
        </div>
        <div className="flex flex-col gap-24 items-center w-3/5">
          <div>
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-4xl font-bold font-opensans capitalize">Prizes and
                <br /><span className="text-span">rewards</span></h1>
              </div>
              <div>
                <p className="text-white font-montserrat text-sm font-normal leading-loose">Hightlight of the prizes or rewards for the winners <br /> and participant</p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-5">
            <div className="border-2 border-span rounded-lg bg-mixed p-8 w-[13.25rem] h-[18.5rem]  flex flex-col gap-4 text-center justify-center items-center">
              <div>
                <img src={silverCoin} alt="silver-coin" className="relative mx-auto -mt-32 w-9/12"/>
              </div>
              <div>
                <h1 className="text-4xl text-white font-montserrat font-bold">2nd</h1>
                <p className="text-2xl text-white font-montserrat font-semibold">Runner</p>
              </div>
              <div>
                <h1 className="text-3xl text-span font-montserrat font-bold">N300,000</h1>
              </div>
            </div>
            <div className="border-2 border-prize rounded-lg bg-mixed-extra p-8 w-[13.25rem] h-[21.6875rem] flex flex-col gap-4 text-center justify-center items-center">
              <div>
                <img src={goldCoin} alt="silver-coin" className="relative -mt-44 w-full"/>
              </div>
              <div>
                <h1 className="text-4xl text-white font-montserrat font-bold">1st</h1>
                <p className="text-2xl text-white font-montserrat font-semibold">Runner</p>
              </div>
              <div>
                <h1 className="text-3xl text-prize font-montserrat font-bold">N400,000</h1>
              </div>
            </div>
            <div className="border-2 border-span rounded-lg bg-mixed p-8 w-[13.25rem] h-[18.5rem]  flex flex-col gap-4 text-center justify-center items-center">
              <div>
                <img src={bronzeCoin} alt="silver-coin" className="relative mx-auto -mt-32 w-9/12"/>
              </div>
              <div>
                <h1 className="text-4xl text-white font-montserrat font-bold">3rd</h1>
                <p className="text-2xl text-white font-montserrat font-semibold">Runner</p>
              </div>
              <div>
                <h1 className="text-3xl text-span font-montserrat font-bold">N150,000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
