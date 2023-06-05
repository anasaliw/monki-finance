import React from "react";
import BCDevelopment from "./BlockChainDevelopment/BCDevelopment";
import Blogs from "./Blogs/Blogs";
import CaseStudies from "./CaseStudies/CaseStudies";
import ClientPage from "./ClientsPage/ClientPage";
import ContactPage from "./Contact/ContactPage";
import DigitalBuilder from "./DigitalBuilders/DigitalBuilder";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Partners from "./Partners/Partners";
import Services from "./ServicesSection/Services";
import WelcomePage from "./WelcomePage/WelcomePage";

function Home() {
  return (
    <>
      <Navbar />
      <WelcomePage />
      <Services />
      <BCDevelopment />
      <DigitalBuilder />
      <Partners />
      <ClientPage />
      <CaseStudies />
      <Blogs />
      <ContactPage />
      <Footer />
    </>
  );
}

export default Home;
