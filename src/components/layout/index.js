import React from "react";
import "./style.css";

import Footer from "../footer";
const Index = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen h-auto">
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Index;
