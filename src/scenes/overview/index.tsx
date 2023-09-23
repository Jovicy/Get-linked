import React from "react";
import { Link } from "react-router-dom";
import  lightBulb from "../../assets/light-bulb.png";
import instructor from "../../assets/rules.png";
import judges from "../../assets/judge.png"
import "./overview.css";

const Overview: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section className={`${flexBetween} w-full border-b border-gray-800 py-10`} id="overview">
      <div className={`flex flex-col mx-auto w-4/5 gap-16 container`}>
        <div className={`${flexBetween} gap-10 overview-main w-full`}>
          <div className="w-1/2">
            <img src={lightBulb} alt="light-bulb" />
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <div>
              <h1 className="text-4xl font-bold font-opensans">Introduction to getlinked<br /><span className="text-span">tech Hackathon 1.0</span></h1>
            </div>
            <div>
              <p className="font-normal font-montserrat text-white text-sm leading-7">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
              </p>
            </div>
          </div>
        </div>
        <div className={`${flexBetween} gap-10 overview-norm w-full`}>
          <div className="flex flex-col gap-3 w-1/2">
            <div>
              <h1 className="text-4xl font-bold font-opensans">Rules and<br /><span className="text-span">Guidelines</span></h1>
            </div>
            <div>
              <p className="font-normal font-montserrat text-white text-sm leading-7">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
              </p>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={instructor} alt="instructor" />
          </div>
        </div>
        <div className={`${flexBetween} gap-10 overview-norm w-full`}>
          <div className="w-1/2 flex justify-end">
            <img src={judges} alt="instructor" />
          </div>
          <div className="flex flex-col gap-10 w-1/2">
            <div>
              <h1 className="text-4xl font-bold font-opensans">Judging Criteria
              <br /><span className="text-span">Key attributes</span></h1>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-white font-montserrat text-sm font-normal"><span className="text-extra font-montserrat text-base font-bold">Innovation and Creativity: </span>Evaluate the uniqueness and creativity of the
                  solution. Consider whether it addresses a real-world problem in a novel 
                  way or introduces innovative features.
                </p>
              </div>
              <div>
                <p className="text-white font-montserrat text-sm font-normal"><span className="text-extra font-montserrat text-base font-bold">Functionality: </span>Assess how well the solution works. Does it perform its 
                  intended functions effectively and without major issues? Judges would
                  consider the completeness and robustness of the solution.
                </p>
              </div>
              <div>
                <p className="text-white font-montserrat text-sm font-normal"><span className="text-extra font-montserrat text-base font-bold">Impact and Relevance: </span>Determine the potential impact of the solution 
                  in the real world. Does it address a significant problem, and is it relevant 
                  to the target audience? Judges would assess the potential social, 
                  economic, or environmental benefits.
                </p>
              </div>
              <div>
                <p className="text-white font-montserrat text-sm font-normal"><span className="text-extra font-montserrat text-base font-bold">Technical Complexity: </span>Evaluate the technical sophistication of the solution. 
                  Judges would consider the complexity of the code, the use of advanced 
                  technologies or algorithms, and the scalability of the solution.
                </p>
              </div>
              <div>
                <p className="text-white font-montserrat text-sm font-normal"><span className="text-extra font-montserrat text-base font-bold">Adherence to Hackathon Rules: </span>Judges will Ensure that the team adhered 
                  to the rules and guidelines of the hackathon, including deadlines, use of 
                  specific technologies or APIs, and any other competition-specific requirements.
                </p>
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
      </div>
    </section>
  );
};

export default Overview;
