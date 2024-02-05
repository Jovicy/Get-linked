import React from "react";
import shield from "../../assets/Shield.png";
import privacyIcon from "../../assets/privacy.png";
import { Link } from "react-router-dom";

const Privacy: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section className={`${flexBetween} w-full py-36 border-b border-gray-800`} id="privacy">
      <div className="flex mx-auto w-11/12 container gap-10">
          <div className="w-1/2 flex flex-col gap-7">
            <div className="flex w-full flex-col gap-5">
              <div>
                <h1 className="text-4xl font-bold font-opensans capitalize">Privacy Policy and 
                <br /><span className="text-span">Terms</span></h1>
              </div>
              <div>
                <p className="text-mixed-privacy font-montserrat text-sm font-normal leading-loose">Last updated on September 12, 2023</p>
              </div>
              <div>
                <p className="text-white font-montserrat text-sm font-normal leading-loose">Below are our privacy & policy, which outline a lot of goodies. <br/> it’s our aim to always take of our participant</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 justify-center border border-span rounded-md w-10/12 p-10">
              <div>
                <p className="text-sm text-white font-normal font-montserrat leading-7">At getlinked tech Hackathon 1.0, we value your privacy
                  and are committed to protecting your personal information.
                  This Privacy Policy outlines how we collect, use, disclose, 
                  and safeguard your data when you participate in our tech 
                  hackathon event. By participating in our event, you consent 
                  to the practices described in this policy.
                </p>
              </div>
              <div>
                <div>
                  <h1 className="text-base text-span font-bold font-montserrat">Licensing Policy</h1>
                  <p className="text-sm text-white font-bold font-montserrat leading-7">Here are terms of our Standard License:</p>
                </div>
                <div>
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="w-3 h-3 bg-green-500 rounded-full">
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-white font-normal font-montserrat leading-7">
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="w-3 h-3 bg-green-500 rounded-full">
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-white font-normal font-montserrat leading-7">
                      You are licensed to use the item available at any free source
                      sites, for your project developement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-none hover:border-border hover:border-2 text-white w-40 h-12 rounded font-montserrat font-normal text-base flex justify-center items-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 h-full">
            <img src={shield} alt="shield" className="relative h-full" />
            <img
              src={privacyIcon}
              alt="privacyIcon"
              className="absolute top-8 left-0 z-10"
            />
          </div>
      </div>
    </section>
  );
};

export default Privacy;
