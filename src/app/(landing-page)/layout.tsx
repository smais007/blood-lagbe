import React from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";


interface LandingPageLayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return <div>
    <Navbar />
    {children}
   <div>
   <Footer />
   </div>
  </div>;

};

export default LandingPageLayout;
