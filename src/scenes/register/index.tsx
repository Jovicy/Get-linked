import React from "react";
import { Link } from "react-router-dom";
import manwalking from "../../assets/man-walking.svg"; 
import womanwalking from "../../assets/woman-walking.svg"; 
import register from "../../assets/register-avatar.svg"; 

const Register: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section className={`${flexBetween} w-full py-52`}>
      <div className="flex items-center justify-evenly w-full container gap-20">
        <div>
          <img src={register} className="h-[30.8125rem]" alt="register" />
        </div>
        <div className="rounded-md w-2/5 p-10 bg-mixed-contact">
          <div className="w-full flex flex-col gap-7">
            <div>
              <h1 className="font-base font-opensans text-lg text-span">Register</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-end">
                <div>
                  <p className="text-sm font-montserrat font-normal">Be part of this movement!</p>
                </div>
                <div className="border-b border-border border-dotted flex justify-center">
                  <div>
                    <img src={manwalking} alt="man-walking" />
                  </div>
                  <div>
                    <img src={womanwalking} alt="man-walking" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-montserrat font-normal text-lg">CREATE YOUR ACCOUNT</h1>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between gap-3">
                <div className="w-1/2 flex flex-col gap-3">
                  <label className="font-montserrat text-sm">First Name</label>
                  <input className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 rounded-sm" type="text" placeholder="First Name"/>
                </div>
                <div className="w-1/2 flex flex-col gap-3">
                  <label className="font-montserrat text-sm">First Name</label>
                  <input className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 rounded-sm" type="text" placeholder="First Name"/>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between gap-3">
                <div className="w-1/2 flex flex-col gap-3">
                  <label className="font-montserrat text-sm">First Name</label>
                  <input className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 rounded-sm" type="text" placeholder="First Name"/>
                </div>
                <div className="w-1/2 flex flex-col gap-3">
                  <label className="font-montserrat text-sm">First Name</label>
                  <input className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 rounded-sm" type="text" placeholder="First Name"/>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between gap-3">
                <div className="w-1/2 flex flex-col gap-3">
                  <label className="font-montserrat text-sm">Choose a car:</label>

                  <select className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 rounded-sm" placeholder="First Name">
                    <option className="bg-none text-span" value="volvo">Volvo</option>
                    <option className="bg-none text-span" value="saab">Saab</option>
                    <option className="bg-none text-span" value="mercedes">Mercedes</option>
                    <option className="bg-none text-span" value="audi">Audi</option>
                  </select>
                </div>
                <div className="w-1/2 flex flex-col gap-3">
                  <label className="font-montserrat text-sm">Choose a car:</label>

                  <select className="w-full bg-transparent font-montserrat border text-white placeholder:text-white placeholder:font-montserrat border-white p-2 rounded-sm" placeholder="First Name">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-span font-montserrat text-xs font-normal">Please review your registration details before submitting</p>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" className="bg-none border border-white"/>
                <label className="font-normal text-sm font-montserrat">Hello i told you who you are</label>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Link
                to="/register"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-none hover:border-border hover:border-2 text-white w-full h-12 rounded font-montserrat font-normal text-base flex justify-center items-center"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
