import React from "react";
import { Header, Footer, ReceiveInfo } from "../Home/components";

function Program() {
  return (
    <div>
      <Header />
      <section>
        <div>
          <div>Admission Requirements</div>
          <div>Program Details</div>
          <div>Apply Now</div>
        </div>
      </section>
      <ReceiveInfo />
      <Footer />
    </div>
  );
}

export default Program;
