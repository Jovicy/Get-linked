import React from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountDownTimer";
import underline from "../../assets/line.svg";
import './header.css';
import bulb from "../../assets/bulb.png";
import link from "../../assets/link-ison.png";
import blast from "../../assets/blast.png";
import vrBoy from "../../assets/vr-boy.png";
import bubble from "../../assets/bubble.png";

const Header: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section className={`${flexBetween} w-full pt-36 border-b border-gray-800`} id="header">
      <div className="flex mx-auto w-11/12 flex-col container gap-20 header">
        <div className="flex justify-end items-end flex-col gap-2">
          <div>
            <h2 className="font-montserrat text-4xl font-bold text-white italic">
              Igniting a Revolution in HR Innovation
            </h2>
          </div>
          <div>
            <img src={underline} alt="line" />
          </div>
        </div>
        <div className="flex h-full items-end">
          <div className="flex flex-col gap-14 w-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <div>
                    <div className="w-3/5 flex justify-end">
                      <img src={bulb} alt="bulb" />
                    </div>
                    <div>
                      <h1 className="font-opensans text-6xl font-black flex leading-tight">getlinked Tech</h1>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <h1 className="font-opensans text-6xl font-black flex leading-tight">Hackathon <span className="text-span">1.0</span></h1>
                    </div>
                    <div className="flex">
                      <div>
                        <img src={link} alt="link"/>
                      </div>
                      <div>
                        <img src={blast} alt="blast"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-normal text-lg font-montserrat">
                  Participate in getlinked tech Hackathon 2023 stand <br />a
                  chance to win a Big prize
                </p>
              </div>
              <div>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-none hover:border-border hover:border-2 text-white w-40 h-12 rounded font-montserrat font-normal text-base flex justify-center items-center"
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="pb-5">
              <CountdownTimer/>
            </div>
          </div>
          <div className="relative h-full">
            <img src={vrBoy} alt="vr-boy" className="relative h-full" />
            <img
              src={bubble}
              alt="bubble"
              className="absolute top-0 left-0 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
