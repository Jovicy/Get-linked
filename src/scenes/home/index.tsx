import React from "react";
import Header from "../header";
import Overview from "../overview";
import FAQs from "../faqs";
import Timeline from "../timeline";
import Prizes from "../prizes";
import Partners from "../partners";
import Privacy from "../privacy";
import Footer from "../footer";


const Home: React.FC = () => {
  return (
    <div className="relative" id="home">
      <Header/>
      <Overview/>
      <FAQs/>
      <Timeline/>
      <Prizes/>
      <Partners/>
      <Privacy/>
      <Footer/>
    </div>
  );
};

export default Home;
