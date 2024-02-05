import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedIn from "../../assets/linkedin.svg";


const Contact: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section className={`${flexBetween} w-full h-screen pt-36`}>
      <div className="flex items-center justify-evenly w-full container gap-20">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-span text-opensans text-3xl font-semibold">Get in touch</h1>
          </div>
          <div>
            <p className="font-normal font-montserrat text-base">Contact <br /> Information</p>
          </div>
          <div>
            <p className="font-normal font-montserrat text-base">27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
          </div>
          <div>
            <p className="font-normal font-montserrat text-base">Call Us : 07067981819</p>
          </div>
          <div>
            <p className="font-normal font-montserrat text-base">we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </p>
          </div>
          <div>
            <p className="font-semibold font-montserrat text-base">Contact <br /> Information</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-base font-normal font-montserrat text-span">Share on</h1>
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
        <div className="rounded-md w-2/5 p-10 bg-mixed-contact">
          <div className="w-full flex flex-col gap-7">
            <div>
              <h1 className="font-base font-opensans text-lg text-span">Questions or need assistance? <br />Let us know  about it!</h1>
            </div>
            <div>
              <input className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 rounded-sm" type="text" placeholder="First Name"/>
            </div>
            <div>
              <input className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 rounded-sm" type="email" placeholder="Mail"/>
            </div>
            <div>
              <input className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 pb-10 rounded-sm" type="text" placeholder="Message"/>
            </div>
            <div className="w-full flex justify-center">
              <div>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-none hover:border-border hover:border-2 text-white w-40 h-12 rounded font-montserrat font-normal text-base flex justify-center items-center"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
