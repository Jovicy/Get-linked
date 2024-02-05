import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedIn from "../../assets/linkedin.svg";
import telephone from "../../assets/telephone.svg";
import location from "../../assets/location.svg";

const Footer: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      className={`${flexBetween} bg-footer w-full py-10 border-b border-gray-800`}
    >
      <div className="flex flex-col mx-auto w-11/12 container gap-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-20 w-1/2">
            <div className="flex gap-2 flex-col">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <p className="text-sm text-white font-normal font-montserrat leading-7">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                  sapiente magnam consequuntur amet omnis ullam quasi quia non ad
                  aut.
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <ScrollLink
                  to="overview"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="font-montserrat font-normal text-sm cursor-pointer capitalize hover:text-border"
                >
                  Terms of use
                </ScrollLink>
              </div>
              <div>
                <ScrollLink
                  to="privacy"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="font-montserrat font-normal text-sm cursor-pointer capitalize text-white hover:text-border"
                >
                  Privacy Policy
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 justify-around">
              <div className="flex flex-col gap-4">
                <h1 className="text-span text-sm font-montserrat font-semibold">
                  Useful Links
                </h1>
                <div className="flex flex-col gap-2">
                  <div>
                    <ScrollLink
                      activeClass="active"
                      to="overview"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-normal text-xs font-montserrat text-white capitalize hover:text-border"
                    >
                      Overview
                    </ScrollLink>
                  </div>
                  <div>
                    <ScrollLink
                      activeClass="active"
                      to="timeline"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-normal text-xs font-montserrat text-white capitalize hover:text-border"
                    >
                      timeline
                    </ScrollLink>
                  </div>
                  <div>
                    <ScrollLink
                      activeClass="active"
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      className="font-normal text-xs font-montserrat text-white capitalize hover:text-border"
                    >
                      FAQs
                    </ScrollLink>
                  </div>
                  <div>
                    <Link
                      to="/register"
                      className="font-normal text-xs font-montserrat capitalize text-white hover:text-border"
                    >
                      Register
                    </Link>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div>
                      <h1 className="text-span text-sm font-montserrat font-normal">
                        Follow us
                      </h1>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div>
                        <img src={linkedIn} alt="linkedIn" />
                      </div>
                      <div>
                        <img src={instagram} alt="instagram" />
                      </div>
                      <div>
                        <img src={twitter} alt="twitter" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-span text-sm font-montserrat font-semibold">
                Useful Links
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={telephone} alt="telephone" />
                  </div>
                  <div>
                    <p className="text-xs font-normal font-montserrat">+234 679 81819</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={location} alt="telephone" />
                  </div>
                  <div>
                    <p className="text-xs font-normal font-montserrat">27,Alara Street Yaba 100012 Lagos State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="font-normal text-xs font-montserrat text-white">All rights reserved. © getlinked Ltd.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
